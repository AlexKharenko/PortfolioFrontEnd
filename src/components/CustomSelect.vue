<template>
  <select v-model="result">
    <option disabled value="">Select {{ add_option_name }}</option>
    <option v-for="item in items" :key="item.id" :value="item.id">
      {{ item[obj_key] }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: ["items", "obj_key", "add_option_name"],
  data() {
    return {
      result: "",
    };
  },
  methods: {
    emitResult() {
      this.$emit("SelectResult", this.result);
    },
  },
  watch: {
    result() {
      this.emitResult();
    },
  },
};
</script>

<style></style>
