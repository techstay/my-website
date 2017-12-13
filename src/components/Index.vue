<template>
  <b-container>
    <b-jumbotron header="主页我不知道该放啥">
      <b-carousel controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://default-1251266667.file.myqcloud.com/images/LoL-Ero-League-of-Legends-DVa.png"></b-carousel-slide>
        <b-carousel-slide img-src="https://default-1251266667.file.myqcloud.com/images/eugen.png"></b-carousel-slide>
        <b-carousel-slide
          img-src="https://default-1251266667.file.myqcloud.com/images/%E7%81%B5%E6%A2%A6.png"></b-carousel-slide>

      </b-carousel>
    </b-jumbotron>

  </b-container>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
