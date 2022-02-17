<template>
    <div class="spacer">
        <div class="spacerline" v-if="isBetweenComponent === false"></div>
        <div class="spacerlineBetween" v-if="isBetweenComponent === true"></div>
    </div>
</template>

<style>
.spacerplace{
    padding-top: 10vh;
}
.spacerline {
    width: 50vw;
    height: 0.25vh;
    background: #ff3e43;
    margin: 2vh auto;
}

.spacerlineBetween {
    width: 50vw;
    height: 0.25vh;
    background: #ff3e43;
    margin: 2vh auto;
}

.logo{
    text-align: center;
}


</style>

<script>
export default {
    name: "Spacer-component",
    props: {
        isBetweenComponent: Boolean
}};
</script>