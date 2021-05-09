<template>
  <button type="submit" :disabled="isFullInputed" @click="confirm">
    Confirm
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    confirm() {
      this.$router.push({ name: "confirm" });
    }
  },
  computed: mapGetters(["isFullInputed"])
};
</script>

<style lang="scss" scoped>
button {
  text-align: center;
  margin: 40px 0;
  font-size: 1.6em;
  font-weight: bold;
  color: #35495e;
  background: orange;
  border: none;
  padding: 0.4em 2em;
}
</style>
