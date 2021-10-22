<template>
  <div class="work-details">
    <div class="work-title">
      <h1>Works</h1>
    </div>
    <div class="work-details-block">
      <div class="img-block">
        <img src="../assets/Screenshot.png" alt="" />
      </div>
      <div class="data-block">
        <div class="text-details">
          <p class="details-paragraph">
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            eligendi laboriosam eveniet! Voluptates aspernatur, animi nostrum
            quaerat tempore, porro est unde sunt totam cupiditate ullam repellat
            harum voluptas repudiandae? Veritatis. Inventore quisquam atque
            illum adipisci in quas nihil quo doloribus molestias dignissimos!
            Commodi, neque accusamus? Nobis voluptas error atque quo labore
            saepe, quae est. Voluptatibus accusamus deleniti officia incidunt
            quod! Placeat sit, blanditiis libero voluptates architecto
            temporibus dolores esse, quo accusantium ea, cumque ab! Placeat,
            animi magnam, eius repellat enim quo reprehenderit atque autem
            ratione mollitia id accusamus, incidunt quidem. Rem reiciendis,
            saepe laboriosam delectus quaerat iure libero quod ab tempore, fugit
            dolorum. Expedita reiciendis ut labore aut nostrum aliquid officia
            harum. Quos non doloremque, inventore tenetur tempora veniam totam.
            Eveniet laboriosam aut ipsam id soluta impedit? Nobis repellendus
            eligendi nesciunt consectetur voluptas, corporis quos deserunt
            adipisci porro sint, possimus doloremque, officiis quis molestiae
            odio optio nostrum aperiam placeat eaque! Repudiandae nihil suscipit
            mollitia nemo doloremque. Ipsa a officia in eius optio tenetur!
            Laboriosam nesciunt, natus excepturi explicabo, corrupti aperiam et
            amet culpa quo harum modi vitae dolores, facilis fuga. Voluptatibus
            perspiciatis tempora aliquid quod voluptates odio at consequuntur
            corrupti adipisci dicta harum hic fugiat, id consectetur nesciunt ea
            amet, explicabo quaerat? Earum nesciunt porro perspiciatis ullam rem
            aperiam eius.
          </p>
        </div>
        <WebPageLink :link="'#'" :link_text="'work.com'" :type="'website'" />
        <WebPageLink
          :link="'#'"
          :link_text="'See on github'"
          :type="'not-link'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WebPageLink from "@/components/WebPageLink.vue";

export default {
  name: "WorkDetails",
  components: {
    WebPageLink,
  },
};
</script>

<style lang="scss">
.work-details {
  min-height: inherit;
  padding: 0 20px;
  .work-title {
    text-align: center;
    padding-top: 10px;
  }
  .work-details-block {
    padding-top: 20px;
    .img-block {
      img {
        width: 100%;
        max-height: 700px;
      }
    }
    .data-block {
      padding: 20px 60px;
      .details-paragraph {
        text-indent: 45px;
      }
      .website-link-text {
        margin-top: 10px;
      }
    }
  }
}
.dark {
  .work-details {
    .work-details-block {
      .data-block {
        .text-details {
          color: var(--additional-dark-mode-color);
        }
      }
    }
  }
}
</style>
