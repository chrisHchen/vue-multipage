<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <img src="../assets/logo.png" alt="">
    <div class="bg_logo"></div>
    <a href="/demo2/demo2.html">go to demo 2</a>
    <a href="/demo/subDemo/subDemo.html">go to subDemo</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  display: block;
  color: #42b983;
}
.hello{
  .bg_logo{
    background-image: url(../assets/logo.png);
    width:200px;
    height: 200px;
  }
}
</style>
