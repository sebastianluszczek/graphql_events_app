<template>
  <div class="auth">
    <h1>The Events Page</h1>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "events",
  apollo: {
    events: gql`
      query {
        events {
          _id
          title
          description
          date
          creator {
            email
          }
        }
      }
    `
  }
};
</script>

<style></style>
