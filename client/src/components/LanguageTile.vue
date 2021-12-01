<template>
  <transition name="flip" mode="out-in">
    <div v-if="showFront">
      <div
        class="h-md bg-green-400 m-2.5 flex flex-col justify-center rounded-lg shadow-lg"
      >
        <h1 data-test="language-tile-title">{{ langName }}</h1>
        <div class="flex justify-center m-1.5">
          <img v-bind:src="require(`../assets/flags/${langName}.svg`)" />
        </div>
        <div class="">
          <form
            @submit.prevent="getTranslation"
            class="flex flex-col justify-center content-center"
            data-test="form"
          >
            <input
              class="text-center m-2.5 p-2.5 rounded-lg"
              data-test="name-input"
              type="text"
              v-model="name"
              placeholder="Enter your name here!"
              required
            />
            <div class="mt-2">
              <button
                class="btn bg-red-500 hover:bg-red-400"
                data-test="submit-button"
                type="submit"
              >
                Translate!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="h-md bg-blue-400 m-2.5 flex flex-col justify-center rounded-lg shadow-lg"
      >
        <h1>{{ langName }}</h1>
        <div class="flex justify-center m-1.5">
          <img v-bind:src="require(`../assets/photos/${langName}.jpg`)" />
        </div>
        <h2 data-test="tile-back-meta">
          {{ this.originalName }} in {{ langName }} is
          {{ this.translatedName }}
        </h2>
        <div class="mt-2">
          <button
            @click="returnToFront()"
            class="btn bg-yellow-300 hover:bg-yellow-200"
            data-test="return-to-front"
          >
            Try again!
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import apiService from '../services/apiService';
export default {
  name: 'LanguageTile',
  //upon creation of the component do something.
  //good way to confirm what is being passed.
  // created() {
  //   console.log(this.langName);
  // },
  data() {
    return {
      showFront: true,
      name: '',
      originalName: '',
      translatedName: '',
    };
  },
  props: {
    langName: String,
    langCode: String,
  },
  methods: {
    getTranslation: async function () {
      this.originalName = this.name;
      if (this.originalName.length === 0) {
        return;
      } else {
        try {
          const dataFromApi = await apiService.getNameTranslation(
            this.name,
            this.langCode,
          );
          const newName = dataFromApi.data.translations[0].translatedText;
          this.translatedName = newName;
          this.showFront = false;
        } catch (err) {
          console.log('There was an error');
        }
      }
    },
    returnToFront: function () {
      this.name = '';
      this.showFront = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  width: 60%;
  align-items: center;
  border-radius: 10px;
}

button {
  margin: 0 10px 40px 10px;
}

/* .tile-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: blueviolet;
  border: 1px solid black;
  margin: 10px;
  height: 55vh;
} */

.form {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.tile-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  border: 1px solid orangered;
  margin: 10px;
  height: 55vh;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
