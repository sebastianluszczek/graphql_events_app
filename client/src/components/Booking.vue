<template>
    <div class="booking">
        <h2>{{booking.event.title}}</h2>
        <p>{{booking.event.date}}</p>
        <p>{{booking.event.creator.email}}</p>
    </div>
</template>

<script>
export default {
    name: 'booking',
    props: ['booking']
}
</script>

<style lang="scss">
.booking {
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
