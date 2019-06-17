<template>
  <div class="singleEvent">
    <div
      v-if="event[0].avatar"
      class="avatar-img"
      :style="{'backgroundImage': 'url(' + event[0].avatar + ')'}"
    ></div>
    <div class="title">
      <router-link class="back" :to="{path: '/events'}">
        <i class="material-icons md-18">keyboard_backspace</i> Back
      </router-link>
      <h3>Event details</h3>
    </div>
    <h1>{{event[0].title}}</h1>
    <p>{{event[0].description}}</p>
    <p>{{event[0].date.slice(0, 10)}}</p>
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
  }
};
</script>

<style lang="scss">
.singleEvent {
  padding: 1rem 2rem 3rem;
  margin-top: 1rem;
  position: relative;
  .avatar-img {
    width: 110vw;
    height: 280px;
    background-position: center;
    background-size: cover;
    position: relative;
    left: -20vw;
    top: -30px;
  }
  p {
    margin: 1rem 0;
    text-align: justify;
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
    width: 80px;
    height: 34px;
    transition: .3s;
    i {
      position: relative;
      top: 5px;
    }
    &:hover {
      transform: translate(-12px, 0px);
    }
  }
}
</style>
