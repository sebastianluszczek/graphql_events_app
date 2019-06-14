<template>
  <div id="app">
    <Navbar/>
    <router-view class="main"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

import "./assets/scss/main.scss";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;

  .main {
    margin: 6rem auto;
    width: 70%;
    max-width: 1200px;
  }
}
</style>
