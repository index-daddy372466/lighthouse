
<script setup>
import Section from './Section.vue';
import Footer from './Footer.vue';
import Pageinfo from './Pageinfo.vue'
import Header from './Header.vue';
import { ref } from 'vue';
import {snake,encryption,mancala,calculator, simon, mongo} from '../assets/projects.json'

let games = {
  snake:ref(snake),
  mancala:ref(mancala),
  simon:ref(simon)
}

let gadgets = {
  calculator:ref(calculator),
  encryption:ref(encryption),
  mongodb:ref(mongo)
}
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

    <Section proName="Welcome" bgImage="vue" msg="Welcome to the Litehouse, a lightweight portfolio made with the Vue framework. My name is Kyle, a web developer. As you scroll further, you may discover customized games, modules and ideas as well as it's source code. Collaborations and inquires are welcome!"/>
    <Section :pro-name="gadgets.mongodb.value.description" :pro-data="gadgets.mongodb" bgImage="mongodb" msg="A non-relational database programmed with the basic functions (Create, Read, Update, Delete) to increase practical & technical understanding."/>
    <Section :pro-name="gadgets.calculator.value.description" :pro-data="gadgets.calculator" bgImage="calculator" msg="A calculator that performs fundamental arithmetic operations, namely addition, subtraction, multiplication, and division"/>
    <Section :pro-name="games.mancala.value.description" :pro-data="games.mancala" bgImage="marble" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, inventore commodi adipisci.isicing elit. Porro ab voluptate ullam, inventore"/>
    <Section :pro-name="games.simon.value.description" :pro-data="games.simon" bgImage="simon" msg="facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Section :pro-name="gadgets.encryption.value.description" :pro-data="gadgets.encryption" bgImage="encryption" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab voluptate ullam, perspiciatis quidem facere repudiandae vero reiciendis eligendi inventore commodi adipisci delectus."/>
    <Section :pro-name="games.snake.value.description" :pro-data="games.snake" bgImage="snake" msg="exercitationem doloremque iusto esse molestiae dicta aut recusandae sapiente, incidunt officiis adipisci repudiandae nostrum atque quos! Unde natus aliquam, laudantium voluptatem optio, ducimus in illo labore fuga autem nesciunt, sint dicta. Voluptate ad nostrum excepturi dolore explicabo. Nemo ducimus delectus deleniti incidunt et consectetur, aspernatur nisi nam."/>
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
