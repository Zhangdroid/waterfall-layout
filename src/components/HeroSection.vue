<template>
  <div class="hero"></div>
</template>
<style>
.hero {
  width: 100%;
  height: 400px;
  background-image: url("static/hero.jpg");
  background-size: cover;
}
@media screen and (min-device-width:768px) {
  .hero {
    width: 100%;
    height: 100vh;
    background-image: url("static/hero@2x.jpg");
  }
}
</style>
