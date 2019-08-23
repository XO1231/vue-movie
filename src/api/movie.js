import Movie from '@/mock/movie'
import request from './request'
/**
 * 模拟一个通过网络请求获取电影列表的方法
 */
function getMovieList(){
    // return Movie.movieList()
    return new Preomise((resolve,reject)=>{
        // 模拟网络延迟
        setTimeout(()=>{
            resolve(Movie.movieList())
        },500)
    })
}
/**
 * 通过网络获取真实地址
 */

function getMovieListByNet(data){
    return request ({
      url: '/api/douban/movie/in_theaters',  
      method:'get',  
      data  
    })
  }

export default{
    getMovieList,
    getMovieListByNet
}