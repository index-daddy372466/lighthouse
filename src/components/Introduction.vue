<script setup>
defineProps({
    msg:{
        type:String,
        required:true
    }
})
</script>
<template>
    <div id="intro-container" class="vh-100">
        <p id="intro-para" class="para hidden">{{ msg }}</p>
    </div>
</template>

<style scope>
#intro-container{
    min-width:300px;
    max-width:500px;
    /* border:2px solid red; */
    background:transparent;
    background-repeat: no-repeat;
    background-position:66px 10%;
    background-blend-mode: multiply;
    background-size:contain;
    background-image: url('../assets/media/lh-red.png');
}

#intro-para{
    padding:.5rem;
    border-radius:20px;
    background-image:linear-gradient(0deg,rgba(0, 189, 126, 0.512) 10%,#181818 90%);
    line-height:1.75;
    text-indent: .5in;
}
.hidden{
    opacity:0;
}
.disappear{
    opacity:0;
    animation: disappearelement .25s ease-out;
}
.appear{
    animation: appearelement .75s ease-out;
}
.vh-100{
    min-height: 100vh;
}
@keyframes appearelement {
    from{
        transform:translate(-100%,0);
        opacity:0;
    }
    to{
        transform:translate(0,0);

        opacity:1;
    }
    
}
@keyframes disappearelement {
    from{
        transform:translate(0,0);
        opacity:1;
    }
    to{
        transform:translate(-100%,0);
        opacity:0;
    }
    
}
</style>