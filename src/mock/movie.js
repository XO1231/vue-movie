// mock一般用于模拟数据

import Mock from 'mockjs'

const Random = Mock.Random;

/**
 * 随机生成电影数据
 */
function movieList(){
    var size = 10;
    var list = [];
    for(var i = 0 ; i < size ; i ++){
        list.push({
            id: Random.guid(),
            title: Random.ctitle(),
            etitle: Random.title(),
            avatar: Random.image('375x200',Random.color()),
            time: Random.date()
        })
    }

    return list
}

export default {
    movieList
}
