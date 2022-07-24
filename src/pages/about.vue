<template>
   <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  computed: {
    getUsersLength () {
      return this.$store.getters.getUsersLength
    }
  }
}
</script>