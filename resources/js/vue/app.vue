<template>
  <div class="main__body">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="mb-5"><center><h1>Event Calendar</h1></center></b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col xl="3" lg="5">
          <div class="form__body">
            <Form></Form>
          </div>
        </b-col>
        <b-col xl="5" lg="7">
          <Calendar></Calendar>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
.main__body {
  width: 100%;
  height: 100vh;
  background: rgb(210, 228, 233);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form__body {
  width: 100%;
  height: auto;
  padding: 50px;
  border-radius: 25px;
  background-image: linear-gradient(
    to right top,
    #5de8f6,
    #49def6,
    #34d4f5,
    #1ecaf4,
    #07bff2
  );
  color: white;
}
</style>