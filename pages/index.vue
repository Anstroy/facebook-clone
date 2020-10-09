<template>
  <div
    class="container mx-auto h-64 flex items-center bg-gray-200 p-10 rounded"
  >
    <p>User: {{ $store.getters.user }}</p>
    {{ $store.getters.isLoggedIn }}
    <button
      v-if="$store.getters.isLoggedIn"
      @click="() => $store.dispatch('logout')"
      class="bg-blue-600 p-5 text-white rounded hover:bg-blue-800"
    >
      Logout
    </button>
    <router-link
      v-else
      class="bg-blue-600 p-5 text-white rounded hover:bg-blue-800"
      to="/auth/login"
    >
      Login
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>
