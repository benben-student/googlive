## GoodLive
## 技术栈
React + ReactHook + ReactRouter + Redux + Axios + Less + 第三方

计划完成功能
首页展示
城市管理
搜索功能
上拉加载
详情页
收藏功能
订单评价
初始化环境构建
项目环境：create-react-app 脚手架构建项目环境
支持Less语法
集成网络请求Axios
Less支持的配置
在React脚手架构架的环境中，默认支持的是CSS和Sass/Scss。所以需要自己配置Less

执行命令：npm run eject (创建完项目不要做任何操作，直接执行次命令),如果我们修改了文件，打开文件根目录，显示隐藏文件，删除.git文件夹,再次执行命令
安装依赖
npm install --save-dev less less-loader
修改配置文件
// 配置1
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// 配置2
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 3,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 3,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
        modules: {
        getLocalIdent: getCSSModuleLocalIdent,
        },
    },
    'less-loader'
    ),
},
配置网络请求
安装依赖
npm install --save axios
配置相关文件
配置初始化样式
初始化css文件
引入字体图标库:iconfont
实现首页展示
创建页面:Home/Shop/LifeService/User

创建路由

安装依赖：npm install --save react-router-dom
配置AppRouter文件
底部导航

iconfont

顶部导航

REM配置 -> public/index.html加入REM的计算方案
焦点轮播图

参考文档：https://react-swipeable-views.com/
安装依赖：
npm install --save react-swipeable-views
npm install --save react-swipeable-views-utils
指示器需要独立实现
npm install --save classnames
搭建服务器环境提供数据

安装依赖
npm install --save experss
npm install --save cors
跨域使用cors后台解决
数据来源于json文件
首页列表数据展示

组件分类:
智能组件(HomeHotList)：处理数据，获取数据，过滤数据
木偶组件(HomeHotView)：视图适配
ReactHook useEffect业务分离
