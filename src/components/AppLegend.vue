<script setup>
</script>

<template>

<div id="legend-container"></div>

</template>

<style scope>
#legend-container{
transition: .25s;
position:fixed;
right:0;
top:50px;
border-radius: 12px;
/* bordeR:2px solid green; */
/* border-right:1px solid hsla(160, 100%, 37%, 1); */
/* border-left:1px solid hsla(160, 100%, 37%, 1); */
width:125px;
/* height: 350px; */
height: 95%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
overflow:hidden;
gap:.25rem;
z-index: 999;
}
.green-bg{
  background:rgba(0, 189, 126, 0.53);
}
.shortcut:hover{
  background:rgba(0, 189, 126, 0.53)

}
.shortcut{
  width:125px;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border-bottom:.75px solid #000;
  font-size:8pt;
  transform:rotate(-2.5deg);
}
</style>
