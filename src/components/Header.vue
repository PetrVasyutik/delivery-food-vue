<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>
        <div class="header-controls">
          <button class="btn btn--primary">
            <img src="@/assets/images/icons/user.svg" alt="user">
            <span>Войти</span>
          </button>
          <button class="btn btn--outline" @click="openModal()">
            <img src="@/assets/images/icons/basket.svg" alt="basket">
            <span>Корзина</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const emit = defineEmits(['toggleModal']);
const openModal = () => emit('toggleModal');
</script>
<style scoped lang="css">
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
</style>
