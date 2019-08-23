# 基本配置
## 原型图
+ 参考关系 https://lanhuapp.com/url/U7ZqW  密码:xGAE  无法查看标注,但可以查看关系
+ 参考功能  http://bufantec.com/site/movie/index.html#/home
+ 参考标注 https://lanhuapp.com/url/IaMrj-TIE1f  没有关系图,但可以查看标注
+ 
## rem配置
+ 安装
  ```   
    1.  npm install postcss-pxtorem --save-dev
    2.  npm install lib-flexible --save
    3.  postcss.config.js 添加插件
        "postcss-pxtorem": {
            "rootValue": 37.5, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
            "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    4. main.js 引入 lib-flexible

  ```
## 基本布局
+ BaseLayer
+ Header
+ Footer

## better-scroller
+ https://better-scroll.github.io/docs/zh-CN/guide/#betterscroll-%E6%98%AF%E4%BB%80%E4%B9%88
## 地理定位


## swiper
+ https://github.com/surmon-china/vue-awesome-swiper
+ npm install vue-awesome-swiper --save
