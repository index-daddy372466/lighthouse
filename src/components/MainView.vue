
<script setup>
import Introduction from './Introduction.vue';
import Footer from './Footer.vue';
import ElementScanner from './ElementScanner.vue';
defineProps({

})
</script>


<template>
<!-- main view -->
 <div id="wrapper">
    <!-- intro -->
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Introduction msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    
    
    <!-- footer -->
    <Footer />
 </div>
</template>

<style scoped>
#wrapper{
    transform:translateY(100vh);
    min-height:4000px;
    width:100%;
    /* border-top:2px solid red; */
    /* border-bottom:2px solid red; */
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: start;
    justify-content:space-evenly;
    padding: 1rem .75rem 0;
    gap:3rem;
}
</style>