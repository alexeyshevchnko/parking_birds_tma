<script setup lang="ts"> 
  const gameUrl = "/game/index.html";  
</script>

<template>
    <iframe :src="gameUrl" class="game-frame" ></iframe> 
</template>

<style scoped> 

.game-frame {
  position: absolute; 
  top: 0;  
  left: 0;  
  width: 100%;
  height: 100%;
  border: rgb(0, 255, 234); 
}

</style>
