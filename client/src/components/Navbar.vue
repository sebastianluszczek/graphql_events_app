<template>
  <div class="navbar">
    <h1 class="logo">EventSide</h1>
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/auth">Auth</router-link>
      <router-link class="nav-link" to="/events">Events</router-link>
      <router-link class="nav-link" to="/bookings">Bookings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
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

  #nav {
    .nav-link {
      padding: 10px 30px;
      text-decoration: none;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>