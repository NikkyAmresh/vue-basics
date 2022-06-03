<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios.js'

export default {
  data() {
    return {
      message: {},
      error: null
    }
  },
  async created() {
    try {
      // fetch the messages by using `getMessage` service and store it in variable `this.message`
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>
