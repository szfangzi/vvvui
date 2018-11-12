# vvv UI， 一个 VUE UI 组件

[![Build Status](https://www.travis-ci.org/szfangzi/vvvui.svg?branch=master)](https://www.travis-ci.org/szfangzi/vvvui)

## 介绍

这个是我在学习 VUE 组件化开发过程中写的一个 UI框架，希望对大家有用。

## 开始使用

1. 引入样式




使用本框架，请在全局CSS中启动以下样式

```
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
  }
```

IE8以上支持


```
  :root {
    --border-color-hover: #666;
    --border-color: #999;
    --border-color-light: lighten($border-color, 30%);
    --border-radius: 4px;
    --box-shadow-color: rgba(0, 0, 0, 0.5);
    --button-active-bg: #eee;
    --button-bg: white;
    --button-height: 32px;
    --color: #333;
    --light-color: #666;
    --font-size: 14px;
    --small-font-size: 12px;
    --input-height: 32px;
    --red: #F1453D;
    --grey: #eee;
    --blue: #4a90e2;

  }

  
```
IE15及其他浏览器支持

2. 安装 vvvui
```
npm i vvvui
```

3. 引入框架

```
import {Button, ButtonGroup, Icon} from 'vvvui';
import 'vvvui/dist/index.css';

Vue.component('v-button-group', ButtonGroup);
Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
```

4. 引入svg图标
```
<script type="text/javascript" src="//at.alicdn.com/t/font_906947_q3blvz21bk.js"></script>
```
在index.html引入


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码