<script setup>
import { computed } from 'vue';
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
// add dynamic background by language
let dynamicBg = computed(()=>{
    return new URL(`/src/assets/media/languages/${props.lang}.png`,import.meta.url).href
})
console.log(dynamicBg.value)

</script>


<template>
    <div id="section-container" class=" into-bg vh-100" :style="{
        backgroundImage: `url('${dynamicBg}')`,
        backgroundRepeat:`no-repeat`,
        backgroundSize:`66%`,
        backgroundPosition:`center 498px`,
        }">
        <p id="para-id" class="para hidden">{{ msg }}</p>
    </div>
</template>


<style scope>

#section-container{
    /* transform:translate(0,100%); */
    min-width:300px;
    max-width:500px;
    /* border:2px solid red; */
    display:flex;
    flex-direction: column;
    align-items: center;
    opacity:0;
}
.bg-move{
    animation: bgmove .65s forwards ease-in;
}
@keyframes bgmove {

    from{
        background-position:center 498px;
        opacity:0;

    }
    to{
        background-position:280px 450px;
        opacity:1;
    }
    
}
.bg-original{
    animation: bgoriginal .2s forwards ease-in;
}
@keyframes bgoriginal {

    from{
        background-position:280px 450px;
        opacity:1;

    }
    to{
        background-position:center 498px;
        opacity:0;
    }
    
}
#background-container{
    width:100%;
    height:100%;
    border:2px solid green;
    height:500px;
}
#para-id{
    box-shadow:.25rem .25rem 10px .9px #2c3e509b;
    border-bottom:.25px solid rgb(255, 255, 255);
    padding:.5rem;
    border-radius: 12px;
    background-image:linear-gradient(0deg,rgba(0, 189, 126, 0.275),transparent 70%);
    filter: contrast(150%);
    line-height:1.5;
    text-indent: .25in;
    bordeR:2px solid rgba(52, 175, 148, 0.566);
    transform:translate(0,0);
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: end;
    font-size:14pt;
    letter-spacing:.44px;
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
        opacity:1;
    }
    to{
        opacity:0;
    }
    
}

</style>