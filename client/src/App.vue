<template>
  <div id="app">
    <Navbar/>
    <keep-alive>
      <transition name="slide-fade" mode="out-in">
        <router-view class="main" />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

import { mapActions, mapMutations } from "vuex";

import "./assets/scss/main.scss";

export default {
  name: "app",
  data() {
    return {
      isLoaded: false
    }
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["logout", "authUser", "getAllEvents", "getAllBookings"]),
  },
  created() {
    this.getAllEvents();
    const token = window.localStorage.getItem("access_token");
    if (!token) {
      this.$router.push({ path: "/auth" });
    } else {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const timeNow = new Date().getTime();
      if (timeNow > decodedToken.exp * 1000) {
        this.logout();
      } else {
        const userId = window.localStorage.getItem("userId");
        this.authUser({ token, userId });
        this.isLoaded = true;
        this.getAllBookings();
      }
    }
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

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
