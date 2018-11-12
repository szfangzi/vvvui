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
</style>