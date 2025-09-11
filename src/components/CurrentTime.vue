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
        Date:<p id="date-label" class="align-right border-btm-sm">{{ date }}</p>
        Time:<p id="time-label" class="align-right border-btm-sm">{{ time }}</p>
    </div>
</template>


<style scope>

#time-label,#date-label{
    color:hsla(160, 100%, 37%, 1);
}

</style>