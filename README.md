# GoodLive

## 技术栈
React + ReactHook + ReactRouter + Redux + Axios + Less + 第三方

## 计划完成功能 
 1.首页展示
 2.城市管理
 3.搜索功能
 4.上拉加载
 5.详情页
 6.收藏功能
 7.订单评价

 ## 初始化环境构建
 1.项目环境：create-react-app 脚手架构建项目环境
 2.支持less语法
 3.集成网络请求

 ## Less支持的配置
 在React脚手架构建的环境中，默认支持的是CSS和Sass/Scss，所以需要自己配置Less
 1.执行命令： npm run eject(创建完成后直接执行此命令),如果修改了文件。打开了文件根目录，显示隐藏文件，删除 .git文件夹，再次执行命令
 2.安装依赖npm install --save-dev less less-loader
 3.修改配置文件
 配置1，
 const lessRegex=/\.less$/;
 const lessModuleRgex=/\.module\.less$/;
 配置2，{
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'icss',
                  },
                },
                'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'local',
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },

## 配置网络请求
1.安装依赖
npm install --save axios
2.配置相关文件
