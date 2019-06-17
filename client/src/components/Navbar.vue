<template>
  <div class="navbar">
    <h1 class="logo"><span>Event</span>Side</h1>
    <div id="nav">
      <!-- <router-link class="nav-link" to="/">Home</router-link> -->
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
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  background-color: #0b0c10;
  z-index: 10;
  .logo {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #66fcf1;

    span {
      font-weight: normal;
      text-transform: capitalize;
    }
  }

  #nav {
    .nav-link {
      padding: 5px 10px;
      margin: 0 20px;
      text-decoration: none;
      color: #c5c6c7;
      font-weight: bold;
      transition: .3s;
      &:hover {
        color: #66fcf1;
      }
      cursor: pointer;
      &.router-link-active {
        color: #66fcf1;
        border-bottom: 2px solid;
      }
      i {
        position: relative;
        top: 5px;
      }
    }
  }
}
</style>