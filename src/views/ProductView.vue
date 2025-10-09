<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="goods in store.goods" :key="goods.id">
          <div class="products-card__image">
            <img :src="getUrl(goods.image)" :alt="goods.alt">
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description-name">{{ goods.name }}</h4>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description-text">{{ goods.text }}</p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn--primary">
                  <span>В корзину</span>
                  <img src="@/assets/images/icons/shopping-cart-white.svg" alt="basket">
                </button>
                <span>{{ goods.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { store } from '@/store/index';

const getUrl = (image) => {
  return new URL(`../assets/images/goods/${image}`, import.meta.url).href;
};
</script>
<style scoped></style>
