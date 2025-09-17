<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  sub:{
    type:String,
    required:true,
  },

})
</script>

<template>
  <div id="header-container">
    <!-- logo image -->
    <a href="#" id="lighthouse-logo">
      <img src="../assets/media/lh-green.png" alt="picture of lighthouse" id="logo" class="lighthouse lighhouse-png png-lighthouse scale-out" width="125" height="125">
    </a>


    <div id="title-container">
      <h1 class="green">{{ msg }}</h1>
    </div>

    <hr id="header-hr">

    <em id="subheader">{{ sub }}</em>
  </div>
</template>

<style scoped>
#header-container{
  z-index:997;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
#subheader{
  transform:translate(-50px,50px);
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
