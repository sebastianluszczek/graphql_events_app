<template>
  <div class="navbar">
    <h1 class="logo">EventSide</h1>
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/events">Events</router-link>
      <router-link class="nav-link" to="/auth" v-if="!userId">Auth</router-link>
      <router-link class="nav-link" to="/bookings" v-if="userId">Bookings</router-link>
      <a class="nav-link" @click="logout()" v-if="userId">
        Logout
        <i class="material-icons md-18">exit_to_app</i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navbar",
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  background-color: #fff;
  z-index: 10;

  #nav {
    .nav-link {
      padding: 10px 30px;
      text-decoration: none;
      color: #2c3e50;
      font-weight: bold;
      cursor: pointer;
      &.router-link-exact-active {
        color: #42b983;
      }
      i {
        position: relative;
        top: 5px;
      }
    }
  }
}
</style>