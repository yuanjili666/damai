import http from "utils/http.js"    //引入Utils 这个文件夹是存放公共的方法/其他
//正在热映
export const movie_now_api = (cityId=10)=>http("get","/api/movieOnInfoList",{cityId:cityId})   
//即将上映
export const movie_coming_api = (cityId=10)=>http("get","/api/movieComingList",{cityId:cityId})