<template>
  <div class="min-h-screen bg-su-bg flex flex-col">
    <!-- Header -->
    <header class=" shadow">
      <div class="container mx-auto px-4 py-6">
        <!-- Header content goes here -->
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Chat</h1>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8 flex-grow">
  <!-- Chat Bubble -->
  <div class="max-w-sm mx-auto bg-su-dialog rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div class="p-8">
      <div class="flex items-center">
        <div class="ml-4">
          <p class="text-su-text">You have a new message!</p>
        </div>
      </div>
    </div>
  </div>
</main>

    <!-- Footer -->
    <footer class="bg-su-bg  ">
      <div class="container  px-4 py-6 rounded-sm flex items-center justify-center">
        <!-- Footer content goes here -->
        <input type="text" class=" w-1/3 border-2 border-gray-300 bg-su-input h-16 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Write your message here...">
        
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
    import { defineComponent } from 'vue'

    defineComponent({
        name: 'ChatMain'
    })

</script>