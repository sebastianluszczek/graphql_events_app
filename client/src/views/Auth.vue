<template>
  <div class="auth">
    <form action class="auth-form" v-if="loginForm" @submit.prevent="submitLogin(credentials)">
      <h1>Sign In</h1>
      <div class="input-wrapper">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="credentials.email">
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="credentials.password">
      </div>
      <div class="form-actions">
        <button type="button" class="btn" @click="loginForm = false">to SignUp</button>
        <button class="btn">Submit</button>
      </div>
    </form>
    <form action class="auth-form" v-else @submit.prevent="submitRegister(credentials)" autocomplete="off">
      <h1>Create Account</h1>
      <div class="input-wrapper">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="credentials.email">
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="credentials.password">
      </div>
      <div class="form-actions">
        <button type="button" class="btn" @click="loginForm = true">to SignIn</button>
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapActions } from "vuex";

import { LOGIN_USER_QUERY, CREATE_USER_MUTATION } from "@/gql/graphql";

export default {
  name: "auth",
  data() {
    return {
      loginForm: true,
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(["authUser", "submitRegister", "submitLogin"]) 
  }
};
</script>

<style lang="scss">
.auth {
  .auth-form {
    width: 40rem;
    max-width: 80%;
    margin: 10rem auto;
    padding: 3rem;

    .input-wrapper {
      margin-top: 20px;
      label,
      input {
        width: 100%;
        display: block;
        padding: 10px;
        font-size: 18px;
      }
      input {
        background-color: #fff;
        border: none;
        border-bottom: 1px solid #333;
        box-shadow: none;
        outline: none;
      }
      input:focus {
        border-bottom: 2px solid #42b983;
      }
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 2rem;
    }
  }
}
</style>
