const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack')
module.exports={
  entry:'./src/app.js',
  output:{
  path:path.resolve(__dirname,'dist'),
  // path:path.join(__dirname,'dist'),
  filename:'build.js'
  },
  module:{
    loaders: [
      {
        test: /\.css$/,   //配置后缀名
        //css-loader   处理样式文件中的url()  
        //style-loader  作用 是吧css代码，插入到网页中 style
        loader: 'style-loader!css-loader'    //loader执行的顺序从右到左
      },
      {
        test: /\.less$/,   //配置后缀名
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'   //loader执行的顺序从右到左
      },
      {
        test: /\.scss$/,   //配置后缀名
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'   //loader执行的顺序从右到左
      },
      {
        //设置处理不同类型的文件
        test: /\.(jpg|gif|png|eot|svg|ttf|woff|otf)$/,
        loader: 'url-loader?limit=90000'  

        //loader: 'url-loader?limit=20480'  
        // limit 单位 字节 
        //limit的作用，如果图片小于 20480 图片会被编译成base64的字符串
        //如果大于20480 不会编译成base64字符串  并且依赖于file-loader 会把图片复制到输出目录bin  
        
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,           //排除指定内容
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    
  },
  plugins:[
        new htmlWebpackPlugin({
          title:'页面标题',
          filename: 'index.html',
          template:'template.html'
        }),
        new webpack.LoaderOptionsPlugin({
          options:{
            babel:{
              presets:['es2015'],
              plugins:['transform-runtime']
            }
          }
        })
  ]
}
