<template>
  <div>
    <v-calendar
      class="custom-calendar max-w-full"
      disable-page-swipe
      is-expanded
      :attributes="getEvents"
    >
    </v-calendar>
  </div>
</template>

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
Vue.use(VCalendar);
export default {
  name: "Calendar",
  data() {
    return {};
  },
  computed: {
    getEvents() {
      var event_data = this.$store.getters.getEvents;
      if (event_data) {
        var attributes = [];
        Object.keys(event_data.result).forEach(function (key) {
          let attr_obj = {
            key: event_data.result[key]["id"],
            highlight: true,
            dates: new Date(event_data.result[key]["date"]),
            popover: {
              label: event_data.result[key]["description"],
            },
          };
          attributes.push(attr_obj);
        });

        return attributes;
      }
    },
  },
  mounted() {
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
};
</script>
<style>
</style>