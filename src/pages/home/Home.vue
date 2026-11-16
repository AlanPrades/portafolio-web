<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>

  <body>
    <div class= "bg-typo-light-yellow h-screen w-screen">

      <header class= "bg-typo-yellow w-screen h-40 space-y-5">
        <h1 class="text-5xl text-typo-light-yellow font-bold text-center pt-10">
          TypoPhobik
        </h1>

        <div class="z-10 flex justify-around">
          <Button variant="home" class="mr-5">
            <RouterLink to="/typophobik">About me</RouterLink>
          </Button>

          <Button variant="home" class="mr-5">
            <RouterLink to="/commissions">Commissions</RouterLink>
          </Button>

          <Button variant="home" class="mr-5">
            <RouterLink to="/updates">Updates</RouterLink>
          </Button>

          <Button variant="home" class="mr-5">
            <RouterLink to="/Portfolio">Portfolio</RouterLink>
          </Button>
        </div>
      </header>

      <main class="pb-15">
          <div>
            
          </div>
      </main>

      
      <footer class="absolute bottom-5 left-5 leading-tight">
          <div>
            <strong class="text-typo-orange"> All rights reserved </strong>
          </div>
          <small class="text-gray-500"> This website was done by Alan "TypoPhobik" Prades</small>
      </footer>
      

    </div>
  
  </body>

</template>


<style scoped>

</style>