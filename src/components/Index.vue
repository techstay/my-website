<template>
  <b-container>
    <b-jumbotron header="主页我不知道该放啥">
      <b-carousel controls
                  indicators
                  background="#ababab"
                  :interval="4000"
      >
        <b-carousel-slide
          img-src="static/img/eugen.png"></b-carousel-slide>
        <b-carousel-slide
          img-src="static/img/t1.jpg"></b-carousel-slide>
        <b-carousel-slide
          img-src="static/img/t2.jpg"></b-carousel-slide>
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
