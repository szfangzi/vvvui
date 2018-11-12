<template>
  <button class="v-button" :class="[`icon-${iconPosition}`]" @click="$emit('click')">
    <v-icon v-if="loading" name="loading"></v-icon>
    <v-icon v-if="!loading && icon" :name="icon"></v-icon>
    <div class="v-button-content">
      <slot />
    </div>
  </button>
</template>

<script>
  import Icon from './v-icon.vue';

  export default {
    components:{
      'v-icon':Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(val) {
          return val === 'left' || val === 'right';
        }
      }
    },
    created() {

    },
    methods:{
      clickHandler(){
  
      }
    }
  }
</script>

<style lang="scss" scoped>
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

    >.v-button-content {
      order: 2;
    }

    &.icon-right>.v-button-content {
      order: 1;
    }




  }
</style>