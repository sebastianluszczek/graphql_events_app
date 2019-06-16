<template>
  <div class="booking">
    <h2>{{booking.event.title}}</h2>
    <p>{{booking.event.description.slice(0, 240) + '...'}}</p>
    <p>{{booking.event.date}}</p>
    <p>{{booking.event.creator.email}}</p>
    <div class="fixed-actions">
      <router-link class="btn" :to="{name: 'singleEvent', params:{eventId: booking.event._id}}">Show Event</router-link>
      <button class="btn" v-if="userId" @click="cancelBooking(booking._id)">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "booking",
  props: ["booking"],
  computed: {
    ...mapGetters(['userId'])
  },
  methods: {
    ...mapActions(['cancelBooking'])
  }
};
</script>

<style lang="scss">
.booking {
  padding: 1rem 2rem 3rem;
  border: 1px solid #333;
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
}
</style>

