import { xyRequest } from "../../index";

const citydata = "city/all";

//获取city页面数据
export const citydatesApi =  function() {
  return xyRequest.request({
    url: citydata,
  });
};


// const gettoken = async function (payload) {
//   const { token, id } = await xyRequest.request({
//     url: "/login",
//     method: "post",
//     data: payload,
//     interceptors: {
//       responseInterceptor: (response) => {
//         return response.data;
//       },
//     },
//   });
//   return { token, id };
// };
