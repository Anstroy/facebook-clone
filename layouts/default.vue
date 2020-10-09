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
    // message: 'client',
  }),
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  async beforeCreate() {
    await this.$store.dispatch('checkLogin')
  },
}
</script>

<style></style>
