<template>
  <button type="submit">{{ btnLabel }}</button>
</template>

<script>
export default {
  props: {
    btnLabel: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
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
