<template>
  <div class="event">
    <h2>{{event.title}}</h2>
    <p>{{event.description}}</p>
    <p>{{event.price}}</p>
    <p>{{event.date}}</p>
    <p>{{event.creator.email}}</p>
    <div class="fixed-actions">
      <button class="btn">Read More</button>
      <button class="btn" v-if="userId">Book it</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "event",
  props: ["event"],
  computed: {
    ...mapGetters(['userId'])
  }
};
</script>

<style lang="scss">
.event {
  padding: 1rem 2rem;
  border: 1px solid #333;
  margin-top: 1rem;
  position: relative;
  .fixed-actions {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
