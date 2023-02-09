<template>
  <div id="wrapper">
    <Header />
    <div class="search-wrapper">
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for breed..."
        />
      </div>

      <div class="select-breeds">
        <select name="" id="custom-select" v-model="selectedBreed">
          <option value="">All</option>
          <option v-for="breed in getBreeds" :key="breed" :value="breed">
            {{ breed }}
          </option>
        </select>
      </div>
    </div>

    <div class="dog-images_container">
      <div class="dog-images">
        <div v-for="dog in paginatedDogs" :key="dog.url">
          <router-link :to="`/dog/${encodeURIComponent(dog.url)}`">
            <v-lazy-image :src="dog.url" alt="dog breed picture" />
          </router-link>
        </div>
      </div>
    </div>

    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      :nextPage="nextPage"
      :prevPage="prevPage"
    />
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import Header from "../components/header.vue";
import Pagination from "../components/paginator.vue";
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Pagination, Header, "v-lazy-image": VLazyImage },
  name: "App",
  mounted() {
    this.$store.dispatch("fetchDogs");
  },
  computed: {
    getDogs() {
      return this.$store.state.dogs;
    },
    getBreeds() {
      return this.$store.state.breeds;
    },
    paginatedDogs() {
      let filteredDogs = this.getDogs;

      if (this.selectedBreed) {
        filteredDogs = filteredDogs.filter(
          (dog) => dog.breed === this.selectedBreed
        );
      }

      if (this.searchQuery) {
        filteredDogs = filteredDogs.filter((dog) =>
          dog.breed.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filteredDogs.slice(start, end);
    },
    totalPages() {
      return Array.from(
        { length: Math.ceil(this.getDogs.length / this.itemsPerPage) },
        (_, i) => i + 1
      );
    },
  },
  data() {
    return {
      itemsPerPage: 100,
      currentPage: 1,
      maxPerPage: 3,
      searchQuery: "",
      selectedBreed: "",
    };
  },
  methods: {
    pageChanged(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (
        this.currentPage == this.totalPages.length ||
        this.paginatedDogs.length < 100
      )
        return;
      this.currentPage += 1;
    },
    prevPage() {
      if (this.currentPage == 1) return;
      this.currentPage -= 1;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f9fbfb;
}

div.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

div.search-bar input {
  border-radius: 0.25em;
  border: 1px solid #124a44;
  width: 100%;
  padding: 10px 25px;
  min-width: 11ch;
  max-width: 20ch;
  outline: none;
  color: #0a3934;
  line-height: 1.1;
}

::placeholder {
  font-size: 0.8rem;
  color: #124a44;
}

div.select-breeds select {
  outline: none;
  color: #0a3934;
  width: 100%;
  min-width: 11ch;
  max-width: 20ch;
  margin-left: 10px;
  border: 1px solid #0a3934;
  border-radius: 0.25em;
  padding: 10px 25px;
  font-size: 0.9rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
}

div.dog-images_container .dog-images {
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  padding: 2rem;
}

img {
  width: 160px;
  height: 150px;
  border-radius: 5px;
}

.v-lazy-image {
  filter: blur(20px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

@media screen and (max-width: 768px) {
  div.search-bar {
    margin-top: 25px;
  }

  div.search-bar input {
    width: 50%;
    padding: 10px 25px;
  }

  div.dog-images_container .dog-images {
    padding: 1rem;
  }

  div.search-wrapper {
    display: flex;
    flex-direction: column;
  }

  div.search-bar input {
    width: 100%;
    padding: 10px 25px;
    min-width: 11ch;
    max-width: 20ch;
  }

  div.select-breeds {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
}

@media screen and (max-width: 320px) {
  div.dog-images_container .dog-images {
    padding: 0rem;
  }
}
</style>
