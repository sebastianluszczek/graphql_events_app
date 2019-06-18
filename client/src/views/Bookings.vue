<template>
  <div class="bookings">
    <div class="title">
      <h1>My bookings</h1>
    </div>
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
  },
  mounted() {
    this.getAllBookings();
  }
};
</script>

<style lang="scss">
.bookings {
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
    margin-bottom: 3rem;

    h1 {
      font-size: 72px;
      font-weight: normal;
    }
  }
}
</style>
