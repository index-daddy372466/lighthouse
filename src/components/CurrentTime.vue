<script setup>
import { ref } from 'vue';
let props = defineProps({
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})


</script>


<template>
    <div id="current-time-container">
        <div class="dl">Date:</div><p id="date-label" class="align-right border-btm-sm">{{ date }}</p>
        <div class="dl">Time:</div><p id="time-label" class="align-right border-btm-sm">{{ time }}</p>
    </div>
</template>


<style scope>
.dl{
color:var(--tint)
}
#time-label,#date-label{
    color:hsla(160, 100%, 37%, 1);
}

</style>