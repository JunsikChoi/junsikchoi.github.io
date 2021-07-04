<template>
  <div class="wrapper">
    <Header />
    <nuxt class="contents" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: { Header, Footer }
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contents {
  min-height: 100vh;
}
</style>
