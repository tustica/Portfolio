<template>
    <div class="project">
        <h1>{{proj_name}}</h1>
        <img class="image" :src=pic_source alt="picture">
        <a target="blank" :href=proj_url><button id="goto">{{button_name}}</button></a>
    </div> 
</template>
<script>
export default {
    name: 'Project',
    props: {
        pic_source: String,
        proj_name: String,
        proj_url: String,
        button_name: String
    }
}
</script>

<style lang='scss' scoped>  
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&family=Montserrat:wght@500&display=swap');

    .project{
        margin: 30px;
        img{
            border-radius: 50%;
            width: 20rem;
            height: 20rem;
            border: 3px solid #00000065;
            transition: all .3s ease-in-out;
        }
        img:hover{
            border-radius: 10%;
            opacity: .5;
            cursor: pointer;
            filter: saturate(3);
            
        }
        h1{
            color: #313a89;
            font-size: 35px;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
        }
        #goto{
            background-color: #313a89;
            border-radius: 25px;
            color: white;
            font-size: 18px;
            width: 130px;
            height: 50px;
            margin-top: 20px;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
            transition: .2s ease-in-out;
        }
        #goto:hover{
            cursor: pointer;
            background-color: rgba(0, 0, 255, 0.575);
            animation: shake .3s linear;
        }
    }
    @keyframes shake{
        0%{transform: rotate(0deg);}
        33%{transform: rotate(10deg);}
        66%{transform: rotate(-8deg);}
        100%{transform: rotate(0deg);}
    }

    $tablet: 768px;
    $phone: 425px;
    $mphone: 375px;
    $sphone: 320px;
    @media screen and (max-width: $sphone) {
        .project img{
            width: 18rem;
            height: 18rem;
        }

    }
</style>
