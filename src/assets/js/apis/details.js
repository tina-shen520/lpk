import axios from "axios"
import { baseURL } from "../config.js"

function getDetails(lid) {
  return new Promise(
    function (resolve, reject) {
      axios
        .get(baseURL + "/details", { params: { lid } })
        .then(result => {
          resolve(result.data)
        })
    }
  )
}
export { getDetails }

//在详情页中引入
// import {getDetails} from "assets/js/apis/details.js"
// 调用方法
/* getDetails().then(
      result => {
          var arr=result;
          [......]=arr;    //解构
      }
    )
*/ 