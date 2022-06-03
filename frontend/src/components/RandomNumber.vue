<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>
<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandomNumber() {
      // generate a random number between this.min and this.max and store it in `this.randomNumber`
    }
  }
}
</script>
