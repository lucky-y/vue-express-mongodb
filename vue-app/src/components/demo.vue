<template>
  <div class="demo">
    <h1>demo</h1>
  </div>
</template>
<script>
export default {
  data: () => {
    return {

    }
  },
  methods: {

  },
  mounted () {
    this.$http.get('/api/user/get').then(res => {
      console.log(res)
    })
    this.$http.post('/api/user/post').then(res => {
      console.log(res)
    })
  }
}
</script>
<style>
</style>
