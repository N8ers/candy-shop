<template>
  <div class="container">
    <router-link to="/">shop!</router-link>
    <h2>I am BAG</h2>
    <BagGrid />
  </div>
</template>

<script>
import BagGrid from "./BagGrid";

export default {
  components: { BagGrid }
};
</script>

<style scoped>
.container {
  text-align: center;
  color: mediumspringgreen;
}
</style>
