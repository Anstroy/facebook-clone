<template>
  <div class="bg-gray-200">
    <div
      class="flex h-screen p-5 container mx-auto items-center justify-center flex-col md:flex-row"
    >
      <div class="w-full md:w-auto md:flex-auto">
        <p
          class="font-bold text-blue-600 text-4xl text-center md:text-left md:text-6xl"
        >
          fakebook
        </p>
        <p class="md:text-3xl hidden md:inline">
          Facebook clone app made with nuxt.js and tailwindcss
        </p>
      </div>
      <div class="w-full md:w-auto md:flex-auto md:text-xl">
        <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              v-model="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              v-model="password"
              placeholder="Password"
            />
          </div>

          <div>
            <a
              class="text-center cursor-pointer bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="login"
            >
              Log In
            </a>
          </div>
          <div class="mt-4 text-center">
            <a href="#" class="text-sm text-blue-600 hover:underline"
              >Forgot Password?
            </a>
            <hr class="my-4" />
            <a
              class="text-center cursor-pointer bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create New Account
            </a>
          </div>
        </form>

        <p class="text-center text-sm mt-10">
          Create a Page for a celebrity, band or business.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    email: 'nieve@gmail.com',
    password: 'nieve123',
  }),
  created() {
    // this.$store.dispatch('checkLogin')
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/')
        })
    },
  },
}
</script>

<style></style>
