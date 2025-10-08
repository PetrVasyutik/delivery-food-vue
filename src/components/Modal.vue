<template>
  <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal">
      <div class="cart-modal">
        <div class="cart-modal__header">
          <h2 class="cart-modal__title">Корзина</h2>
          <button class="btn cart-modal__close" @click="closeModal">
            <img src="@/assets/images/icons/close.svg" alt="close">
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
</template>
<script setup>
const {isOpen} = defineProps({isOpen: Boolean});
const emit = defineEmits(['toggleModal']);
const closeModal = () => emit('toggleModal');
</script>
<style scoped lang="css">
.cart-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background-color: #FFF;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.cart-modal__title {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.cart-modal__close {
  background-color: transparent;
  border: none;
  outline: none;
}

.cart-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-modal__footer-price {
  font-size: 20px;
  font-weight: 700;
  color: #FAFAFA;
  border-radius: 5px;
  background: #262626;
  padding: 15px 20px;
}

.cart-modal__footer-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.cart-modal__body {
  margin-bottom: 48px;
}

.cart-modal-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-modal-item:not(:last-child) {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9;
}

.cart-modal-item__title {
  font-size: 18px;
  font-weight: 400;
  color: #000;
  line-height: 32px;
  margin: 0;
}

.cart-modal-item__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.cart-modal-item__controls button {
  border: 1px solid #40A9FF;
  color: #40A9FF;
}

.cart-modal-item__price {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0;
  margin-right: 47px;
}

.cart-modal-item__count {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0 16px 0 16px;
}
</style>
