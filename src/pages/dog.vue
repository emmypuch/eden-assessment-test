<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="image-container">
        <img :src="decodeURIComponent(dogUrl)" alt="dog breed picture" />
      </div>

      <div class="breed-information">
        <div class="breed-name">
          <h6>Name: Lorem Ipsum</h6>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque
          obcaecati vitae cumque? Ipsam ipsum officia voluptatem aut totam vel
          quisquam optio adipisci veritatis doloremque! Aliquid possimus
          laboriosam at harum. Aliquid ratione accusantium quo consequuntur
          eius. Quod ipsum aperiam veritatis? Vero id obcaecati ut! Velit quidem
          accusamus quisquam placeat dolores vel harum, qui odio commodi beatae,
          fugiat, rerum ex! Qui animi incidunt cum doloremque debitis, optio
          nemo iusto repudiandae tempore nostrum laborum quibusdam repellat quos
          aliquam hic quisquam blanditiis itaque harum? Cupiditate neque
          excepturi itaque a illo ea, alias tempore libero, corrupti qui rerum
          in ab odio quod laboriosam sequi provident. Quaerat, maxime dolore?
          Odit qui repudiandae alias illo, magni deleniti placeat. Amet, ipsa
          debitis? Earum voluptas maxime beatae repellendus consequatur ea,
          accusantium odit vero perferendis! Quae ab eaque asperiores. Explicabo
          fugit ratione eos ullam! Aperiam eum sequi minima eius veritatis saepe
          magnam consectetur dolores architecto, beatae, accusantium, eligendi
          impedit?
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

p {
  font-size: 1.2rem;
  margin-top: 15px;
  color: #334645;
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

  p {
    font-size: 1rem;
  }
}
</style>
