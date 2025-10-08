<template>
  <footer class="footer">
      <div class="container">
        <div class="footer-box">
          <router-link to="/" class="footer-logo logo">
            <img src="@/assets/images/logo.svg" alt="logo">
          </router-link>
          <div class="footer-nav">
            <ul class="footer-nav-list">
              <li class="footer-nav-item"><a href="#">Ресторанам</a></li>
              <li class="footer-nav-item"><a href="#">Курьерам</a></li>
              <li class="footer-nav-item"><a href="#">Пресс-центр</a></li>
              <li class="footer-nav-item"><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#"><img src="@/assets/images/icons/vk.svg"  alt="vk"></a>
            <a href="#"><img src="@/assets/images/icons/inst.svg" alt="instagram"></a>
            <a href="#"><img src="@/assets/images/icons/fb.svg" alt="fb"></a>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
</script>
<style scoped lang="css">
.footer {
  min-height: 156px;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 36px;
}

.footer-nav {
  flex-grow: 1;
  min-width: 0;
}

.footer-nav-list {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  gap: 15px;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-nav-item {
  white-space: nowrap;
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-social {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 20px;
  justify-content: end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
}

.footer-social img {
  white-space: nowrap;
}

.footer-social a:hover {
  transform: scale(1.2);
}
</style>
