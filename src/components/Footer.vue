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
    <div id="contact-container">
        <a href="mailto:kylestech95@outlook.com" id="email-link" class="contact-link"><img src="../assets/media/email.png" alt=""></a>
        <a href="tel:954.853.6213" id="phone-link" class="contact-link"><img src="../assets/media/phone.png" alt=""></a>
    </div>
    </footer>
</template>

<style scoped>
.contact-link{
    transition: .25s;
}
.contact-link:hover{
    transform:scale(.9);
    cursor:pointer;
}
#contact-container{
    width:250px;
    position:absolute;
    left:120px;
    bottom:-15px;
    display:flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}
#contact-container>a>img{
    width:32px;
}
#logo-footer{
  position:fixed;
  left:0;
  bottom:5px;
  width:75px;
  height:75px
}
#footer{
    background-image:linear-gradient(0,rgba(0, 189, 126, 0.793),transparent);
    height:75px;
    width:100%;
    bottom:0;
    position:fixed;
    left:0;
}
</style>
