<template>
  <svg class="icon" v-if="name"><use :xlink:href=`#icon-${name}`></use></svg>
</template>

<script>
  export default {
    props:{
      name:{}
    }
  }
</script>

<style lang="scss" scoped>
.icon{
  width: 1em;
  height: 1em;
  margin-right: .1em;
}
.icon-right>.icon {
    order: 2;
    margin-right: 0;
    margin-left: .1em;
  }
</style>