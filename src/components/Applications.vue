<script setup>
import { computed } from 'vue';
const props = defineProps({
    appData:{
        type:Object,
        required:false
    }
})

console.log(props.appData)


</script>


<template>

    <div class="app-item-link">

    </div>

</template>


<style scope>
 .app-item-link{
    height:100%;
    width:100%;
    border:2px solid #0f0;
    min-height:175px;
    border-radius: 18px;
}

</style>