import { xyRequest } from "../../index";

const carddates = "home/houselist";

//获取city页面数据
export const homecarddatesApi =  function(pages) {
  return xyRequest.request({
    url: carddates,
    params:{
      page:pages,
    }
  });
};
