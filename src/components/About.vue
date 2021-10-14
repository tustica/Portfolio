<template>
    <div class="about">
        <div id="text-section" class="col">
            <h1 id="about-me">About Me</h1>
            <p class="about-text">I'm an aspiring software developer based in Dallas, TX. I enjoy creating exciting and engaging websites.</p>
            <p class="about-text">My goal is to be a well-rounded developer, profiecient in frontend, backend, and design.</p>
        </div>
        <div id="spinning" class="col">
            <div class="first-set">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="second-set">
                <div class="circle"></div>
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
        color: #313a89;
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
    }
    .about-text{
        width: 80%;
        font-family: 'Montserrat', sans-serif;
        font-size: 30px;
        padding-bottom: 30px;
        color: black;
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
    }
    #spinning{
        background-color: #313a89;
    }
    .first-set, .second-set{
        filter: url('#goo');
    }
.circle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: orangered;
    animation: anim 5s infinite ease-in-out;
}
.col > div .circle:last-child{
    animation-delay: -2.5s;
}
.col > div:last-child{
    transform: rotate(90deg)
}
.col > div{
    position: absolute;
    top: 90%;
    left: 75%;
}
@keyframes anim{
    0%{
        transform-origin: 50% -100%;
        transform: rotate(0deg);
    }
    50%{
        transform-origin: 50% -100%;
        transform: rotate(360deg);
    }
    50.1%{
        transform-origin: 50% 200%;
        transform: rotate(0deg);
    }
    100%{
        transform-origin: 50% 200%;
        transform: rotate(360deg)
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
