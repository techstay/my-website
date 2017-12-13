<template>
  <b-container>
    <b-card header="客户端信息"
            header-bg-variant="primary"
            header-text-variant="white">
      <p class="card-text">
        <b-table striped bordered hover responsive :fields="fields" :items="items"></b-table>
      </p>
    </b-card>
  </b-container>
</template>
<script>
  import platform from 'platform'
  import axios from 'axios'

  let tableItems = []

  function initTableItems() {
    tableItems = []
    tableItems.push({key: '操作系统', value: `${platform.os}`})
    tableItems.push({key: '浏览器', value: `${platform.name} ${platform.version}`})
    axios.get('https://httpbin.org/ip')
      .then(function (response) {
        let ip = response.data.origin
        tableItems.push({key: 'IP地址', value: ip})
      })
      .catch(function (error) {
        alert(error)
      })
    return tableItems
  }

  export default {
    data() {
      return {
        fields: [
          {
            key: 'key', label: '属性'
          }, {
            key: 'value', label: '值'
          }],
        items: initTableItems()
      }
    },
    computed: {},
    methods: {}
  }
</script>
