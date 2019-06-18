<template>
  <div class="event">
    <div
      v-if="event.avatar"
      class="avatar-img"
      :style="{'backgroundImage': 'url(' + event.avatar + ')'}"
    ></div>
    <div class="event-info">
      <h2>{{event.title}}</h2>
      <p>{{event.description.slice(0, 240) + '...'}}</p>
      <p>{{event.price}}</p>
      <p>{{event.date.slice(0, 10)}}</p>
      <p>{{event.creator.email}}</p>
      <div class="fixed-actions">
        <router-link class="btn" :to="{name: 'singleEvent', params:{eventId: event._id}}">Read More</router-link>
        <button class="btn" v-if="userId" @click="bookEvent(event._id)">
          <i class="material-icons md-18">playlist_add_check</i> Book it
        </button>
      </div>
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
  position: relative;
  transition: 0.4s;
  margin: 50px 0;
  .event-info {
    padding: 1rem 2rem 1rem;
    margin-top: 1rem;
  }
  .avatar-img {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 160px;
  }
  p {
    margin: 20px 0;
  }
  .fixed-actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: fit-content;
    .btn {
      text-decoration: none;
    }
  }
}
</style>
