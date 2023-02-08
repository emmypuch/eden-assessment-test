<template>
  <div>
    <Header />
    <div class="image-container">
      <img :src="decodeURIComponent(dogUrl)" alt="dog breed picture" />
    </div>
    <div>name: ipsum</div>
    <div>description: ipsum</div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header },
  props: ["dogUrl"],
};
</script>

<style>
div.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

div.image-container img {
  width: 450px;
  height: 400px;
}
</style>
