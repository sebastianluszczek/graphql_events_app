<template>
  <div class="add-event">
    <h1>Add Event</h1>
    <form action autocomplete="off">
      <div class="form-inputs">
        <div class="input-wrapper">
          <label for="title">Title</label>
          <input type="title" id="title" v-model="title">
        </div>
        <div class="input-wrapper">
          <label for="description">Description</label>
          <textarea name="description" id="description" rows="7" v-model="description"></textarea>
        </div>
        <div class="input-wrapper">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="price">
        </div>
        <div class="input-wrapper">
          <label for="avatar">Avatar uri</label>
          <input type="text" id="title" v-model="avatar">
        </div>
        <div class="input-wrapper">
          <label for="date">Title</label>
          <input type="date" id="date" v-model="date">
        </div>
      </div>
      <div class="form-actions">
        <img class="avatar-img" :src="avatar" alt="Event Avatar" v-if="avatar">
        <button class="btn" @click.prevent="addEvent()">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addEvent",
  data() {
    return {
      title: null,
      description: null,
      price: null,
      date: null,
      avatar: null
    };
  },
  methods: {
    ...mapActions(["createEvent"]),
    addEvent() {
      let eventInput = {
        title: this.title,
        description: this.description,
        price: parseInt(this.price),
        date: this.date,
        avatar: this.avatar
      };
      console.log(eventInput);
      this.createEvent(eventInput);
      this.$router.push({ path: "/events" });
    }
  }
};
</script>

<style lang="scss">
.add-event {
  form {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 30px;
  }
  .input-wrapper {
    width: 100%;
    margin-top: 20px;
    label,
    input {
      width: 100%;
      display: block;
      padding: 10px;
      font-size: 18px;
    }
    input,
    textarea {
      background-color: #fff;
      border: none;
      border-bottom: 1px solid #333;
      box-shadow: none;
      outline: none;
      width: 100%;
      font-size: 18px;
      padding: 5px 10px;
      font-family: inherit;
    }
    input:focus {
      border-bottom: 2px solid #42b983;
    }
  }
  .form-actions {
    align-self: flex-end;

    .avatar-img {
        width: 100%;
    }
  }
}
</style>
