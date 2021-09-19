<template>
  <div class="social-block">
    <div class="social-icons">
      <div class="social-media-icon-block">
        <a href="#">
          <img
            src="../assets/socials/instagram.png"
            alt="Instagram Icon"
            class="img-social"
          />
        </a>
        <div class="social-text">
          <p class="hovered-text">Instagram</p>
        </div>
      </div>
      <div class="social-media-icon-block">
        <a href="#">
          <img
            src="../assets/socials/github.png"
            alt="Github Icon"
            class="img-social"
          />
        </a>
        <div class="social-text">
          <p class="hovered-text">Github</p>
        </div>
      </div>
      <div class="social-media-icon-block">
        <a href="#">
          <img
            src="../assets/socials/linkedin.png"
            alt="LinkedIn Icon"
            class="img-social"
          />
        </a>
        <div class="social-text">
          <p class="hovered-text">LinkedIn</p>
        </div>
      </div>
      <div class="social-media-icon-block">
        <a href="#">
          <img
            src="../assets/socials/facebook.png"
            alt="Facebook Icon"
            class="img-social"
          />
        </a>
        <div class="social-text">
          <p class="hovered-text">Facebook</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.social-block {
  position: fixed;
  right: 10px;
  bottom: 20px;
  .social-icons {
    display: block;
    .social-media-icon-block {
      margin: 10px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      a {
        .img-social {
          height: 52px;
          width: 52px;
          background: white;
          border: 2px solid transparent;
          border-radius: 50%;
          filter: invert(1);
          box-shadow: 0px 0px 2px 1px white;
          transition: 0.4s ease-in-out;
        }
      }
      .social-text {
        visibility: hidden;
        opacity: 0;
        margin-right: 10px;
        border: 7px double black;
        height: 45px;
        padding: 5px;
        border-radius: 0.7em;
        transition: visibility 0s, opacity 0.4s linear;
        .hovered-text {
          font-weight: 700;
          cursor: default;
          color: black;
        }
      }
      a:hover {
        filter: invert(0.05);
      }
      a:hover ~ .social-text {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

.dark .social-block {
  .social-icons {
    .social-media-icon-block {
      a {
        .img-social {
          border-color: white;
          filter: invert(0);
        }
      }
      .social-text {
        filter: invert(1);
      }
    }
  }
}
</style>
