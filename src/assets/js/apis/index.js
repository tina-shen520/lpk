// 专门发送首页请求
import axios from "axios"
import {baseURL} from "../config.js" //解构
// 向首页发起请求
function getIndex() {
  return new Promise(
    function (resolve, reject) {
      axios
        .get(baseURL + "/index")
        .then(result => {
            resolve(result.data)
        })
    }
  )
}
export {
  getIndex
}

//在首页中引入
// import {getIndex} from "assets/js/apis/index.js"
// 调用方法
/* getIndex().then(
      result => {
          var arr=result;
          [......]=arr;    //解构
      }
    )
*/ 
