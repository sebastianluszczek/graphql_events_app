<template>
  <div class="auth">
    <h1>My bookings</h1>
    <Booking v-for="booking in bookings" :booking="booking" :key="booking._id"></Booking>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Booking from "@/components/Booking";

export default {
  name: "bookings",
  data() {
    return {};
  },
  components: { Booking },
  computed: {
    ...mapGetters(["bookings"])
  },
  methods: {
    ...mapActions(["getAllBookings"])
  }
};
</script>

<style></style>
