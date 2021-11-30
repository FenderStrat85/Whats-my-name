<template>
  <div class="tile-container">
    <h1>Find your name in another language!</h1>
    <div v-for="language in languages" :key="language">
      <LanguageTile :langName="language.name" :langCode="language.code" />
    </div>
  </div>
</template>

<script>
import LanguageTile from './components/LanguageTile.vue';

export default {
  name: 'App',
  components: {
    LanguageTile,
  },
  data() {
    return {
      languages: [
        { name: 'Chinese', code: 'zh' },
        { name: 'Japanese', code: 'ja' },
        { name: 'Korean', code: 'ko' },
        { name: 'Russian', code: 'ru' },
        { name: 'Georgian', code: 'ka' },
        { name: 'Sinhalese', code: 'si' },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tile-container {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  background-color: aqua;
}
</style>
