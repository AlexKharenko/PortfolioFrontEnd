<template>
  <div class="footer-block">
    <div class="text">{{ $t("footer") }}</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-block {
  width: 100%;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  border-top: 1px black solid;
}
.dark .footer-block {
  border-top: 1px white solid;
}
</style>
