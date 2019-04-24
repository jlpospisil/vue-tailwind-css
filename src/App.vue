<template>
  <div id="app">
    <div class="container min-h-full bg-white mx-auto text-center">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  @apply .h-screen .font-sans .bg-grey-lightest;
}
</style>
