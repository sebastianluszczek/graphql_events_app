<template>
  <div class="auth">
    <h1>The Events Page</h1>
    <Event v-for="event in events" :key="event._id" :event="event"></Event>
  </div>
</template>

<script>
import Event from "@/components/Event";

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
    Event
  }
};
</script>

<style></style>
