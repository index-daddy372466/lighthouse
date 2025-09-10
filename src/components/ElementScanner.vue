<script setup>
defineProps({
    type:{
        type:String,required:false
    } 
})
</script>

<template>
    <div id="hr-container">
        <hr id="scanner">
    </div>
</template>



<style scope>
#hr-container{
    width:100%;
    position:fixed;
    top:300px;
}
    hr#scanner{
        width:100%;
        border:none;
        height:2px;
        background:yellow;
    }
</style>