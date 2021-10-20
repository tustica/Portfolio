<template>
    <div class="intro">
        <div id="pic-container" class="col">
            <div class="hideborder">
                <div id="pic-border"></div>
            </div>
            <img id="lame-pic" src="../assets/lame-pic.jpg" alt="lamepic">
        </div>
        <div id="rightside" class="col">
            <div class="slide-wrapper">
                <div class="slide">
                    <div class="slide-text1">HTML</div>
                    <div class="slide-text2">CSS</div>
                    <div class="slide-text3">SQL</div>
                    <div class="slide-text4">VueJS</div>
                    <div class="slide-text5">Python</div>
                </div>
                <h1 id="dev">Developer</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro'
}
</script>
<style lang='scss' scoped>
$desktop: 1200px;
$laptop: 992px;
$tablet: 768px;
$phone:425px;
$mphone: 375px;
$smphone: 320px;

.intro{
    width: 100vw;
    // height: 65vh;
    overflow: auto;
    background-image:url('../assets/stars.jpg');
    // background-size: cover;
    background-attachment: fixed;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
}

.col{
    width: 50%;
    height: 23rem;
    float: left;
}
#lame-pic{
    position: absolute;
    top: 105px;
    left: 190px;
    width: 300px;
    border-radius: 50%;
    // border: 5px solid rgba(255, 255, 255, 0.109);
}
#pic-border{
    position: absolute;
    box-shadow: 0 0 15px #313a89, inset 0 0 20px;
    top: 98px;
    left: 182px;
    border-radius: 100%;
    width: 315px;
    height: 315px;
    animation: pulse 3s infinite ease-in-out;
}
@keyframes pulse{
    0%{box-shadow: 0 0 15px #313a89, inset 0 0 20px;}
    70%{box-shadow: 0 0 40px #99a0ee, inset 0 0 20px;}
    100%{box-shadow: 0 0 15px #313a89, inset 0 0 20px;}
}
.hideborder{
    height: 50px;
    overflow: hidden;
}
#rightside{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: white;
    padding-top: 45px;
    transition: all ease-in-out 1s;
    animation: rightslide .7s ease-in-out, fade-in 1s ease-in-out;
}
@keyframes rightslide{
    0%{transform: translateX(20%);}
    100%{transform: translateX(0);}
}
@keyframes fade-in{
    0%{opacity: 0;}
    100%{opacity: 1;}
}
.slide-wrapper{
    text-align: left;
    
}
.slide{
    height: 62px;
    overflow: hidden;
}
.slide div{
    height: 40px;
    color:white;
    padding: 10px;
    font-size: 55px;
}
#dev{
    margin: -20px 0px;
    padding: 0px 10px;
    font-size: 70px;
}
.slide-text1{
    animation: slide 15s ease-in-out infinite;
}
@keyframes slide {
    0%{margin-top: -320px;}
    5%{margin-top: -255px;}
    18%{margin-top: -255px;}
    23%{margin-top: -195px;}
    38%{margin-top: -195px;}
    43%{margin-top: -135px;}
    56%{margin-top: -135px;}
    61%{margin-top: -75px;}
    74%{margin-top: -75px;}
    79%{margin-top: -10px}
    95%{margin-top: -10px;}
    100%{margin-top: 55px;}
}
@media screen and (max-width: $tablet) {
    .intro{
        position: absolute;
        z-index: -3;
        padding-bottom: 25px;
    }
    #pic-container, #rightside{
        width: 100%;
        height: 20rem;
    }
    #lame-pic{
        z-index: -1;
        left: 250px;
        top: 100px;
        width: 250px;
    }
    #pic-border{
        top: 95px;
        left: 245px;
        width: 260px;
        height: 260px;
    }
}
@media screen and (max-width: $phone) {
    #lame-pic{
        width: 200px;
        left: 115px;
    }
    #pic-container, #rightside{
        width: 100%;
        height: 15rem;
    }
    .slide div{
        font-size: 45px;
    }
    #dev{
        font-size: 60px;
    }
    #pic-border{
        top: 95px;
        left: 110px;
        width: 210px;
        height: 210px;
    }
}
@media screen and (max-width: $mphone) {
    #lame-pic{
        width: 200px;
        left: 85px;
    }
    #pic-border{
        top: 95px;
        left: 80px;
        width: 210px;
        height: 210px;
    }
}
@media screen and (max-width: $smphone) {
    #lame-pic{
        width: 200px;
        left: 60px;
    }
    #pic-border{
        top: 95px;
        left: 55px;
        width: 210px;
        height: 210px;
    }
    .slide div{
        font-size: 40px;
    }
    #dev{
        font-size: 55px;
    }
}

</style>
