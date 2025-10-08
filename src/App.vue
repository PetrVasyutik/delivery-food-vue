<template>
  <div class="page-wrapper">
    <Header />
    <main class="main">
      <router-view></router-view>
    </main>
    <div class="cart-modal__overlay">
      <div class="cart-modal">
        <div class="cart-modal__header">
          <h2 class="cart-modal__title">Корзина</h2>
          <button class="btn cart-modal__close">
            <img src="/src/assets/images/icons/close.svg" alt="close">
          </button>
        </div>
        <div class="cart-modal__body">
          <div class="cart-modal-item">
            <div class="cart-modal-item__title">Ролл угорь стандарт</div>
            <div class="cart-modal-item__controls">
              <div class="cart-modal-item__price">250 ₽</div>
              <button class="btn btn--outline">
                <span>-</span>
              </button>
              <div class="cart-modal-item__count">1</div>
              <button class="btn btn--outline">
                <span>+</span>
              </button>
            </div>
          </div>
          <div class="cart-modal-item">
            <div class="cart-modal-item__title">Ролл угорь стандарт</div>
            <div class="cart-modal-item__controls">
              <div class="cart-modal-item__price">250 ₽</div>
              <button class="btn btn--outline">
                <span>-</span>
              </button>
              <div class="cart-modal-item__count">1</div>
              <button class="btn btn--outline">
                <span>+</span>
              </button>
            </div>
          </div>
          <div class="cart-modal-item">
            <div class="cart-modal-item__title">Ролл угорь стандарт</div>
            <div class="cart-modal-item__controls">
              <div class="cart-modal-item__price">250 ₽</div>
              <button class="btn btn--outline">
                <span>-</span>
              </button>
              <div class="cart-modal-item__count">1</div>
              <button class="btn btn--outline">
                <span>+</span>
              </button>
            </div>
          </div>
          <div class="cart-modal-item">
            <div class="cart-modal-item__title">Ролл угорь стандарт</div>
            <div class="cart-modal-item__controls">
              <div class="cart-modal-item__price">250 ₽</div>
              <button class="btn btn--outline">
                <span>-</span>
              </button>
              <div class="cart-modal-item__count">1</div>
              <button class="btn btn--outline">
                <span>+</span>
              </button>
            </div>
          </div>
          <div class="cart-modal-item">
            <div class="cart-modal-item__title">Ролл угорь стандарт</div>
            <div class="cart-modal-item__controls">
              <div class="cart-modal-item__price">250 ₽</div>
              <button class="btn btn--outline">
                <span>-</span>
              </button>
              <div class="cart-modal-item__count">1</div>
              <button class="btn btn--outline">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
        <div class="cart-modal__footer">
          <div class="cart-modal__footer-price">1250 ₽</div>
          <div class="cart-modal__footer-controls">
            <button class="btn btn--primary">
              <span>Оформить заказ</span>
            </button>
            <button class="btn btn--outline">
              <span>Войти</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
<style scoped></style>
