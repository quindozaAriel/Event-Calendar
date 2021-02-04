<template>
  <div class="form__area">
    <form method="post">
      <div class="">
        <label>Employee Number</label>
        <b-form-textarea
          id="textarea"
          placeholder="Enter something..."
          rows="3"
        ></b-form-textarea>
      </div>
      <div class="">
        <label>Date From</label>
        <b-form-datepicker class="mb-2" v-model="dateFrom"></b-form-datepicker>
        {{dateFrom}}
      </div>
      <div class="">
        <label>Date To</label>
        <b-form-datepicker class="mb-2" v-model="dateTo"></b-form-datepicker>
        {{dateTo}}
      </div>
      <div>
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="flavour-2"
        >
          <b-form-checkbox value="orange">Monday</b-form-checkbox>
          <b-form-checkbox value="apple">Tuesday</b-form-checkbox>
          <b-form-checkbox value="pineapple">Wednesday</b-form-checkbox>
          <b-form-checkbox value="grape">Thursday</b-form-checkbox>
          <b-form-checkbox value="grape">Friday</b-form-checkbox>
          <b-form-checkbox value="grape">Saturday</b-form-checkbox>
          <b-form-checkbox value="grape">Sunday</b-form-checkbox>
        </b-form-checkbox-group>
      </div>
      <b-button variant="primary" type="submit">Save</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data(){
    return{
      dateFrom:'',
      dateTo:'',
    }
  }
};
</script>

<style>
</style>