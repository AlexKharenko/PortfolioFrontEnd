<template>
  <div class="social-block">
    <div class="social-icons">
      <div class="social-media-icon-block">
        <a href="https://www.instagram.com/alexey_kharenko" target="_blank">
          <img
            src="../assets/socials/instagram.png"
            alt="Instagram Icon"
            class="img-social"
          />

          <div class="social-text">
            <p class="hovered-text">Instagram</p>
          </div>
        </a>
      </div>
      <div class="social-media-icon-block">
        <a href="https://github.com/AlexKharenko" target="_blank">
          <img
            src="../assets/socials/github.png"
            alt="Github Icon"
            class="img-social"
          />
          <div class="social-text">
            <p class="hovered-text">Github</p>
          </div>
        </a>
      </div>
      <div class="social-media-icon-block">
        <a
          href="https://www.linkedin.com/in/alexey-kharenko-4a9b00192"
          target="_blank"
        >
          <img
            src="../assets/socials/linkedin.png"
            alt="LinkedIn Icon"
            class="img-social"
          />
          <div class="social-text">
            <p class="hovered-text">LinkedIn</p>
          </div>
        </a>
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
  bottom: 40px;
  .social-icons {
    display: block;
    .social-media-icon-block {
      margin: 10px;
      a {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        text-decoration: none;
        .img-social {
          height: 52px;
          width: 52px;
          background-color: white;
          border: 2px solid transparent;
          border-radius: 50%;
          filter: invert(1);
          box-shadow: 0px 0px 2px 1px white;
          transition: filter, background-color 0.4s ease-in-out;
        }
        .social-text {
          display: none;
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
      }

      a:hover {
        .img-social {
          filter: invert(0.9);
        }
      }
      a:hover .social-text {
        display: block;
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
        .social-text {
          filter: invert(1);
          background-color: white;
        }
      }
      a:hover {
        .img-social {
          border-color: white;
          filter: invert(0.1);
        }
      }
    }
  }
}

@media (max-width: 800px), (max-height: 400px) {
  .social-block {
    position: relative;
    top: 0;
    right: 0;
    border-top: 1px black solid;
    .social-icons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      .social-media-icon-block {
        a {
          flex-direction: row;
          .img-social {
            height: 30px;
            width: 30px;
            border: 1px solid transparent;
            box-shadow: 0px 0px 1px 1px white;
            transition: filter 0.4s ease-in-out;
          }
          .social-text {
            display: block;
            visibility: visible;
            opacity: 1;
            border: none;
            height: 30px;
            padding: 5px;
            border-radius: 0;
            transition: 0.4s ease-in-out;
            .hovered-text {
              cursor: pointer;
            }
          }
          .social-text:hover {
            .hovered-text {
              color: rgb(44, 44, 44);
            }
          }
        }
      }
    }
  }
} ;
</style>
