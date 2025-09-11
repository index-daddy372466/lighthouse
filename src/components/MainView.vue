
<script setup>
import Pararaph from './paragraph.vue';
import Footer from './Footer.vue';
import Pageinfo from './Pageinfo.vue'

defineProps({

})
</script>

<template>
    <!-- page information -->
     <Pageinfo />
<!-- main view -->
 <div id="wrapper">
    <!-- intro -->
    <Pararaph lang="html" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, inventore commodi adipisci."/>
    <Pararaph lang="css" msg="facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="js" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="react" msg="perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="vue" msg="Lorem ipsum dolor sit amet consectetur  facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="node" msg="Lorem ipsum dolor sit amet consectetur "/>
    <!-- footer -->
    <Footer />
 </div>
</template>

<style scoped>
#wrapper{
    /* transform:translateY(100vh); */
    min-height:4000px;
    width:100%;
    /* border-top:2px solid red; */
    /* border-bottom:2px solid red; */
    position:relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    padding: 1rem .75rem 0;
    gap:3rem;
}
</style>