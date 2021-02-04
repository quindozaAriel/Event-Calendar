<template>
  <b-container fluid>
    <b-row>
      <b-col lg="5">
        <Form></Form>
      </b-col>
      <b-col lg="7">
        <Calendar></Calendar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Form from "./components/Form";
import Calendar from "./components/Calendar";
export default {
  name: "app",
  components: {
    Form,
    Calendar,
  },
};
</script>

<style>
</style>