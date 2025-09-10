<script setup>
defineProps({
    msg:{
        type:String,
        required:true
    }
})
</script>
<template>
    <div id="intro-container">
        <p id="intro-para" class="para">{{ msg }}</p>
    </div>
</template>

<style scope>
#intro-container{
    min-width:300px;
    max-width:500px;
    border:2px solid red;
    background:transparent;
}

#intro-para{
    padding:.5rem;
    background-image:linear-gradient(0deg,rgba(0, 189, 126, 0.512) 10%,#181818 90%);
    
}
</style>