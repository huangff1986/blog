/**
 * 入口文件
 */
require('./style.css')

alert('o阿斯蒂芬')

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}
