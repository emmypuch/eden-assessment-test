<template>
  <div class="logo">
    <a href="/"><h4>Dog Breeder</h4></a>
  </div>

  <div class="title">
    <h1>Don't buy, adopt!</h1>
  </div>
</template>

<style>
div.logo {
  padding: 2rem;
}

div.logo h4 {
  font-size: 1.1rem;
  color: #124a44;
  font-weight: 400;
}

div.logo a {
  text-decoration: none;
}

div.title h1 {
  font-size: 3.3rem;
  text-align: center;
  margin-top: 40px;
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
