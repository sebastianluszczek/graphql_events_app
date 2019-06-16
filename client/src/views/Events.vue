<template>
  <div class="auth">
    <h1>Events</h1>
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
    ...mapGetters(['events'])
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

<style></style>
