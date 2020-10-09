export default function ({ store, redirect }) {
  console.log('middleware')
  store.dispatch('checkLogin')
}
