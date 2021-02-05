<template>
  <div class="form__area">
    <b-form id="form-area" @submit.prevent="checkForm" method="post">
      <div class="">
        <label>Event</label>
        <b-form-textarea
          id="textarea"
          placeholder="Enter event.."
          rows="3"
          name="description"
          v-model="event.value"
          :state="event.state"
        ></b-form-textarea>
        <b-form-invalid-feedback>
          {{ event.validation }}
        </b-form-invalid-feedback>
      </div>
      <div class="">
        <label>Date From</label>
        <b-form-datepicker
          class="mb-2"
          v-model="dateFrom.value"
          name="date_from"
          :state="dateFrom.state"
        ></b-form-datepicker>
        <b-form-invalid-feedback>
          {{ dateFrom.validation }}
        </b-form-invalid-feedback>
      </div>
      <div class="">
        <label>Date To</label>
        <b-form-datepicker
          class="mb-2"
          v-model="dateTo.value"
          name="date_to"
          :state="dateTo.state"
        ></b-form-datepicker>
        <b-form-invalid-feedback>
          {{ dateTo.validation }}
        </b-form-invalid-feedback>
      </div>
      <div>
        <b-form-checkbox-group
          v-model="days.value"
          :options="options"
          name="days"
          :state="days.state"
        >
        </b-form-checkbox-group>
        <b-form-invalid-feedback :state="days.state">{{
          days.validation
        }}</b-form-invalid-feedback>
      </div>
      <center><b-button variant="info" type="submit" class="mt-5 w-50">Save</b-button></center>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      event: {
        value: "",
        state: null,
        validation: "",
      },

      dateTo: {
        value: "",
        state: null,
        validation: "",
      },

      dateFrom: {
        value: "",
        state: null,
        validation: "",
      },

      days: {
        value: [],
        state: null,
        validation: "",
      },
      options: [
        { text: "Monday", value: "Mon" },
        { text: "Tuesday", value: "Tue" },
        { text: "Wednesday", value: "Wed" },
        { text: "Thursday", value: "Thu" },
        { text: "Friday", value: "Fri" },
        { text: "Saturday", value: "Sat" },
        { text: "Sunday", value: "Sun" },
      ],
    };
  },
  methods: {
    checkForm: function () {
      let ret = true;
      if (this.event.value == "") {
        this.event.state = false;
        this.event.validation = "Please input some details";
        ret = false;
      } else {
        this.event.state = null;
        this.event.validation = "";
      }

      if (this.dateFrom.value == "") {
        this.dateFrom.state = false;
        this.dateFrom.validation = "Please select date";
        ret = false;
      } else {
        var newDateFrom = new Date(this.dateFrom.value);
        var newDateTo = new Date(this.dateTo.value);

        if (newDateFrom > newDateTo) {
          this.dateFrom.state = false;
          this.dateFrom.validation = "Please select valid date";
        } else {
          this.dateFrom.state = null;
          this.dateFrom.validation = "";
        }
      }

      if (this.dateTo.value == "") {
        this.dateTo.state = false;
        this.dateTo.validation = "Please select date";
        ret = false;
      } else {
        var newDateFrom = new Date(this.dateFrom.value);
        var newDateTo = new Date(this.dateTo.value);

        if (newDateFrom > newDateTo) {
          this.dateTo.state = false;
          this.dateTo.validation = "Please select valid date";
        } else {
          this.dateTo.state = null;
          this.dateTo.validation = "";
        }
      }

      if (this.days.value.length == 0) {
        this.days.state = false;
        this.days.validation = "Please select day";
        ret = false;
      } else {
        this.days.state = null;
        this.days.validation = "";
      }

      if (ret === true) {
        this.submitForm();
      }
    },
    submitForm: function () {
      var formData = {
        description: this.event.value,
        date_from: this.dateFrom.value,
        date_to: this.dateTo.value,
        days: this.days.value,
      };

      this.$store
        .dispatch("storeEvents", formData)
        .then((res) => {
          if (res.status == "success") {
            this.$toast.success(res.message);
          }
          this.setEvent();
        })
        .catch((error) => {
          this.$toast.error("Something went wrong");
        });
    },
    setEvent: function () {
      this.$store
        .dispatch("setEvents")
        .then((res) => {
          if (res.status == "success") {
            this.$toast.success(res.message);
          }
        })
        .catch((error) => {
          this.$toast.error("Something went wrong");
        });
    },
  },
};
</script>

<style>
</style>