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
      <p>{{ appData.name }}</p>
      <!-- access href - vue style -->
      <a target="_blank" :href="appData.href">{{ appData.href }}</a>
    </div>

</template>


<style scope>
 .app-item-link{
    height:100%;
    width:100%;
    border:2px solid #0f0;
    min-height:175px;
    border-radius: 18px;
}

</style>
