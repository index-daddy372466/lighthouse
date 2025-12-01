<script setup>
</script>

<template>

<div id="legend-container" class="no-scrollbar"></div>

</template>

<style scope>
#legend-container{
transition: .25s;
position:fixed;
right:0;
top:175px;
width:105px;
height: 70%;
display:flex;
flex-direction: column;
align-items: center;
border-left:.5px solid #000;
justify-content: space-evenly;
overflow:hidden;
gap:.25rem;
overflow-y:scroll;
z-index: 999;
}
.green-bg{
  background:var(--background-legend-shortcut);
  color:#000;
  font-size:11pt !important;
  transform:rotate(2.5deg)translate(5px,0) !important;
}
.shortcut:hover{
  background:rgba(0, 189, 126, 0.53)

}
.shortcut{
  width:100%;
  height:100%;
  display:flex;
  text-align:center;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border-bottom:.75px solid #000;
  font-size:11pt;
}
.no-selection {
  user-select: none; /* Standard syntax */
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>
