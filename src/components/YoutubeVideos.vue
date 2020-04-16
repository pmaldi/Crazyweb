<template>
    <div id="Youtube" class="YoutubeVideos">
        <div id="YoutubeVideosTitle" class="YoutubeVideosTitle"><font-awesome-icon style="color:#ff3e43" :icon="['fab', 'youtube']" /> Les Actualités de Youtube</div>
        <div id="youtube-display"></div>
    </div>
</template>

<script>
export default {
    name: "YoutubeVideos",
    methods:{
        getVideosYoutube: function() {
  
            function videosLoaded() {
                var videosDisplay = document.getElementById('youtube-display'),
                    videoList = JSON.parse(httpRequest.responseText);
                    
                videoList.items.forEach(function(vid) {
                    let videoItem = document.createElement('div');
                    videoItem.style.margin = "auto";
                    videoItem.style.width = "20%";                    
                    //videoItem.innerHTML = '<iframe  height="200" width="400"  src="https://www.youtube.com/embed/'+vid.id.videoId+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="divider"/>';
                    videoItem.innerHTML = '<div class="youtubevideo"><a href="https://www.youtube.com/watch?v='+vid.id.videoId+'" target="_blank"><img src="'+vid.snippet.thumbnails.medium.url+'" /><p style="color:#ff3e43">'+vid.snippet.title+'</p></a></div>';
                    videosDisplay.appendChild(videoItem);
                });

                videosDisplay.style.display = "flex"
                videosDisplay.style.flexWrap = "wrap"
                videosDisplay.style.textAlign = "center"
            }

            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener('load', videosLoaded);
            httpRequest.open('GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBBYUBM3RxcRJFr7TeIfjXfBE2KBIttoCE&channelId=UCoG_DnrozqqZ8Fd6wABEqEw&part=snippet,id&order=date&maxResults=5');
            httpRequest.setRequestHeader('Accept', 'application/json');
            httpRequest.send();      
        }
    },
    created(){
        this.getVideosYoutube()
    }
}

</script>

<style>
.YoutubeVideosTitle{
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
.youtubevideo a:hover{
    text-decoration: none;
}
</style>