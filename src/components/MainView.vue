
<script setup>
import Pararaph from './paragraph.vue';
import Footer from './Footer.vue';
import Pageinfo from './Pageinfo.vue'
import Header from './Header.vue';

defineProps({

})
</script>

<template>
    <!-- page information -->
     <Pageinfo />

     <!-- header -->
        <header>
            <Header msg="The Litehouse" sub="Keep it Lite" />
        </header>
<!-- main view -->
 <div id="wrapper">
    
    <!-- intro -->
    <Pararaph lang="mongodb" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, inventore commodi adipisci."/>
    <Pararaph lang="mysql" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, inventore commodi adipisci.isicing elit. Porro ab voluptate ullam, inventore"/>
    <Pararaph lang="psql" msg="facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="javascript" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="react" msg="perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="vue" msg="Lorem ipsum dolor sit amet consectetur  facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Pararaph lang="nodejs" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quaerat ut atque repudiandae non sunt saepe repellendus magnam, aut reiciendis consequuntur natus animi enim eius earum architecto, odio quasi dolore fugiat! Iste id quisquam enim optio labore est molestiae sunt. Porro ullam a consectetur perspiciatis minus velit distinctio, odio optio laborum neque quidem exercitationem doloremque iusto esse molestiae dicta aut recusandae sapiente, incidunt officiis adipisci repudiandae nostrum atque quos! Unde natus aliquam, laudantium voluptatem optio, ducimus in illo labore fuga autem nesciunt, sint dicta. Voluptate ad nostrum excepturi dolore explicabo. Nemo ducimus delectus deleniti incidunt et consectetur, aspernatur nisi nam."/>
    <!-- footer -->
    <Footer />
 </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
#wrapper{
    height:100%;
    width:100%;
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