<template>
    <div id="moreinfo" class="moreinfo">
        <div class="modal-container"></div>
        <div class="top">
            <h1>{{name}}</h1>
            <h3>Project Background:</h3><p>{{description}}</p>
                <p>The key takeaways from this project were:</p>
                <ul>
                    <li>{{takeaway1}}</li>
                    <li>{{takeaway2}}</li>
                </ul>
                <p>{{final}}</p>
                <p>{{disclaimer}}</p>
        <img @click="modalOff()" id="xout" src="../assets/xout.png" alt="xout">
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
export default {
    name: "MoreInfo",
    props: {
        name: String,
        description: String,
        takeaway1: String,
        takeaway2: String,
        final: String,
        disclaimer: String
    },
    data(){
        return store.state
    },
    methods: {
        modalOff(){
            store.turnModalsOff()
        }
    }
}
</script>

<style lang='scss' scoped>
    $tablet: 768px;
    $phone: 425px;
    $mphone: 375px;
    $sphone: 320px;

    .moreinfo{
        animation: fade .5s ease-in-out;
    }
    .modal-container{
        position: absolute;
        top: 0;
        width: 100%;
        height: 500vh;
    }
    .modal-container:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 550vh;
        background-color: black;
        opacity: .5;
        transition: all .5s ease-in-out;
    }
    .top{
        display: flex;
        flex-direction: column;
        padding: 50px;
        text-align: left;
        position: absolute;
        top: 2350px;
        left: 350px;
        width: 550px;
        height: 450px;
        background: radial-gradient(#313a89, #6871c2) ;
        box-shadow: 5px 5px 30px rgb(0, 0, 0);
        border-radius: 10%;
        h1, p, h3, ul{
            color: white;
            font-family: 'Montserrat', sans-serif;
        }
}
    @keyframes fade{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }

    #xout{
        cursor: pointer;
        position: relative;
        top: -480px;
        left: 500px;
        width: 50px;
    }
    @media screen and (max-width: $tablet) {
        .top{
            width:500px;
            left: 100px;
            overflow-x: hidden;
        }
        #xout{
            left: 450px;
        }
        .modal-container:after{
            height: 680vh;
        }
    }
    @media screen and (max-width: $phone) {
        .top{
            width:250px;
            left: 40px;
            overflow-x: hidden;
        }
        #xout{
            top: -630px;
            left: 220px;
        }
        .modal-container:after{
            height: 700vh;
        }
    }
    @media screen and (max-width: $mphone) {
        .top{
            width:240px;
            left: 15px;
            overflow-x: hidden;
        }
    }
    @media screen and (max-width: $sphone) {
        .top{
            width: 190px;
            left: 10px;
            overflow-x: hidden;
        }
        #xout{
            top: -750px;
            left: 180px;
        }
        
    }
</style>