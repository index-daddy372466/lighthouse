<script setup>
defineProps({
msg:{
    type:String,
    required:false,
}
})
</script>


<template>
<!-- footer -->
    <footer id="footer" class="footer-main main-footer">
    <a href="#" id="title-container" class="footer-title">
        <img id="logo-footer" draggable="false" src="../assets/media/lh-white.png" class="scale-out" alt="image of lighthouse" height="100" width="100"> 
     </a>
     <div id="title-container">
      <h1 class="green">{{ msg }}</h1>
    </div>
    </footer>
</template>

<style scoped>
#footer{
    background-image:linear-gradient(0,rgba(0, 189, 126, 0.793),transparent);
    height:150px;
    width:100%;
    bottom:0;
    position:absolute;
    left:0;
}
</style>