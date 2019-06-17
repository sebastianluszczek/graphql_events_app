<template>
  <div class="events">
    <div class="title">
      <h1>Events</h1>
      <router-link class="btn" to="/events/add" v-if="userId"><i class="material-icons md-18">playlist_add</i> Add</router-link>
    </div>
    <EventBox v-for="event in events" :key="event._id" :event="event"></EventBox>
  </div>
</template>

<script>
import EventBox from "@/components/EventBox";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "events",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["events", "userId"])
  },
  methods: {
    ...mapActions(["getAllEvents"])
  },
  created() {
    this.getAllEvents();
  },
  components: {
    EventBox
  }
};
</script>

<style lang="scss">
.events {
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
    margin-bottom: 3rem;

    h1 {
      width: 200px;
      font-size: 72px;
      font-weight: normal;
    }
  }
}
</style>
