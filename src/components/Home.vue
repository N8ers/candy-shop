<template>
  <div class="container">
    <router-link to="/bag">bag</router-link>
    <h2>I am Home</h2>
    <CandyGrid />
  </div>
</template>

<script>
import CandyGrid from "./CandyGrid";

export default {
  components: {
    CandyGrid
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  /* color: pink; */
}
</style>
