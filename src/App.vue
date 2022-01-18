<script setup>
import Form from "./components/Form.vue";
import Card from "./components/Card.vue";
</script>

<template>
  <Form></Form>
  <Card></Card>
  {{ $store.state.message }}
</template>



<style scoped>

</style>
