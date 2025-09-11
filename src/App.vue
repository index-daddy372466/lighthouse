<script setup>
import MainView from './components/MainView.vue';
import Header from './components/Header.vue'
import TheWelcome from './components/TheWelcome.vue'
import Footer from './components/Footer.vue';
import ElementScanner from './components/ElementScanner.vue';
</script>

<template>
    <!-- header -->
    <header>
      <Header msg="The Lighthouse" sub="Live, Laugh, Scroll" />
    </header>

    <!-- element scanner -->
     <ElementScanner/>

    <!-- main -->
      <MainView />

    <!-- footer -->
    <!-- <Footer msg="The Lighthouse" /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
