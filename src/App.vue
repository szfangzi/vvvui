<template>
  <div>
    <v-button icon="arrow-down" :loading="loading" @click="loading = !loading">确定</v-button>

    <v-button icon="arrow-left" icon-position="right" :loading="loading" @click="loading = !loading">确定3</v-button>

<div style="margin:20px;"></div>

    <v-button-group>
      <div>123</div>
      <v-button icon="arrow-left"></v-button>
      <v-button>1</v-button>
      <v-button>2</v-button>
      <v-button icon="arrow-right" icon-position="right"></v-button>
    </v-button-group>

    <div id="x1"></div>
    <div id="x2"></div>
    <div id="x3"></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  input {
    outline: none;
  }

  ol,
  ul {
    list-style: none;
  }

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

  .box-shadow {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
</style>