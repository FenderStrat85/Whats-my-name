<template>
  <div class="tile">
    <h1>{{ langName }}</h1>
    <form @submit="getTranslation">
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Enter your name here!"
      />
      <input type="submit" value="Translate" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'LanguageTile',
  //upon creation of the component do something.
  //good way to confirm what is being passed.
  created() {
    console.log(this.langName);
  },
  props: {
    langName: String,
    langCode: String,
  },
  methods: {
    getTranslation: function (e) {
      e.preventDefault();
      console.log(this.name);
      e.target.reset();
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

.tile {
  display: flex;
  justify-content: center;
  background-color: blueviolet;
  border: 1px solid black;
  margin: 10px;
  display: flex;
}
</style>
