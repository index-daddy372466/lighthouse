<script setup>
const props = defineProps({
    msg:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        required:false
    }
})

console.log(props.lang)
</script>


<template>
    <div id="para-container" class="vh-100 into-bg">
        <p id="para-id" class="para hidden">{{ msg }}</p>
    </div>
</template>


<style scope>
#para-container{
    transform:translate(0,100%);
    min-width:300px;
    max-width:500px;
    /* border:2px solid red; */
    background:transparent;
}
#para-id{
    box-shadow:.25rem .25rem 10px .9px #2c3e509b;
    padding:.5rem;
    border-radius: 12px;
    background-image:linear-gradient(0deg,rgba(0, 189, 126, 0.512),transparent 70%);
    filter: contrast(150%);
    line-height:1.75;
    text-indent: .25in;
    transform:translate(0,0)
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
        transform:translate(0,100%);
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
        /* transform:translate(0,100%); */
        opacity:0;
    }
    
}
</style>