import axios from "axios";

const url = "http://localhost:5000";

const state = {
  candies: []
};

const getters = {
  allCandies: state => state.candies
};

const actions = {
  async fetchCandies({ commit }) {
    const response = await axios.get(`${url}/candy`);
    // mutation to call, data to use
    commit("setCandies", response.data);
  }
};

const mutations = {
  setCandies: (state, candies) => (state.candies = candies)
};

export default {
  state,
  getters,
  actions,
  mutations
};
