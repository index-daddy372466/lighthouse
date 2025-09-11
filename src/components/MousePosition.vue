<script setup>
defineProps({})
</script>


<template>
    <div id="mouse-pos-container">
        <p id="posX" class="border-btm-sm mouse-pos-para align-right">X: 0</p>
        <p id="posY" class="border-btm-sm mouse-pos-para align-right">Y: 0</p>
    </div>
</template>


<style scope>
#mouse-pos-container{
    background:transparent;
    
}
.mouse-pos-para{
    color:hsla(160, 100%, 37%, 1);;
}

</style>