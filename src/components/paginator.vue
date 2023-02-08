<template>
  <div>
    <div>Current page {{ currentPage }}</div>

    <div>
      <button @click="prevPage">Previous</button>
      <button @click.prevent="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: ["currentPage", "totalPages", "nextPage", "prevPage"],
};
</script>
