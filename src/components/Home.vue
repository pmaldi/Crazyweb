<template>
    <div class="home">
      <header id="HEADER_1">
        <div id="DIV_2">
          <div id="DIV_3">
            <div id="DIV_4">
              <div id="DIV_5">
                <ul id="UL_6">
                  <li id="LI_7"><a href="https://www.facebook.com/Cr4zyR3d" id="A_8"><i id="I_9"><font-awesome-icon class="hoversocial" size="lg" :icon="['fab', 'facebook-f']" /></i></a></li>
                  <li id="LI_10"><a href="https://twitter.com/cr4zyr3d" id="A_11"><i id="I_12"><font-awesome-icon class="hoversocial" size="lg" :icon="['fab', 'twitter']" /></i></a></li>
                  <li id="LI_13"><a href="https://www.youtube.com/channel/UCoG_DnrozqqZ8Fd6wABEqEw/featured" id="A_14"><i id="I_15"><font-awesome-icon class="hoversocial" size="lg" :icon="['fab', 'youtube']" /></i></a></li>
                </ul>
              </div>
              <!--  <a href="" id="A_16">CR4ZYR3D</a> -->
                <span  id="A_16">CR4ZYR3D</span>
            </div>
          </div>
          <div id="DIV_18">
            <div id="DIV_19">
              <div id="DIV_20">
                <div id="DIV_21">
                  <div id="DIV_29">
                    <div class="nav"><a id="A_30" href="#Twitch">Twitch</a></div> <!-- class="active"-->
                    <div class="nav"><a id="A_30" href="#Youtube">Youtube</a></div>
                    <div class="nav"><a id="A_30" href="#Friends">Staff</a></div>
                    <div class="nav"><a id="A_30" href="#Social">Social</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
export default {
  name: "Home-component",
  props: {  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hoversocial:hover{
    color: #ff3e43;
}
.nav{
  margin-right: 10%;
}

span {
  font: 700 3.5vw "Roboto", sans-serif;
  letter-spacing: 0;
  display:inline-block;
  /* Clip Background Image */
  background: url("../../src/assets/bglogo.png") repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  /* Activate hardware acceleration for smoother animations */
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
}

/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

#HEADER_1 {
    bottom: 0px;
    color: rgb(255, 255, 255);
    height: 80px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    z-index: 1;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 1280px 40px;
    transform-origin: 1280px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font-family: "Proxima Nova bold";
    outline: rgb(255, 255, 255) none 0px;
}/*#HEADER_1*/

#HEADER_1:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#HEADER_1:after*/

#HEADER_1:before {
    bottom: -8px;
    color: transparent;
    content: '""';
    display: block;
    height: 8px;
    left: 0px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    top: 80px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 1280px 4px;
    transform-origin: 1280px 4px;
    caret-color: rgb(255, 255, 255);
    animation: 0.9s ease 1.9s 1 normal forwards running bar-grow;
    background: rgb(255, 62, 67) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#HEADER_1:before*/

#DIV_2 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 1280px 40px;
    transform-origin: 1280px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex-flow: row wrap;
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 0px 0px 102.391px;
}/*#DIV_2*/

#DIV_2:after {
    color: rgb(255, 255, 255);
    display: block;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_2:after*/

#DIV_2:before {
    color: rgb(255, 255, 255);
    display: block;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_2:before*/

#DIV_3 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    max-width: 300px;
    min-height: auto;
    min-width: auto;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 512px 40px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transform-origin: 512.008px 40px;
    caret-color: rgb(255, 255, 255);
    animation: 0.7s ease-in-out 2.3s 1 normal forwards running appear-logo;
    border: 0px none rgb(255, 255, 255);
    flex: 1 0 0px;
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_3*/

#DIV_3:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_3:after*/

#DIV_3:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_3:before*/

#DIV_4 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 129.5px 40px;
    transform-origin: 129.5px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_4*/

#DIV_4:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_4:after*/

#DIV_4:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_4:before*/

#DIV_5 {
    bottom: 47px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 20px;
    left: 180.984px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(255, 255, 255);
    top: 13px;
    z-index: 2;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 39px 10px;
    transform-origin: 39.0078px 10px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_5*/

#DIV_5:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_5:after*/

#DIV_5:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_5:before*/

#UL_6 {
    color: rgb(255, 255, 255);
    float: right;
    height: 20px;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 39px 10px;
    transform-origin: 39.0078px 10px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    margin: 0px;
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px;
}/*#UL_6*/

#UL_6:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#UL_6:after*/

#UL_6:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#UL_6:before*/

#LI_7 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: inline-block;
    height: 20px;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: top;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 4.57813px 10px;
    transform-origin: 4.57813px 10px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    margin: 0px 0px 0px 10px;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_7*/

#LI_7:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_7:after*/

#LI_7:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_7:before*/

#A_8 {
    color: rgb(255, 255, 255);
    display: block;
    height: 16px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 4.57813px 8px;
    transform-origin: 4.57813px 8px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_8*/

#A_8:after {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_8:after*/

#A_8:before {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_8:before*/

#I_9 {
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    height: 12px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: -15%;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 4.57813px 6px;
    transform-origin: 4.57813px 6px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_9*/

#I_9:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_9:after*/

#I_9:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_9:before*/

#LI_10 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: inline-block;
    height: 20px;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: top;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 7.42188px 10px;
    transform-origin: 7.42969px 10px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    margin: 0px 0px 0px 10px;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_10*/

#LI_10:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_10:after*/

#LI_10:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_10:before*/

#A_11 {
    color: rgb(255, 255, 255);
    display: block;
    height: 16px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 7.42188px 8px;
    transform-origin: 7.42969px 8px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_11*/

#A_11:after {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_11:after*/

#A_11:before {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_11:before*/

#I_12 {
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    height: 12px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: -15%;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 7.42188px 6px;
    transform-origin: 7.42969px 6px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_12*/

#I_12:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_12:after*/

#I_12:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_12:before*/

#LI_13 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: inline-block;
    height: 20px;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: top;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 8px 10px;
    transform-origin: 8px 10px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    margin: 0px 0px 0px 10px;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_13*/

#LI_13:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_13:after*/

#LI_13:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#LI_13:before*/

#A_14 {
    color: rgb(255, 255, 255);
    display: block;
    height: 16px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 8px 8px;
    transform-origin: 8px 8px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_14*/

#A_14:after {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_14:after*/

#A_14:before {
    color: rgb(255, 255, 255);
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#A_14:before*/

#I_15 {
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    height: 12px;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    vertical-align: -15%;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 8px 6px;
    transform-origin: 8px 6px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_15*/

#I_15:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_15:after*/

#I_15:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 12px FontAwesome;
    list-style: outside none none;
    outline: rgb(255, 255, 255) none 0px;
}/*#I_15:before*/

#A_16 {
    bottom: -10px;
    color: rgb(255, 62, 67);
    display: block;
    height: 65px;
    left: 0px;
    letter-spacing: -4.5px;
    position: absolute;
    right: 3.76563px;
    text-decoration: none solid rgb(255, 62, 67);
    text-transform: uppercase;
    top: 25px;
    column-rule-color: rgb(255, 62, 67);
    perspective-origin: 127.609px 32.5px;
    transform-origin: 127.617px 32.5px;
    caret-color: rgb(255, 62, 67);
    border: 0px none rgb(255, 62, 67);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 62, 67) none 0px;
}/*#A_16*/

#A_16:after {
    color: rgb(255, 62, 67);
    letter-spacing: -4.5px;
    text-decoration: none solid rgb(255, 62, 67);
    text-transform: uppercase;
    column-rule-color: rgb(255, 62, 67);
    caret-color: rgb(255, 62, 67);
    border: 0px none rgb(255, 62, 67);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 62, 67) none 0px;
}/*#A_16:after*/

#A_16:before {
    color: rgb(255, 62, 67);
    letter-spacing: -4.5px;
    text-decoration: none solid rgb(255, 62, 67);
    text-transform: uppercase;
    column-rule-color: rgb(255, 62, 67);
    caret-color: rgb(255, 62, 67);
    border: 0px none rgb(255, 62, 67);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 62, 67) none 0px;
}/*#A_16:before*/

#SPAN_17 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    height: 65px;
    letter-spacing: -4.5px;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 54.9375px 32.5px;
    transform-origin: 54.9375px 32.5px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 255, 255) none 0px;
}/*#SPAN_17*/

#SPAN_17:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    letter-spacing: -4.5px;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 255, 255) none 0px;
}/*#SPAN_17:after*/

#SPAN_17:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    letter-spacing: -4.5px;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 65px / 65px "Proxima Nova bold";
    outline: rgb(255, 255, 255) none 0px;
}/*#SPAN_17:before*/

#DIV_18 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    max-width: 58.333%;
    min-height: auto;
    min-width: auto;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 716.797px 40px;
    transform-origin: 716.797px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex: 0 0 58.333%;
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_18*/

#DIV_18:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_18:after*/

#DIV_18:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_18:before*/

#DIV_19 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 716.797px 40px;
    transform-origin: 716.797px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_19*/

#DIV_19:after {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_19:after*/

#DIV_19:before {
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_19:before*/

#DIV_20 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    position: relative;
    right: 0px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: flex-end;
    perspective-origin: 716.797px 40px;
    transform-origin: 716.797px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex-flow: row wrap;
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 0px 0px 57.3438px;
}/*#DIV_20*/

#DIV_20:after {
    color: rgb(255, 255, 255);
    display: block;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_20:after*/

#DIV_20:before {
    color: rgb(255, 255, 255);
    display: block;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_20:before*/

#DIV_21 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    letter-spacing: 2.5px;
    max-width: 100%;
    min-height: auto;
    min-width: auto;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 325.313px 40px;
    transform-origin: 325.313px 40px;
    caret-color: rgb(255, 255, 255);
    animation: 0.3s ease-in-out 2.2s 1 normal forwards running appear;
    border: 0px none rgb(255, 255, 255);
    flex: 1 0 0px;
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_21*/

#DIV_21:after {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_21:after*/

#DIV_21:before {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_21:before*/

#DIV_22 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 325.313px 40px;
    transform-origin: 325.313px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_22*/

#DIV_22:after {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_22:after*/

#DIV_22:before {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_22:before*/

#DIV_23 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    letter-spacing: 2.5px;
    position: relative;
    right: 0px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    align-items: center;
    perspective-origin: 325.313px 40px;
    transform-origin: 325.313px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex-flow: row wrap;
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 0px 0px 26.0156px;
}/*#DIV_23*/

#DIV_23:after {
    color: rgb(255, 255, 255);
    display: block;
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_23:after*/

#DIV_23:before {
    color: rgb(255, 255, 255);
    display: block;
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_23:before*/

#DIV_24 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    letter-spacing: 2.5px;
    max-width: 100%;
    min-height: auto;
    min-width: auto;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 307.297px 40px;
    transform-origin: 307.305px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex: 2 1 0%;
    font: 16px / 19px "Times New Roman";
    margin: 0px 10px 0px 0px;
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_24*/

#DIV_24:after {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_24:after*/

#DIV_24:before {
    color: rgb(255, 255, 255);
    letter-spacing: 2.5px;
    text-align: right;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_24:before*/

#A_25 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    letter-spacing: 2.5px;
    position: relative;
    right: 0px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: flex-end;
    perspective-origin: 307.297px 40px;
    transform-origin: 307.305px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex-flow: row wrap;
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 0px 0px 24.5781px;
}/*#A_25*/

#A_25:after {
    color: rgb(255, 255, 255);
    display: block;
    letter-spacing: 2.5px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_25:after*/

#A_25:before {
    color: rgb(255, 255, 255);
    display: block;
    letter-spacing: 2.5px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_25:before*/

#IMG_26 {
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: block;
    height: 64px;
    letter-spacing: 2.5px;
    max-height: 80%;
    min-height: auto;
    min-width: auto;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 61.3281px 32px;
    transform-origin: 61.3281px 32px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#IMG_26*/

#IMG_26:after {
    color: rgb(255, 255, 255);
    cursor: pointer;
    letter-spacing: 2.5px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#IMG_26:after*/

#IMG_26:before {
    color: rgb(255, 255, 255);
    cursor: pointer;
    letter-spacing: 2.5px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 19px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#IMG_26:before*/

#DIV_27 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    max-width: 100%;
    min-height: auto;
    min-width: auto;
    position: relative;
    right: 0px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    z-index: 1;
    column-rule-color: rgb(255, 255, 255);
    justify-content: center;
    perspective-origin: 325.313px 40px;
    transform: matrix(1, 0, -0.267949, 1, 0, 0);
    transform-origin: 325.313px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex: 1 0 0px;
    font: 16px / 16px "Times New Roman";
    margin: 0px 0px 0px 75px;
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_27*/

#DIV_27:after {
    bottom: 0px;
    color: rgb(255, 255, 255);
    display: block;
    height: 80px;
    left: 0px;
    position: absolute;
    right: -325.313px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    z-index: -1;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 487.969px 40px;
    transform-origin: 487.969px 40px;
    caret-color: rgb(255, 255, 255);
    animation: 0.5s ease-in-out 1.9s 1 normal forwards running connect-appear;
    background: rgb(255, 62, 67) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_27:after*/

#DIV_27:before {
    bottom: 0px;
    color: transparent;
    content: '""';
    display: block;
    height: 80px;
    left: -30px;
    position: absolute;
    right: 660.625px;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 10px 40px;
    transform-origin: 10px 40px;
    caret-color: rgb(255, 255, 255);
    animation: 0.3s ease-in-out 2.6s 1 normal forwards running before-appear;
    background: rgb(255, 62, 67) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_27:before*/

#DIV_28 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 80px;
    min-height: auto;
    min-width: auto;
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 134.5px 40px;
    transform-origin: 134.5px 40px;
    caret-color: rgb(255, 255, 255);
    animation: 0.3s ease 2.2s 1 normal forwards running appear;
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_28*/

#DIV_28:after {
    color: rgb(255, 255, 255);
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_28:after*/

#DIV_28:before {
    color: rgb(255, 255, 255);
    text-align: end;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_28:before*/

#DIV_29 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    height: 80px;
    left: 0px;
    min-width: 269px;
    position: relative;
    right: 0px;
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    top: 0px;
    column-rule-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    perspective-origin: 134.5px 40px;
    transform-origin: 134.5px 40px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    flex-flow: row wrap;
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
    padding: 0px 0px 0px 10.75px;
}/*#DIV_29*/

#DIV_29:after {
    color: rgb(255, 255, 255);
    display: block;
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_29:after*/

#DIV_29:before {
    color: rgb(255, 255, 255);
    display: block;
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 16px / 16px "Times New Roman";
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_29:before*/

#A_30 {
	color: rgb(255, 255, 255);
	-webkit-text-decoration: none solid rgb(255, 255, 255);
	text-decoration: none solid rgb(255, 255, 255);
	text-transform: uppercase;
	-moz-column-rule-color: rgb(255, 255, 255);
	font: 19px / 19px "Proxima Nova";
}/*#A_30*/

#A_30:after {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_30:after*/

#A_30:before {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_30:before*/

#A_30:hover{
  color: #ff3e43;
}

#P_31 {
    color: rgb(255, 255, 255);
    height: 19px;
    min-height: auto;
    min-width: auto;
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 2.8125px 9.5px;
    transform: matrix(1, 0, 0.267949, 1, 0, 0);
    transform-origin: 2.8125px 9.5px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    margin: 0px 5px;
    outline: rgb(255, 255, 255) none 0px;
    transition: color 0.3s ease 0s;
}/*#P_31*/

#P_31:after {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#P_31:after*/

#P_31:before {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#P_31:before*/

#A_32 {
    color: rgb(255, 255, 255);
    display: block;
    height: 19px;
    min-height: auto;
    min-width: auto;
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 56.2656px 9.5px;
    transform: matrix(1, 0, 0.267949, 1, 0, 0);
    transform-origin: 56.2734px 9.5px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
    transition: color 0.3s ease 0s;
}/*#A_32*/

#A_32:after {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_32:after*/

#A_32:before {
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none solid rgb(255, 255, 255);
    text-transform: uppercase;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: 19px / 19px "Proxima Nova";
    outline: rgb(255, 255, 255) none 0px;
}/*#A_32:before*/
</style>
