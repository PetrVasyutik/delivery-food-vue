<template>
  <div class="page-wrapper">
    <Header />
    <main class="main">
      <router-view></router-view>
    </main>
    <Modal />
    <Footer />
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';
</script>
<style scoped></style>
