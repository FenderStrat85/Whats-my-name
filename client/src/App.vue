<template>
  <div class="bg-background">
    <h1 class="m-2.5 pt-4">Find your name in another language!</h1>
    <div class="tile-container bg-background">
      <div v-for="language in languages" :key="language">
        <LanguageTile :langName="language.name" :langCode="language.code" />
      </div>
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
  margin-top: -10px;
}

.tile-container {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
