<template>
  <div class="singleEvent">
    <router-link class="back" :to="{path: '/events'}">
        <i class="material-icons md-18">keyboard_backspace</i> Back
    </router-link>
    <h3>Event details</h3>
    <h1>{{event[0].title}}</h1>
    <p>{{event[0].description}}</p>
    <p>{{event[0].date}}</p>
    <div class="fixed-actions">
      <button class="btn" v-if="userId" @click="bookEvent(event._id)">Book it</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "singleEvent",
  computed: {
    ...mapGetters(["events", "userId"]),
    event() {
      return this.events.filter(event => {
        return event._id === this.$route.params.eventId;
      });
    }
  },
  methods: {
    ...mapActions(["bookEvent"])
  },
  created() {
    console.log(this.$route.params.eventId);
  }
};
</script>

<style lang="scss">
.singleEvent {
  padding: 1rem 2rem 3rem;
  margin-top: 1rem;
  position: relative;
  p {
    margin: 1rem 0;
  }
  .fixed-actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .back {
    display: block;
    position: relative;
    left: -100px;
    top: 30px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    i {
        position: relative;
        top: 5px;
      }
  }
}
</style>
