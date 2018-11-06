<template>
  <v-button></v-button>
</template>

<script>
  export default {

  }
</script>

<style>
  * {  padding: 0;  margin: 0;  box-sizing: border-box;  font-weight: normal;}
  a {  text-decoration: none;}
  .clearfix:before,.clearfix:after {  content: ' ';  display: table;}
  .clearfix:after {  clear: both;}
  input{outline:none;}
  ol,ul {  list-style: none;}
  :root{
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
.box-shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>