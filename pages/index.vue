<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="min-h-screen w-full flex flex-col items-center pt-20 font-sans bg-[#0D0F12] text-[#E3E6E8] gap-8">
    <div class="w-4/5 flex flex-col items-center gap-20">

      <h1 class="text-8xl font-extrabold">Learning <span class="text-[#00dc82]">Vue</span></h1>
      <section class="flex flex-col gap-8 w-full">
        <h2 class="text-6xl font-bold">Chapters</h2>
        <a href="/hello-world" class="text-3xl font-medium text-[#00dc82] w-fit no-underline">1. Hello World</a>
      </section>
    </div>
  </main>
</template>