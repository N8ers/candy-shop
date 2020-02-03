<template>
  <div id="app">
    <div class="heading">
      <h1 class="header">Candy Shop</h1>
      <router-view>
        <router-link to="/">home</router-link>
        <router-link to="/bag">bag</router-link>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
.heading {
  background-color: #ccc;
}
.header {
  text-align: center;
}
</style>
