<script setup>
defineProps({
    appData:{
        type:Object,
        required:false
    }
})
</script>


<template>

    <div class="app-item-link">
      <!-- access href - vue style -->
      <a target="_blank" class="app-link" :href="appData.href">{{ appData.name }}</a>
    </div>

</template>


<style scope>
 .app-item-link{
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
  heighT:100%;
  font-size:16pt;
  width:100%;
  text-align: center;
  text-transform: uppercase;
}

</style>
