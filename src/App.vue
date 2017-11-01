<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="/">易天的个人站</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item to="/">主页</b-nav-item>
          <b-nav-item to="/ClientInfo">客户端信息</b-nav-item>
          <b-nav-item to="/About">关于</b-nav-item>
        </b-nav>
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
