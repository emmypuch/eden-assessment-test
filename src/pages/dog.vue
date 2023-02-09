<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="image-container">
        <img :src="decodeURIComponent(dogUrl)" alt="dog breed picture" />
      </div>

      <div class="breed-information">
        <div class="breed-name">
          <h6>Adoption Guide</h6>
        </div>
        <p>
          Our dogs have undergone rigorous obedience training, and we have
          specifically trained some to be service dogs as well as security dogs.
          To adopt this dog, shoot us an email at
          <a href="mailto: adoptdogs.com">Adopt Dogs</a> with a picture of the
          dog and let us get started with the adoption process. You are going to
          love having this dog in your life. Thank you, and speak soon 🙂
        </p>
      </div>
    </div>
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
div.wrapper {
  padding: 2rem;
}

div.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

div.image-container img {
  width: 400px;
  height: 400px;
  border-radius: 20px;
}

div.breed-name h6 {
  font-size: 1.5rem;
  color: #124a44;
  font-weight: 700;
  margin-top: 30px;
}

div.breed-information p {
  font-size: 1.1rem;
  margin-top: 15px;
  color: #334645;
  padding-bottom: 10px;
  line-height: 1.1;
}

a {
  text-decoration: none;
  color: #0f9a96;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    padding: 0.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  div.image-container img {
    width: 300px;
    height: 300px;
  }

  div.breed-name h6 {
    font-size: 1.3rem;
  }

  div.breed-information p {
    font-size: 1rem;
  }
}
</style>
