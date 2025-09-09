
<script setup>
import Footer from './Footer.vue';
defineProps({

})
</script>


<template>
<!-- main view -->
 <div id="wrapper">
    <Footer />
 </div>
</template>

<style scoped>
#wrapper{
    min-height:4000px;
    width:100%;
    border-top:2px solid red;
    border-bottom:2px solid red;
    position:relative;
}
</style>