<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" class="color-animate">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand to="/">易天的个人站</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">主页</b-nav-item>
          <b-nav-item to="/ClientInfo">客户端信息</b-nav-item>
          <b-nav-item href="https://techstay.github.io/my-static-blog/" target="_blank">我的静态博客</b-nav-item>
          <b-nav-item to="/About">关于</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
</style>
