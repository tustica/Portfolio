<template>
    <div class="about">
        <div id="text-section" class="col">
            <h1 id="about-me">About Me</h1>
            <p class="about-text">I'm an aspiring software developer based in Dallas, TX. I love to create engaging modern websites.</p>
            <p class="about-text">My goal is to be a well-rounded developer, proficient in frontend, backend, and design.</p>
        </div>
        <div id="spinning" class="col">
            <div class="circle_contain">
                <div class="circle"></div>
            </div>
            <div class="circle_contain">
                <div class="circle"></div>
            </div>
            <div class="circle_contain">
                <div class="circle"></div>
            </div>
        </div>
        <svg>
            <defs>
                <filter id="goo">
                    <feGaussianBlur stdDeviation='5' in='sourceGraphic' result='blur'></feGaussianBlur>
                    <feColorMatrix mode='matrix' in='blur' values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result='goo'></feColorMatrix>
                    <feBlend in='blur' in2='goo'></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>
<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&family=Montserrat:wght@500&display=swap');

$tablet:768px;
$phone:425px;
$mphone: 375px;
$smphone: 320px;
    .about{
        width: 100vw;
        background-color: white;
        height: 70vh;
    }
    #about-me{
        font-size: 40px;
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        margin: 0px;
    }
    .about-text{
        width: 80%;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        padding-bottom: 30px;
        color: white;
        text-align: left;
        margin: 0px;
    }
    #text-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        animation: fade 1s;
    }
    @keyframes fade{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    .col{
        width: 50%;
        height: 70vh;
        float: left;
        background: radial-gradient(#313a89,#3d469b );
    }
    #spinning{
        background: radial-gradient(#313a89,#3d469b );
    }
.circle_contain{
    zoom: 80%;
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(110%, 120%);
}
.circle_contain::after{
    content: "";
    position: absolute;
    width: 30px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    bottom: 0;
    opacity: .4;
    top: 70%;
    left: 0%;
    animation: shadow 3s linear infinite;
}
.circle_contain:nth-child(2):after{
    animation-delay: .4s;
}
.circle_contain:nth-child(3):after{
    animation-delay: .8s;
}
.circle_contain:nth-child(2) .circle{
    animation-delay: -.4s;
}
.circle_contain:nth-child(3) .circle{
    animation-delay: -.8s;
}
.circle {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: radial-gradient(rgb(251, 176, 12), rgb(255, 136, 0));
    animation: anim 3s linear infinite;
}
@keyframes anim{
    0% {
    transform-origin: 500% 50%;
    }
    50% {
        transform: rotate(
    1turn);
        transform-origin: 500% 50%;
    }
    50.1% {
        transform: rotate(0);
        transform-origin: -400% 50%;
    }
    100% {
        transform: rotate(
    -1turn);
        transform-origin: -400% 50%;
    }
}
@keyframes shadow{
    0%{
        transform: translate(800%) scale(1);
    }
    25%{
        transform: translate(0%) scale(.5);
    }
    50% {
        transform: translate(-800%) scale(1);
    }
    75%{
        transform: translate(0%) scale(.5);
    }
    100% {
        transform: translate(800%) scale(1);
    }
}

@media screen and (max-width:$tablet) {
    .about{
        position: absolute;
        top: 710px;
    }
    #about-me{
        font-size: 30px;
    }
    .about-text{
        font-size: 22px;
    }
    .col > div{
        top: 36%;
        left: 73%;
    }
    .circle{
        width: 30px;
        height: 30px;
    }
}
@media screen and (max-width:$phone) {
    .about{
        position: absolute;
        top: 500px;
    }
    #about-me{
        font-size: 23px;
    }
    .about-text{
        font-size: 16px;
        padding: 0px;
    }
    .circle{
        width: 1.5rem;
        height: 1.5rem;
    }
    #text-section{
        height: 300px;
    }
}
@media screen and (max-width: $mphone) {
    .about-text{
        font-size: 14px;
        padding: 0px;
    }
    #text-section{
        height: 300px;
    }
}
@media screen and (max-width:$smphone) {
    .circle{
        width: 1rem;
        height: 1rem;
    }
    #about-me{
        font-size: 23px;
    }
    .about-text{
        font-size: 14px;
    }
}
</style>
