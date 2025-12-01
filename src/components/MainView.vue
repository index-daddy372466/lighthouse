
<script setup>
import Section from './Section.vue';
import Footer from './Footer.vue';
import Pageinfo from './Pageinfo.vue'
import Header from './Header.vue';
import { ref } from 'vue';
import AppLegend from './AppLegend.vue';
import {agecalculator, scorekeeper ,snake, idogsit, encryption,mancala,calculator, simon, mongo, filesystem, shaggy, todo, iriebird, dimmerjs, selectiontool} from '../assets/projects.json'

let games = {
  snake:ref(snake),
  mancala:ref(mancala),
  simon:ref(simon),
  iriebird:ref(iriebird),
}

let gadgets = {
  scorekeeper:ref(scorekeeper),
  calculator:ref(calculator),
  encryption:ref(encryption),
  mongodb:ref(mongo),
  filesystem:ref(filesystem),
  todo:ref(todo),
  dimmerjs:ref(dimmerjs),
  calcage:ref(agecalculator)
}
let design = {
  shaggy:ref(shaggy),
  idogsit:ref(idogsit),
  selectiontool:ref(selectiontool),
}
</script>

<template>

    <!-- app-legend view -->
  <AppLegend />
    <!-- page information -->
     <Pageinfo />

     <!-- header -->
        <header>
            <Header msg="The Litehouse" sub="Keep it Lite" />
        </header>
<!-- main view -->
 <div id="wrapper">

    <!-- intro -->

    <Section :enabled="Boolean(true)" id="welcome"  proName="Welcome" bgImage="vue" msg="Welcome to the Litehouse, a lightweight portfolio made with the Vue framework. My name is Kyle, a web developer. As you scroll further, you may discover customized games, modules and ideas as well as it's source code. Collaborations and inquires are welcome!"/>
    <Section :enabled="Boolean(false)" id="scorekeeper" :pro-name="gadgets.scorekeeper.value.description" :pro-data="gadgets.scorekeeper" bgImage="scorekeeper" msg="Having trouble tracking scores in basketball games? Try out the scorekeeper! Program both teams of 5 players and track their scores by name."/>
    <Section :enabled="Boolean(false)" id="filesystem" :pro-name="gadgets.filesystem.value.description" :pro-data="gadgets.filesystem" bgImage="filesystem" msg="An original, customized filesystem aimed at meeting a comfortable user experience for clients during file uploads, file updates, file viewing and file deletions all on the client side."/>
    <Section :enabled="Boolean(false)" id="dimmerjs" :pro-name="gadgets.dimmerjs.value.description" :pro-data="gadgets.dimmerjs.value" bgImage="dimmerjs" msg="Take control of your eye sight with this dimmer programming interface. Drag the icon with a mouse or finger to change the brightness, switch out icons and change the color of the tooltip."/>
    <Section :enabled="Boolean(true)" id="iriebird" :pro-name="games.iriebird.value.description" :pro-data="games.iriebird.value" bgImage="iriebird" msg="A flappy-bird mock game with a carribean touch. Guide a bird through a series of moving green pipes by tapping the screen to make it flap its wings"/>
    <Section :enabled="Boolean(false)" id="calcage" :pro-name="gadgets.calcage.value.description" :pro-data="gadgets.calcage.value" bgImage="calcage" msg="Age in Minutes/Hours App: Users input their birthdate, and the app calculates their age in minutes or hours. This involves working with date and time objects, input handling, and displaying calculated results."/>
    <Section :enabled="Boolean(false)" id="selectiontool" :pro-name="design.selectiontool.value.description" :pro-data="design.selectiontool.value" bgImage="selectiontool" msg="hover/click over 6 tiles represented by aggressive-looking animals"/>
    <Section :enabled="Boolean(false)" id="idogsit" :pro-name="design.idogsit.value.description" :pro-data="design.idogsit.value" bgImage="idogsit" msg="Front end single-page design of a dog sitting webite with a signup form included."/>
    <Section :enabled="Boolean(false)" id="mongo" :pro-name="gadgets.mongodb.value.description" :pro-data="gadgets.mongodb.value" bgImage="mongodb" msg="A non-relational database programmed to increase understanding of the basic functions (Create, Read, Update, Delete)."/>
    <Section :enabled="Boolean(false)" id="todo" :pro-name="gadgets.todo.value.description" :pro-data="gadgets.todo" bgImage="todo" msg="A todo list with all of it's basic functions. Clients should be able to create a todo, read it clearly, edit, and delete todos within the list."/>
    <Section :enabled="Boolean(true)" id="calculator" :pro-name="gadgets.calculator.value.description" :pro-data="gadgets.calculator" bgImage="calculator" msg="A calculator that performs fundamental arithmetic operations, namely addition, subtraction, multiplication, and division"/>
    <Section :enabled="Boolean(true)" id="shaggy" :pro-name="design.shaggy.value.description" :pro-data="design.shaggy" bgImage="shaggy" msg="A web solution where potential prospects can easily navigate through on desktop & mobile platforms. Key features include a responsive user interface and navigation adaptability."/>
    <Section :enabled="Boolean(true)" id="mancala" :pro-name="games.mancala.value.description" :pro-data="games.mancala" bgImage="marble" msg="An ancient, two-player strategy board game played with small stones or seeds and a board with two rows of pits and two larger 'mancala' or store pits at the ends"/>
    <Section :enabled="Boolean(true)" id="simon" :pro-name="games.simon.value.description" :pro-data="games.simon" bgImage="simon" msg="A round electronic device where players must repeat a sequence of lights and sounds."/>
    <Section :enabled="Boolean(false)" id="encryption" :pro-name="gadgets.encryption.value.description" :pro-data="gadgets.encryption" bgImage="encryption" msg="A playground created to understand the basics around encrypting & signing data. This module includes but is not limited to symmetric/asymmetric encryption & creating signatures."/>
    <Section :enabled="Boolean(false)" id="snake" :pro-name="games.snake.value.description" :pro-data="games.snake" bgImage="snake" msg="Classic snake game where you must survive eat food, and grow without running into walls...and yourself!"/>
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
