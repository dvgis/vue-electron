<template>
  <div class="index">
    <img alt="Vue logo" src="assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 0;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
