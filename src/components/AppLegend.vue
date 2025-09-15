<script setup>
</script>

<template>

<div id="legend-container"></div>

</template>

<style scope>
#legend-container{
transition: .25s;
position:fixed;
right:20px;
bottom:175px;
border-radius: 12px;
/* bordeR:2px solid green; */
border-right:1px solid hsla(160, 100%, 37%, 1);
border-left:1px solid hsla(160, 100%, 37%, 1);
width:35px;
height: 350px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
overflow:hidden;
gap:.25rem;
z-index: 999;
}
.shortcut:hover{
  background:hsla(160, 100%, 37%, 1);

}
.shortcut{
  width:100px;
  height:100%;
  border-bottom:3px solid #000;
}
</style>
