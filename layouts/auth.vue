<template>
  <div>
    <Nuxt />

    <button @click="() => $store.dispatch('checkLogin')">check</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer,
  },
  async created() {
    await this.$store.dispatch('checkLogin')
    this.loading = false
  },
}
</script>

<style></style>
