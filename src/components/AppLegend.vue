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
top:175px;
/* bordeR:2px solid green; */
/* border-left:1px solid hsla(160, 100%, 37%, 1); */
/* border-left:1px solid hsla(160, 100%, 37%, 1); */
width:125px;
/* height: 350px; */
height: 70%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
overflow:hidden;
gap:.25rem;
overflow-y:scroll;
z-index: 999;
}
.green-bg{
  background:rgba(0, 189, 126,1);
  color:#000;
  font-size:9pt !important;
  transform:rotate(-2.5deg)translate(-10px,0) !important;
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
.no-selection {
  user-select: none; /* Standard syntax */
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>
