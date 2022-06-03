<template>
  <div class="app-header">
    // show the button that only if value of variable `loggedIn` is true
    <button>Logout</button>
  </div>
</template>

<script>
export default {
  // write a code where component returns the default value for variable `loggedIn` as `false`
}
</script>

<style scoped>
.app-header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: white;
}
button {
  float: right;
}
</style>
