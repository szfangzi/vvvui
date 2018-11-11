<template>
  <div class="v-button-group">
    <slot />
  </div>
</template>

<script>
  export default {
    mounted () {
      for (const node of this.$el.children) {
        let nodeName = node.nodeName.toLowerCase();
        if(nodeName !== 'button'){
          console.warn(`v-button-group的子组件必须是v-button, 但是你写的是 ${nodeName}`);
          node.remove();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .v-button{
      border-radius:0;
      cursor: pointer;
      margin-left:-1px;
      &:first-child{
        margin-left:0px;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }

  }
</style>