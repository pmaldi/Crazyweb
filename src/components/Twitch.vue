<template>
  <div id="Twitch" class="Twitch">
      <div id="TwitchTitle" class="TwitchTitle"><font-awesome-icon style="color:#6441A4" :icon="['fas', 'play']" /> Live</div>
    <iframe
        id="playertwitch"
        src="https://player.twitch.tv/?channel=cr4zy_r3d"
        width="854"
        height="500"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
    </iframe>
    <iframe frameborder="0"
            scrolling="no"
            id="chat_embed"
            src="https://www.twitch.tv/embed/cr4zy_r3d/chat?darkpopout"
            height="500"
            width="350">
    </iframe>
    <div class="buttonPlayer">
        <div class="ModeCinema btn" v-on:click="GoFullscreen()"><a role="button"><h4><font-awesome-icon class="fabfilm" :icon="['fas', 'film']" /> Mode Cinéma</h4></a></div>
        <div class="Discord btn"><a href="https://discord.gg/Vku6X5S" target="_blank"><h4><font-awesome-icon class="fabdiscord" :icon="['fab', 'discord']" /> Discord</h4></a></div>
        <div class="Soutenir btn"><a href="https://streamlabs.com/cr4zy_r3d/tip" target="_blank"><h4><font-awesome-icon class="fabsoutenir" :icon="['fas', 'hand-holding-heart']" /> Me Soutenir ! :)</h4></a></div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "Twitch-component",
    methods: {
    GoFullscreen: function () {
        let widthUser = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let heigthUser = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let widthFullScreen = widthUser - (widthUser * 25) / 100;
        let heigthFullScreen = heigthUser - (heigthUser * 25) / 100;
        let widthChat = parseInt(document.getElementById("chat_embed").width);
        let widthChatFullScreen = widthChat + (widthChat * 43) / 100;
        let heigthChatFullScreen = heigthFullScreen;
        if(document.getElementById("Twitch").classList.contains("fullscreen") == false){
            document.getElementById("Twitch").classList.add("fullscreen");
            document.getElementById("playertwitch").width = widthFullScreen;
            document.getElementById("playertwitch").height = heigthFullScreen;
            document.getElementById("chat_embed").width = widthChatFullScreen;
            document.getElementById("chat_embed").height = heigthChatFullScreen;
        } else {
            document.getElementById("Twitch").classList.remove("fullscreen");
            document.getElementById("playertwitch").width = 854;
            document.getElementById("playertwitch").height = 500;
            document.getElementById("chat_embed").width = 350;
            document.getElementById("chat_embed").height = 500;
        }
    }
  }
};

</script>

<style>

.TwitchTitle{
    color:white;
    text-transform: uppercase;
    font: 40px "Proxima Nova";
    padding-bottom: 1vw;
}
.Twitch {
    text-align: center;
    background-color: #222222;
}

.buttonPlayer{
    color: white;
    display: flex;
    position: relative;
    width: 50vw;
    margin: 0 auto;
    padding-top: 5vh;
    padding-bottom: 5vh;
}

.buttonPlayer a, a:not([href]) {
    text-decoration: none;
    color: #ffffff;
}
.buttonPlayer a:not([href]) {
    text-decoration: none;
    color: #ffffff;
}
.buttonPlayer a:hover, a:not([href]):hover {
    text-decoration: none;
    color: #ffffff;
}
.buttonPlayer a:not([href]):hover {
    text-decoration: none;
    color: #ffffff;
}
.ModeCinema{
    margin: 0 auto;
}
.Discord{
    margin: 0 auto;
}
.Soutenir{
    margin: 0 auto;
}

.btn {
	padding: 15px;
	font-family: "Proxima Nova semibold";
	font-size: 20px;
	line-height: 34px;
	letter-spacing: 1.75px;
	text-align: left;
	text-transform: uppercase;
	box-sizing: border-box;
}

.fabfilm{
    color:#ff3e43;
}
.fabdiscord{
    color:#7289DA;
}
.fabsoutenir{
    color:#ff3e43;
}
.fullscreen {
    height: 100vh;
    width: 100vw;
    position:fixed;
    top:0;
    left:0;
    background-color: black;
    z-index: 50;
}
</style>
