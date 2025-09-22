<script setup>

const props = defineProps({
    appData:{
        type:Object,
        required:false
    }
})

console.log(props.appData.git)

</script>


<template>

    <div class="app-item-link">
      <!-- access href - vue style -->
      <a target="_blank" class="app-link" :href="appData.href">{{ appData.name }}</a>
      <a target="_blank" v-if="props.appData.git" class="git-link" :href="appData.git">Github</a>
    </div>

</template>


<style scope>
 .app-item-link{
  transform:translate(0,50px);
  height:100%;
    width:100%;
    min-width:400px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.app-link:hover{
  color:hsla(160, 100%, 37%, 1);
  letter-spacing:1.5px;
}
.app-link{
    border:2px solid #0f0;
    border-radius: 18px;
  /* heighT:100%; */
  font-size:16pt;
  width:100%;
  text-align: center;
  text-transform: uppercase;
}
.git-link{
  border-left:none;
  border-right: none;
   border-top:none;
   border-bottom:2px solid rgb(166, 0, 255);
    border-radius: 18px;
    padding:.05rem 0;
  /* heighT:100%; */
  font-size:11pt;
  width:150px;
  text-align: left;
  text-align: center;
  text-transform: uppercase;
  color:#fff;
}
.git-link:hover{
  color:rgb(223, 89, 228);
  letter-spacing:1.5px;
}

</style>
