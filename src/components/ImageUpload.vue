<template>
  <div class="input-block">
    <p class="form-field-title">Image</p>
    <input
      @change="handleImage"
      type="file"
      accept="image/*"
      class="image-uploader form-field"
    />
    <p v-if="!uploaded" class="invalid-message">Uploading</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      image: "",
      image_type: "",
      uploaded: true,
    };
  },
  methods: {
    async handleImage(e) {
      if (e.target.files.length <= 0) {
        this.image = "";
        this.image_type = "";
        this.returnImage();
        return;
      }
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
      this.isUploadedImage();
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target.result.split(",");
        this.image = image[1];
        this.image_type = image[0];
        this.uploaded = true;
        this.returnImage();
        this.isUploadedImage();
      };
      reader.readAsDataURL(fileObject);
      this.uploaded = false;
    },
    returnImage() {
      this.$emit("UploadImage", {
        image: this.image,
        image_type: this.image_type,
      });
    },
    isUploadedImage() {
      this.$emit("isUploadedImage", this.uploaded);
    },
  },
};
</script>

<style>
.image-uploader {
  border-bottom: none !important;
}
</style>
