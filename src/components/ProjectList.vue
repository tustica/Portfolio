<template>
    <div class="project-list">
        <div class="header">
            <h1>Projects</h1>
            <p>see what I've built</p>
        </div>
        <div class="frontend">
            <div class="frontend-header">
                <h2>Frontend</h2>
            </div>
            <div class="frontend-projs">
                <Project @click.native="openBank()" @mouseover.native="mouseOver1()" @mouseleave.native="mouseLeave1()" class="project" proj_name="Bank App" :pic_source="require(`../assets/timbank.png`)" proj_url="https://timbank.netlify.app" button_name="Go to Site" />
                <transition name="fade">
                    <i v-show="active1" id="icon1" class="fas fa-search fa-4x"></i>
                </transition>
                <Project @click.native="openSeafood()" @mouseover.native="mouseOver2()" @mouseleave.native="mouseLeave2()" class="project" proj_name="Seafood Restaurant" :pic_source="require(`../assets/seafood.png`)" proj_url="https://sammyseafood.netlify.app/" button_name="Go to Site"/>
                <transition name="fade">
                    <i v-show="active2" id="icon2" class="fas fa-search fa-4x"></i>
                </transition>
                <Project @click.native="openFurniture()" @mouseover.native="mouseOver3()" @mouseleave.native="mouseLeave3()" class="project" proj_name="Room Decoration" :pic_source="require(`../assets/room.png`)" proj_url="https://timfurniture.netlify.app/" button_name="Go to Site"/>
                <transition name="fade">
                    <i v-show="active3" id="icon3" class="fas fa-search fa-4x"></i>
                </transition>
            </div>
        </div>
        <div class="backend">
            <div class="frontend-header">
                <h2>Backend</h2>
            </div>
            <div class="frontend-projs">
                <Project @click.native="openPoke()" @mouseover.native="mouseOver4()" @mouseleave.native="mouseLeave4()" class="project" proj_name="Pokedex" :pic_source="require(`../assets/pokemon.png`)" proj_url="https://github.com/tustica/PokemonAPI" button_name="Go to Github"/>
                <transition name="fade">
                    <i v-show="active4" id="icon4" class="fas fa-search fa-4x"></i>
                </transition>
                <Project @click.native="openBooks()" @mouseover.native="mouseOver5()" @mouseleave.native="mouseLeave5()" class="project" proj_name="Favorite Books" :pic_source="require(`../assets/favbooks.png`)" proj_url="https://github.com/tustica/Favorite_Books" button_name="Go to Github"/>
                <transition name="fade">
                    <i v-show="active5" id="icon5" class="fas fa-search fa-4x"></i>
                </transition>
                <Project @click.native="openFilter()" @mouseover.native="mouseOver6()" @mouseleave.native="mouseLeave6()" class="project" proj_name="List Filter" :pic_source="require(`../assets/listfilter.png`)" proj_url="https://github.com/tustica/RecordFilter" button_name="Go to Github"/>
                <transition name="fade">
                    <i v-show="active6" id="icon6" class="fas fa-search fa-4x"></i>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Project from './Project.vue'
import store from '@/store.js'
export default {
    name: 'ProjectList',
    components:{
        Project,
    },
    data(){
        return store.state,
        {
            active1: false, active2: false, active3: false, active4: false, active5: false,
            active6: false
        }
    },
    methods: {
        openBank(){
            store.changeBank()
        },
        openSeafood(){
            store.changeSeafood()
        },
        openFurniture(){
            store.changeFurniture()
        },
        openPoke(){
            store.changePoke()
        },
        openBooks(){
            store.changeBooks()
        },
        openFilter(){
            store.changeFilter()
        },
        mouseOver1(){
            this.active1 = true
        },
        mouseLeave1(){
            this.active1 = false
        },
        mouseOver2(){
            this.active2 = true
        },
        mouseLeave2(){
            this.active2 = false
        },
        mouseOver3(){
            this.active3 = true
        },
        mouseLeave3(){
            this.active3 = false
        },
        mouseOver4(){
            this.active4 = true
        },
        mouseLeave4(){
            this.active4 = false
        },
        mouseOver5(){
            this.active5 = true
        },
        mouseLeave5(){
            this.active5 = false
        },
        mouseOver6(){
            this.active6 = true
        },
        mouseLeave6(){
            this.active6 = false
        }

    }
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&family=Montserrat:wght@500&display=swap');
    $tablet: 768px;
    $phone: 425px;
    $mphone: 375px;
    $sphone: 320px;
    
    .project-list{
        width: 100vw;
        height: 250vh;
        overflow-y: hidden;
    }
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
        width: 100vw;
        background-image: url('../assets/building.jpg');
        background-attachment: fixed;
        background-size: cover;
        h1{
            color: white;
            font-size: 60px;
            font-family: 'Montserrat', sans-serif;
        }
        p{
            color: white;
            font-size: 30px;
            font-family: 'Montserrat', sans-serif;
        }
    }
    .frontend-header{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #313a89;
        margin: 0px;
        height: 8rem;
        h2{
            color: #ffffff;
            font-size: 50px;
            margin: 0px;
        }
    }
    .frontend-projs{
        display: flex;
        justify-content: space-around;
    }
    #icon1{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        width: 0%;
        height: 0%;
        top: 2550px;
        left: 200px;
    }
    #icon2{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        top: 2550px;
        left: 660px;
    }
    #icon3{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        top: 2550px;
        left: 1115px;
    }
    #icon4{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        width: 0%;
        height: 0%;
        top: 3230px;
        left: 200px;
    }
    #icon5{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        top: 3230px;
        left: 660px;
    }
    #icon6{
        cursor: pointer;
        position: absolute;
        color: #313a89;
        top: 3230px;
        left: 1115px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    @media screen and (max-width: $tablet) {
        .project-list{
            width: 100vw;
            height: 670vh;
            overflow-x: hidden;
            position: absolute;
            top: 1750px;
        }
        .frontend-projs{
            display: block;
            overflow-x: hidden;
        }
        .project{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    @media screen and (max-width: $phone){
        .project-list{
            position: absolute;
            height: 510vh;
            top: 1900px;
        }
    }
    @media screen and (max-width: $mphone){
        .project-list{
            position: absolute;
            height: 600vh;
            top: 1900px;
        }
    }
</style>
