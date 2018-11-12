<template>
  <svg class="icon" :class="{'loading':name === 'loading'}" v-if="name"><use :xlink:href=`#icon-${name}` /></svg>
</template>

<script>
  export default {
    name:'v-icon',
    props:{
      name:{

      }
    }
  }
</script>

<style lang="scss" scoped>
.icon{
  width: 1em;
  height: 1em;
  margin-right: .1em;
  order: 1;
}
.icon-right > .icon {
    order: 2;
    margin-right: 0;
    margin-left: .1em;
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