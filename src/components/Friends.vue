<template>
    <div id="Friends" class="Friends">
      <div id="FriendsTitle" class="FriendsTitle"><font-awesome-icon style="color:#ff3e43" :icon="['fas', 'kiss-wink-heart']" /> Le Staff & Les copains</div>
        <section class="container">
            <div class="row active-with-click">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <article class="material-card Red">
                        <h2>
                            <span>Cr4zyR3d</span>
                            <strong>
                                <i class="fa fa-fw fa-star"><font-awesome-icon :icon="['fas', 'star']" /></i>
                                Streamer & Leader des FouWouj
                            </strong>
                        </h2>
                        <div class="mc-content">
                            <div class="img-container">
                                <img class="img-responsive" src="../../src/assets/crazy.jpg">
                            </div>
                            <div class="mc-description">
                                Bienvenue à tous, bande de Furieux !
                                Je joue sur PC, aussi bien sur les derniers Blockbusters que sur des références un peu plus anciennes.<br>Retrouve moi sur les réseaux-sociaux !
                            </div>
                        </div>
                        <a class="mc-btn-action">
                            <i class="fa fa-bars"><font-awesome-icon :icon="['fas', 'bars']" /></i>
                        </a>
                        <div class="mc-footer">
                            <h4>
                                Social
                            </h4>
                            <a href="https://www.facebook.com/Cr4zyR3d" class="fa fa-fw fa-facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                            <a href="https://twitter.com/cr4zyr3d" class="fa fa-fw fa-twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                            <a href="https://www.twitch.tv/cr4zy_r3d" class="fa fa-fw fa-twitch"><font-awesome-icon :icon="['fab', 'twitch']" /></a>
                            <a href="https://www.youtube.com/channel/UCoG_DnrozqqZ8Fd6wABEqEw/featured" class="fa fa-fw fa-youtube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <article class="material-card Red">
                        <h2>
                            <span>Notablueta</span>
                            <strong>
                                <i class="fa fa-fw fa-star"><font-awesome-icon :icon="['fas', 'star']" /></i>
                                Community Manager & Streameuse
                            </strong>
                        </h2>
                        <div class="mc-content">
                            <div class="img-container">
                                <img class="img-responsive" src="../../src/assets/nota.jpg">
                            </div>
                            <div class="mc-description">
                                Ici on m'appelle Nota. <br>Je suis une jeune trentenaire qui aime les chats, Disneyland Paris et les bonbons Haribo pêche.
                            </div>
                        </div>
                        <a class="mc-btn-action">
                            <i class="fa fa-bars"><font-awesome-icon :icon="['fas', 'bars']" /></i>
                        </a>
                        <div class="mc-footer">
                            <h4>
                                Social
                            </h4>
                            <a href="https://twitter.com/Notablueta" class="fa fa-fw fa-twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                            <a href="www.twitch.tv/notablueta" class="fa fa-fw fa-twitch"><font-awesome-icon :icon="['fab', 'twitch']" /></a>
                            <a href="https://www.youtube.com/channel/UCArgGtux71z38y445ly_MMg/" class="fa fa-fw fa-youtube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <article class="material-card Red">
                        <h2>
                            <span>SuperSirc</span>
                            <strong>
                                <i class="fa fa-fw fa-star"><font-awesome-icon :icon="['fas', 'star']" /></i>
                                Streamer
                            </strong>
                        </h2>
                        <div class="mc-content">
                            <div class="img-container">
                                <img class="img-responsive" src="../../src/assets/super.jpg">
                            </div>
                            <div class="mc-description">
                                Papa(x2),Geek et motard. <br>Rarement en même temps. <br>Sponsorisé par MSI et Logitech mais ils le savent pas encore.
                            </div>
                        </div>
                        <a class="mc-btn-action">
                            <i class="fa fa-bars"><font-awesome-icon :icon="['fas', 'bars']" /></i>
                        </a>
                        <div class="mc-footer">
                            <h4>
                                Social
                            </h4>
                            <a href="https://www.facebook.com/Supersirc-120009319399867" class="fa fa-fw fa-facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                            <a href="https://twitter.com/SuperSircTV" class="fa fa-fw fa-twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                            <a href="https://www.twitch.tv/supersirctv" class="fa fa-fw fa-twitch"><font-awesome-icon :icon="['fab', 'twitch']" /></a>
                            <a href="https://www.youtube.com/channel/UCoEpkVrhzq3cj-KABUeCTkA" class="fa fa-fw fa-youtube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "Friends",
        methods:{
            MaterialCard: function() {
            $(function() {
                $('.material-card > .mc-btn-action').click(function () {
                    var card = $(this).parent('.material-card');
                    var icon = $(this).children('i');
                    icon.addClass('fa-spin-fast');

                    if (card.hasClass('mc-active')) {
                        card.removeClass('mc-active');

                    } else {
                        card.addClass('mc-active');
                    }
                });
            });
        }
    },
    mounted(){
        this.MaterialCard()
    }
}


</script>

<style scoped>
.FriendsTitle{
    color:white;
    text-transform: uppercase;
    font: 40px "Proxima Nova";
    padding-bottom: 1vw;
    text-align: center;
}
@import "https://fonts.googleapis.com/css?family=Raleway:400,300,200,500,600,700";
.fa-spin-fast {
  -webkit-animation: fa-spin-fast 0.2s infinite linear;
  animation: fa-spin-fast 0.2s infinite linear;
}
@-webkit-keyframes fa-spin-fast {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin-fast {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.material-card {
  position: relative;
  height: 0;
  padding-bottom: calc(100% - 16px);
  margin-bottom: 6.6em;
}
.material-card h2 {
  position: absolute;
  top: calc(100% - 16px);
  left: 0;
  width: 100%;
  padding: 10px 16px;
  color: #fff;
  font-size: 1.4em;
  line-height: 1.6em;
  margin: 0;
  z-index: 10;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card h2 span {
  display: block;
}
.material-card h2 strong {
  font-weight: 400;
  display: block;
  font-size: 0.8em;
}
.material-card h2:before,
.material-card h2:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: -16px;
  width: 0;
  border: 8px solid;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card h2:after {
  top: auto;
  bottom: 0;
}
@media screen and (max-width: 767px) {
  .material-card.mc-active {
    padding-bottom: 0;
    height: auto;
  }
}
.material-card.mc-active h2 {
  top: 0;
  padding: 10px 16px 10px 90px;
}
.material-card.mc-active h2:before {
  top: 0;
}
.material-card.mc-active h2:after {
  bottom: -16px;
}
.material-card .mc-content {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 16px;
  left: 16px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card .mc-btn-action {
  position: absolute;
  right: 16px;
  top: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid;
  width: 54px;
  height: 54px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  z-index: 20;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card.mc-active .mc-btn-action {
  top: 62px;
}
.material-card .mc-description {
  position: absolute;
  top: 100%;
  right: 30px;
  left: 30px;
  bottom: 54px;
  overflow: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: all 1.2s;
  -moz-transition: all 1.2s;
  -ms-transition: all 1.2s;
  -o-transition: all 1.2s;
  transition: all 1.2s;
}
.material-card .mc-footer {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card .mc-footer h4 {
  position: absolute;
  top: 200px;
  left: 30px;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  -webkit-transition: all 1.4s;
  -moz-transition: all 1.4s;
  -ms-transition: all 1.4s;
  -o-transition: all 1.4s;
  transition: all 1.4s;
}
.material-card .mc-footer a {
  display: block;
  float: left;
  position: relative;
  width: 52px;
  height: 52px;
  margin-left: 5px;
  margin-bottom: 15px;
  font-size: 28px;
  color: #fff;
  line-height: 52px;
  text-decoration: none;
  top: 200px;
}
.material-card .mc-footer a:nth-child(1) {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.material-card .mc-footer a:nth-child(2) {
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -o-transition: all 0.6s;
  transition: all 0.6s;
}
.material-card .mc-footer a:nth-child(3) {
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  -o-transition: all 0.7s;
  transition: all 0.7s;
}
.material-card .mc-footer a:nth-child(4) {
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
}
.material-card .mc-footer a:nth-child(5) {
  -webkit-transition: all 0.9s;
  -moz-transition: all 0.9s;
  -ms-transition: all 0.9s;
  -o-transition: all 0.9s;
  transition: all 0.9s;
}
.material-card .img-container {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.material-card.mc-active .img-container {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  left: 0;
  top: 12px;
  width: 60px;
  height: 60px;
  z-index: 20;
}
.material-card.mc-active .mc-content {
  padding-top: 5.6em;
}
@media screen and (max-width: 767px) {
  .material-card.mc-active .mc-content {
    position: relative;
    margin-right: 16px;
  }
}
.material-card.mc-active .mc-description {
  top: 50px;
  padding-top: 5.6em;
  opacity: 1;
  filter: alpha(opacity=100);
}
@media screen and (max-width: 767px) {
  .material-card.mc-active .mc-description {
    position: relative;
    top: auto;
    right: auto;
    left: auto;
    padding: 50px 30px 70px 30px;
    bottom: 0;
  }
}
.material-card.mc-active .mc-footer {
  overflow: visible;
  position: absolute;
  top: calc(100% - 16px);
  left: 16px;
  right: 0;
  height: 82px;
  padding-top: 15px;
  padding-left: 25px;
}
.material-card.mc-active .mc-footer a {
  top: 0;
}
.material-card.mc-active .mc-footer h4 {
  top: -32px;
}
.material-card.Red h2 {
  background-color: #F44336;
}
.material-card.Red h2:after {
  border-top-color: #F44336;
  border-right-color: #F44336;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.material-card.Red h2:before {
  border-top-color: transparent;
  border-right-color: #B71C1C;
  border-bottom-color: #B71C1C;
  border-left-color: transparent;
}
.material-card.Red.mc-active h2:before {
  border-top-color: transparent;
  border-right-color: #F44336;
  border-bottom-color: #F44336;
  border-left-color: transparent;
}
.material-card.Red.mc-active h2:after {
  border-top-color: #B71C1C;
  border-right-color: #B71C1C;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.material-card.Red .mc-btn-action {
  background-color: #F44336;
}
.material-card.Red .mc-btn-action:hover {
  background-color: #B71C1C;
}
.material-card.Red .mc-footer h4 {
  color: #B71C1C;
}
.material-card.Red .mc-footer a {
  background-color: #ff3e43;
}
.material-card.Red.mc-active .mc-content {
  background-color: #FFEBEE;
}
.material-card.Red.mc-active .mc-footer {
  background-color: #FFCDD2;
}
.material-card.Red.mc-active .mc-btn-action {
  border-color: #FFEBEE;
}
h1,
h2,
h3 {
  font-weight: 200;
}
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
</style>