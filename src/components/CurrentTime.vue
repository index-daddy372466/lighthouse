<script setup>
defineProps({
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
        <p id="time-label" class="align-right border-btm-sm">{{ date }}</p>
        <p id="time-label" class="align-right border-btm-sm">{{ time }}</p>
    </div>
</template>


<style scope>

#time-label{
    color:hsla(160, 100%, 37%, 1);
}

</style>