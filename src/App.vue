<template>
  <div id="app">
    <h1>Candy Shop</h1>
    <router-view>
      <router-link to="/">home</router-link>
      <router-link to="/bag">bag</router-link>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style></style>
