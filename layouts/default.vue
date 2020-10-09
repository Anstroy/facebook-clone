<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'default',
  data: () => ({
    loading: true,
  }),
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  async created() {
    await this.$store.dispatch('checkLogin')
    this.loading = false
  },
}
</script>

<style></style>
