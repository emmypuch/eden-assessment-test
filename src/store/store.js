import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    dogs: [],
    breeds: [],
    loading: false,
  },
  mutations: {
    GET_ALL_DOGS(state, dogs) {
      state.dogs = dogs;
    },
    GET_LOADING_STATUS(state, loading) {
      state.loading = loading;
    },
    GET_DOG_BREEDS(state, breeds) {
      state.breeds = breeds;
    },
  },
  actions: {
    async fetchDogs({ commit }) {
      const dogsResponse = await axios.get(
        "https://dog.ceo/api/breed/eskimo/images"
      );
      const dogs = dogsResponse.data.message.map((dog) => {
        return {
          breed: dog.split("/")[4],
          url: dog,
        };
      });
      // console.log("dogs", dogs);
      commit("GET_ALL_DOGS", dogs);

      // Extract unique breeds from the dogs list
      const breeds = [...new Set(dogs.map((dog) => dog.breed))];
      commit("GET_DOG_BREEDS", breeds);
    },
  },
});
