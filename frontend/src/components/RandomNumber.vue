<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>
<script>
export default {
  // set default value for min,max in props should be 1, 10 respectively.
  // and randomNumber should be 0
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  data() {
    return {
      randomNumber: 100
    }
  },
  methods: {
    getRandomNumber() {
      // generate a random number between this.min and this.max and store it in `this.randomNumber`
    }
  }
}
</script>
