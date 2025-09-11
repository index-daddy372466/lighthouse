<script setup>
import MousePosition from './MousePosition.vue';
import CurrentTime from './CurrentTime.vue';
import { ref } from 'vue';
defineProps({})
const today = new Date()
const formattedDate = ref(today.toISOString().slice(0,10))

let formattedTime = ref(today.toTimeString().slice(0,9))

</script>


<template>
    <div id="stats-container">
        <CurrentTime :date="formattedDate" :time="formattedTime"/>
        <MousePosition/>
    </div>
</template>


<style scope>
#stats-container{
    position:fixed;
    top:4px;
    right:4px;
    /* border:2px solid red; */
    padding:.5rem;
    display:flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap:2px;
    transition:.5s;
    z-index:999;
}
@media screen and (max-width:650px){
    #stats-container{
        top:0;
        width:100%;
        display:flex;
        flex-direction: row;
        /* border:2px solid red; */
        justify-content: right;
  }
  #mouse-pos-container,#current-time-container{
    display:flex;
    gap:.5rem;

  }
}
</style>