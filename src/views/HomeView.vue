<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h1 class="banner-title">Онлайн-сервис <br>доставки еды на дом</h1>
        <p class="banner-description">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h2 class="products-header__title">Рестораны</h2>
        <input
          type="text"
          class="products-header__search"
          placeholder="Поиск блюд и ресторанов"
        />
      </div>
      <div class="products-wrapper" id="rests-container">
        <router-link
          class="products-card"
          v-for="rest in restsArray"
          :key="rest.id"
          :to="`/rest/${rest.id}`"
        >
          <div class="products-card__image">
            <img :src="getUrl(rest.image)" :alt="rest.alt">
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h3 class="products-card__description-title">{{ rest.title }}</h3>
              <div class="products-card__description-badge">{{ rest.time }} мин</div>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info-raiting">
                  <img src="@/assets/images/icons/star.svg" alt="star">
                  {{ rest.rating }}
                </div>
                <div class="products-card__description-info-price">
                  От {{ rest.price }} ₽
                </div>
                <div class="products-card__description-info-group">
                  {{ rest.type }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
import { restsArray } from '@/constants/rests';

const getUrl = (image) => {
  return new URL(`../assets/images/rests/${image}`, import.meta.url).href;
};
</script>
<style scoped></style>
