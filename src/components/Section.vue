<script setup>
import { computed } from 'vue';
import Applications from './Applications.vue';
import { ref } from 'vue';

const props = defineProps({
    msg:{
        type:String,
        required:true
    },
    bgImage:{
        type:String,
        required:false
    },
    proData:{
        type:Object,
        required:false,
    },
    proName:{
      type:String,
      required:false
    },
    id:{
      type:String,
      required:false,
    }
})
// console.log(props.id)
// add dynamic background by language
let dynamicBg = computed(()=>{
    return new URL(`/src/assets/media/backgrounds/${props.bgImage}.png`,import.meta.url).href
})
// pass project data to app data
let appData = ref(props.proData)
</script>


<template>
    <div :id="props.id" class="anchor section-container into-bg" :style="{
        backgroundImage: `url('${dynamicBg}')`,
        backgroundRepeat:`no-repeat`,
        backgroundSize:`36%`,
        backgroundPosition:`center 498px`,
        }">
          <h3 id="app-title">{{ props.proName }}</h3>
          <!-- app container -->
          <div v-if="props.proData" id="app-container">
              <Applications :app-data="appData"/>
          </div>
          <p id="para-id" class="para hidden">{{ msg }}</p>


    </div>
</template>


<style scope>
#app-title:hover{
  cursor:pointer;
}
#app-title{
  font-weight: bold;
  font-size:21pt;
  position:absolute;
  top:220px;
  left:10px;
  padding:.5rem;
}
#app-container{
    height:100%;
    width:350px;
    /* border:2px solid red; */
}
.section-container{
    height:100vh;
    gap:1rem;
    width:100%;
    position:relative;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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
        background-position:66% 75%;
        opacity:1;
    }
}
.bg-original{
    animation: bgoriginal .2s forwards ease-in;
}
@keyframes bgoriginal {

    from{
        background-position:66% 75%;
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
    /* border:2px solid green; */
    height:500px;
}
#para-id{
    max-width:500px;
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
.vh-50{
    min-height: 50vh;
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
