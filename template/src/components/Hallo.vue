<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is demo</h2>
    <div class="bg_logo"></div>
    <a href="/demo/demo.html">go to demo</a>
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

a {
  color: #42b983;
}
.hello{
  .bg_logo{
    background-image: url(../assets/logo.png);
    width:200px;
    height: 200px;
    transform: rotateZ(180deg);
  }
}
</style>
