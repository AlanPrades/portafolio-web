<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>

  <div class= "bg-typo-light-yellow h-screen w-screen">

    <div class= "bg-typo-orange w-screen h-40">

      <h1 class="text-5xl text-typo-light-yellow font-bold text-center">
        TypoPhobik
      </h1>

      <div class="z-10 flex justify-around">

      <Button variant="home" class="mr-5 mt-15">
        <RouterLink to="/typophobik">About me</RouterLink>
      </Button>

      <Button variant="home" class="mr-5 mt-15">
        <RouterLink to="/commissions">Commissions</RouterLink>
      </Button>

      <Button variant="home" class="mr-5 mt-15">
        <RouterLink to="/updates">Updates</RouterLink>
      </Button>

      <Button variant="home" class="mr-5 mt-15">
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
      </Button>
      
      </div>

    </div>

  </div>

</template>


<style scoped>

</style>