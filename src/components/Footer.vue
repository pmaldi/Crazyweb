<template>
    <div id="Social" class="FooterComponents">
    <div id="FooterComponentsTitle" class="FooterComponentsTitle"></div>
    <footer id="footer">
        <div class="container">
            <!-- Row -->
			<div class="row">
                <div class="col-md-12">
            <!-- footer logo -->
                    <div class="footer-logo">
                        <a href="#"><img src="../../src/assets/CRAZYRED.png" alt="scanfcode"></a>
                    </div>
                    <!-- /footer logo -->
                    <!-- footer follow -->
                    <ul class="footer-follow">
                        <li><a href="https://www.twitch.tv/cr4zy_r3d" target="_blank"><font-awesome-icon size="lg" :icon="['fab', 'twitch']" /></a></li>
                        <li><a href="https://www.facebook.com/Cr4zyR3d" target="_blank"><font-awesome-icon size="lg" :icon="['fab', 'facebook-f']" /></a></li>
                        <li><a href="https://twitter.com/cr4zyr3d" target="_blank"><font-awesome-icon size="lg" :icon="['fab', 'twitter']" /></a></li>
                        <li><a href="https://www.instagram.com/cr4zy_r3d/" target="_blank"><font-awesome-icon size="lg" :icon="['fab', 'instagram']" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCoG_DnrozqqZ8Fd6wABEqEw/featured" target="_blank"><font-awesome-icon size="lg" :icon="['fab', 'youtube']" /></a></li>
                    </ul>
                    <!-- /footer follow -->
                    <!-- footer copyright -->
                    <div class="footer-copyright">
                        <p>Copyright © 2020. All Rights Reserved. <a role="button">CrazyWeb</a></p>
                    </div>
                    <!-- /footer copyright -->
                </div>
			</div>
			<!-- /Row -->
		</div>
		<!-- /Container -->
	</footer>
    </div>
</template>

<script>
export default {
  name: "Footer-component",
  props: {  }
};
</script>

<style scoped>
body
{
  padding:0;margin:0;
}
a {
    color: #ff3e43;
    text-decoration: none;
    -webkit-transition: 0.2s opacity;
    transition: 0.2s opacity;
}
a:hover, a:focus {
    text-decoration: none;
    outline: none;
    opacity: 0.8;
    color: #6195FF;
}
#footer {
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #333
}

.footer-logo {
    text-align: center;
    margin-bottom: 40px;
}

.footer-logo>a>img {
    max-height: 15vh;
}
.footer-follow {
    text-align: center;
    margin-bottom: 20px;
}
.footer-follow li {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 13px;
}

.footer-follow li a {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 3px;
  background-color: #ff3e43;
  color:#FFF;
}

.footer-copyright p {
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;
  color:#868F9B;
}


</style>