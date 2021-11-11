<template>
  <a
    :class="type"
    class="link"
    :href="`https://${link}` || '#'"
    target="_blank"
  >
    <p class="website-link-text">{{ link_text || "waiting..." }}</p>
  </a>
</template>

<script>
export default {
  name: "WebPageLink",
  props: ["link", "link_text", "type"],
};
</script>

<style lang="scss">
.link {
  color: var(--additional-light-mode-color);
  transition: 0.4s ease-in-out;
}
.link:hover {
  transition: 0.1s linear;
  color: var(--additional-light-mode-hover-color);
}
.not-link {
  text-decoration: none;
  font-weight: 500;
}
.dark {
  .link {
    color: var(--additional-dark-mode-color);
  }
  .link:hover {
    color: var(--additional-dark-mode-hover-color);
  }
}
</style>
