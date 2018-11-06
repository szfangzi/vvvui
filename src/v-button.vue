<template>
  <button class="v-button">确定</button>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .v-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  >&-content {
    order: 2;
  }

  >.icon {
    order: 1;
    margin-right: .1em;
  }

  &.icon-right>&-content {
    order: 1;
  }

  &.icon-right>.icon {
    order: 2;
    margin-right: 0;
    margin-left: .1em;
  }

   .loading {
    animation: spin 2s infinite linear;
  }
  }
</style>