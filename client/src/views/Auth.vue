<template>
  <div class="auth">
    <form action class="auth-form" v-if="loginForm">
      <h1>Sign In</h1>
      <div class="input-wrapper">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div class="form-actions">
        <button type="button" class="btn" @click="login = false">Switch to SignUp</button>
        <button class="btn" @click.prevent="submitLogin()">Submit</button>
      </div>
    </form>
    <form action class="auth-form" v-else>
      <h1>Create Account</h1>
      <div class="input-wrapper">
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password">
      </div>
      <div class="form-actions">
        <button type="button" class="btn" @click="login = true">Switch to SignIn</button>
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "auth",
  data() {
    return {
      loginForm: true,
      email: "",
      password: "",
      skipQuery: true
    };
  },
  apollo: {
    signIn: {
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
          }
        }
      `,
      // Reactive variables
      variables() {
        return {
          email: this.email,
          password: this.password
        };
      },
      // Disable the query
      skip() {
        return this.skipQuery;
      },
      // Optional result hook
      result({ data, loading, networkStatus }) {
        this.data = data;
        console.log("We got some result!");
      }
    }
  },
  methods: {
    submitLogin() {
      this.skipQuery = false;
      this.$apollo.queries.signIn.refetch();
    }
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
    border: 1px solid #333;

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

      .btn {
        background-color: #42b983;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        padding: 10px 30px;
        margin-left: 1rem;
      }
    }
  }
}
</style>
