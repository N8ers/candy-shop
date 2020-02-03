<template>
  <div class="container">
    <div :key="candy.id" v-for="candy in allCandies">{{ candy.name }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CandyGrid",
  methods: {
    ...mapActions(["fetchCandies"])
  },
  computed: mapGetters(["allCandies"]),
  created() {
    console.log("created!");
    this.fetchCandies();
  }
};
</script>

<style scoped>
.container {
  color: yellowgreen;
}
</style>
