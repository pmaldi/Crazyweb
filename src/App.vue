<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
      <Home />
      <Spacer :isBetweenComponent="false" />
      <Twitch />
       <Spacer :isBetweenComponent="true" />
       <TwitchVideos />
      <Spacer :isBetweenComponent="true" />
      <YoutubeVideos />
      <Spacer :isBetweenComponent="true" />
      <Friends />
      <Spacer :isBetweenComponent="true" />
      <Footer />
    </main>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import Twitch from "./components/Twitch.vue";
import TwitchVideos from "./components/TwitchVideos.vue";
import Spacer from "./components/Spacer.vue";
import YoutubeVideos from "./components/YoutubeVideos.vue";
import Friends from "./components/Friends.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    LoadingScreen,
    Home,
    Twitch,
    TwitchVideos,
    Spacer,
    YoutubeVideos,
    Friends,
    Footer,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style>
</style>
