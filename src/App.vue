<script setup>
import { useStore } from 'vuex';
const store = useStore();

import Form from "./components/Form.vue";
import Card from "./components/Card.vue";
</script>

<template>
  <Form></Form>
  <Card></Card>
</template>



<style lang="scss" scoped>
</style>
