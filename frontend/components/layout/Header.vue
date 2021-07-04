<template>
  <header class="header">
    <div class="header__logo">
      JUNSIK.DEV
    </div>
    <ul class="header__menu">
      <li class="header__menu__item">
        About
      </li>
      <li class="header__menu__item">
        Blog
      </li>
      <li class="header__menu__item">
        Projects
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &__item {
      margin-left: 2rem;
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    margin: 0 1rem;
  }
}
</style>
