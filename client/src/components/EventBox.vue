<template>
  <div class="event">
    <h2>{{event.title}}</h2>
    <p>{{event.description.slice(0, 240) + '...'}}</p>
    <p>{{event.price}}</p>
    <p>{{event.date}}</p>
    <p>{{event._id}}</p>
    <p>{{event.creator.email}}</p>
    <div class="fixed-actions">
      <router-link class="btn" :to="{name: 'singleEvent', params:{eventId: event._id}}">Read More</router-link>
      <button class="btn" v-if="userId" @click="bookEvent(event._id)">Book it</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "event",
  props: ["event"],
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    ...mapActions(["bookEvent"])
  }
};
</script>

<style lang="scss">
.event {
  padding: 1rem 2rem 3rem;
  border: 1px solid #333;
  margin-top: 1rem;
  position: relative;
  p {
    margin: 20px 0;
  }
  .fixed-actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
    .btn {
      text-decoration: none;
    }
  }
}
</style>
