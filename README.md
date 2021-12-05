# Webpack 5


### 1. entry 默认的目录是根目录
```js
    entry: {
        main: './src/main.js' // 注意：这里默认的目录是根目录
    },
```


### 2. sass-loader需要与scss 或 node-sass 一起使用

```
    Cannot find module 'sass'
```

Tips: 低版本的会的警告


### 3. mini-css-extract-plugin 的使用

1. 设置 MiniCssExtractPlugin.loader
2. plugins 中设置  new MiniCssExtractPlugin()


### 4. 使用 使用 output.clean 替换 clean-webpack-plugin

```js
  output: {
    clean: true, // 在生成文件之前清空 output 目录
  },
```

### 5. sideEffects

```js
// main.js
import './style/reset.css'
import './style/common.css'
```

**例子1**

```js
  // package.json
  "sideEffects": true, // 有副作用
```
reset.css 和  common.css 都被打包输出了


**例子2**

```js
  // package.json
  "sideEffects": false, // 没有副作用
```
reset.css 和 common.css 都没有被打包输出

**例子3**

```js
  "sideEffects": [
    "./src/style/reset.css",
    "./src/style/common.css"
  ]
```

**例子4**

需要测试引入 node_modules 中的css的情况

### 6. scss 警告信息

Deprecation Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.
 
Recommendation: math.div(1, 5) or calc(1 / 5)

More info and automated migrator: https://sass-lang.com/d/slash-div


### 7. 关于 tree-shaking 的猜测

在 development 模式下， css 会被直接 tree-shaking 掉，对于 js 会被标记为 unused harmony export square

在 production 模式下 会把 dead code tree-shaking 掉

production 环境可能用的 rollup ?