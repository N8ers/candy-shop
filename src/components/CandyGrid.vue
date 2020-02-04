<template>
  <div class="container">
    <input type="text" placeholder="looking for something specific?" />
    <br />
    <input v-on:change="filter('sour')" type="checkbox" name="sour" />
    <label for="sour">sour</label>
    <input v-on:change="filter('sweet')" type="checkbox" name="sweet" />
    <label for="sweet">sweet</label>
    <input v-on:change="filter('chocolate')" type="checkbox" name="chocolate" />
    <label for="chocolate">chocolate</label>

    <div :key="candy.id" v-for="candy in allCandies">
      <div class="candy-box">
        <div>{{ candy.name }}</div>
        <img class="candy-image" :src="candy.candy_image" />
        <div>{{candy.candy_type}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CandyGrid",
  sourFilterOn: false,
  sweetFilterOn: false,
  chocolateFilterOn: false,
  methods: {
    ...mapActions(["fetchCandies"]),
    filter: function() {
      this.filtersSet.push();
      alert("currently set filters " + this.filtersSet);
    }
  },
  computed: mapGetters(["allCandies"]),
  created() {
    this.fetchCandies();
    this.sourFilterOn = false;
    this.sweetFilterOn = false;
    this.chocolateFilterOn = false;
  }
};
</script>

<style scoped>
.container {
  color: yellowgreen;
}
.candy-image {
  width: 30px;
}

.candy-box {
  border: 1px solid black;
  margin: 5px;
}
</style>
