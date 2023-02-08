<template>
  <div class="logo">
    <a href="/"><h4>Dog Breeder</h4></a>
  </div>
  <div class="title">
    <h1>Don't buy, adopt!</h1>
  </div>
</template>

<style>
div.logo h4 {
  font-size: 1rem;
  margin-top: 15px;
  margin-left: 15px;
  color: #124a44;
  font-weight: 400;
}

div.logo a {
  text-decoration: none;
}

div.title h1 {
  font-size: 3.5rem;
  text-align: center;
  margin-top: 50px;
  color: #124a44;
}

@media screen and (max-width: 768px) {
  div.logo h4 {
    font-size: 0.9rem;
  }

  div.title h1 {
    font-size: 2.5rem;
  }
}
</style>
