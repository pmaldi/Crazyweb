<template>
    <div id="Twitch" class="TwitchVideos">
        <div id="TwitchVideosTitle" class="TwitchVideosTitle"><font-awesome-icon style="color:#6441A4" :icon="['fab', 'twitch']" /> Replays des lives</div>
        <div id="twitch-display"></div>
    </div>
</template>

<script>
export default {
    name: "TwitchVideos",
    methods:{
        getVideosTwitch: function() {
  
            function videosLoaded() {
                var videosDisplay = document.getElementById('twitch-display'),
                    videoList = JSON.parse(httpRequest.responseText);
                    
                videoList.videos.forEach(function(vid) {
                    let videoItem = document.createElement('div');
                    videoItem.style.margin = "auto";
                    videoItem.style.width = "20%";
                    //videoItem.innerHTML = '<iframe src="https://player.twitch.tv/?video='+vid._id+'&autoplay=false" height="200" width="400" frameborder="0" scrolling="no" allowfullscreen="true"></iframe><div class="divider"/>';
                    videoItem.innerHTML = '<div class="twitchvideo"><a href="'+vid.url+'" target="_blank"><img src="'+vid.preview.medium+'" /><p style="color:#ff3e43">'+vid.title+'</p></a></div>';
                    videosDisplay.appendChild(videoItem);
                });

                videosDisplay.style.display = "flex"
                videosDisplay.style.flexWrap = "wrap"
                videosDisplay.style.textAlign = "center"
            }

            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener('load', videosLoaded);
            httpRequest.open('GET', 'https://api.twitch.tv/kraken/channels/124390443/videos?limit=5');
            httpRequest.setRequestHeader('Client-ID', '0h37a23iuu3enwjdchw05ojqehtur3');
            httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
            httpRequest.send();      
        }
    },
    created(){
        this.getVideosTwitch()
    }
}

</script>

<style>
.TwitchVideosTitle{
    color:white;
    text-transform: uppercase;
    font: 40px "Proxima Nova";
    padding-bottom: 1vw;
    text-align: center;
}
.divider{
    width:0.3vw;
    height:auto;
    display:inline-block;
}
.twitchvideo a:hover{
    text-decoration: none;
}
</style>