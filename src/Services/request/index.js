import axios from "axios";
 
//定义一个类  可以用来创建多个axios的实例
class XYRequest {
  //每new一个实例就会调用一次construtor构造函数
  constructor(config) {
    this.instance = axios.create(config); //创建axios的实例
    this.interceptors = config.interceptors; //保存new出来的实例传过来的拦截器配置对象
 
    //刚创建出来的axios的实例  先走一遍new出来的实例传进来的拦截器配置对象
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    );
 
    //刚创建出来的axios的实例 再走一遍本身自带的拦截器（每个请求都必走这里一次）
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.log("全局请求错误");
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("全局响应错误");
        return Promise.reject(error);
      }
    );
  }
 
  // 发请求的时候调用的request方法;
  request(config) {
    // 用Promise包裹方便 使用await接收
    return new Promise((resolve, reject) => {
      //如果传了interceptors这个配置对象
      if (config.interceptors) {
        //再处理配置对象里的拦截器方法
        if (config.interceptors.requestInterceptor) {
          //拦截器里一般就处理config参数，传给它处理处理完了再返回即可
          config = config.interceptors.requestInterceptor(config); //此函数会return处理完的config
        }
      }
      //到这里才使用了axios的request方法真正发起请求
      this.instance
        .request(config) //这里的config是被所有的请求拦截器处理完的
        .then((res) => {
          if (config.interceptors) {
            //这里再看看要不要对响应做处理
            if (config.interceptors.responseInterceptor) {
              res = config.interceptors.responseInterceptor(res);
            }
          }
          //将结果发出去
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
}
 
export default XYRequest