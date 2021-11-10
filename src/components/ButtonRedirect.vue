<template>
  <router-link class="btn-link" :to="target_page || '/'">
    <div class="btn-redirect">
      <p class="btn-text">{{ btn_text || "More" }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["btn_text", "target_page"],
};
</script>

<style lang="scss">
.btn-link {
  text-decoration: none;
  color: var(--btn-first-color);
  .btn-redirect {
    width: 100px;
    height: 40px;
    text-align: center;
    background: var(--btn-first-bg);
    .btn-text {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .btn-redirect:hover {
    background: var(--btn-first-hover-bg);
  }
}
</style>
