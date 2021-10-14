<template>
    <div class="container">
        <div class="header">
            <h1>Skills</h1>
            <p>What I've learned so far</p>
        </div>
        <div class="skills">
            <div class="item">
                <h2>Languages</h2>
                <p>Python, Javascript, HTML, CSS</p>
            </div>
            <div class="item">
                <h2>Frameworks</h2>
                <p>Django</p>
            </div>
            <div class="item">
                <h2>Frontend</h2>
                <p>VueJS, Jquery, SCSS, Bootstrap</p>
            </div>
            <div class="item">
                <h2>Database</h2>
                <p>SQL Server, MySQL</p>
            </div>
            <div class="item">
                <h2>Design</h2>
                <p>Photoshop</p>
            </div>
            <div class="item">
                <h2>Other Concepts</h2>
                <p>AJAX, CRUD, RESTful</p>
            </div>
            <img id="sql" class="icons" src="../assets/sqlserver.png" alt="sqlserver">
            <img id="python" class="icons" src="../assets/python.png" alt="python">
            <img id="javascript" class="icons" src="../assets/javascript.jpg" alt="js">
            <img id="html" src="../assets/html.png" alt="html" class="icons">
            <img id="css" src="../assets/css.png" alt="css" class="icons">
            <img id="vue" src="../assets/vue.png" alt="vue" class="icons">
            <img id="jquery" src="../assets/jquery.png" alt="jquery" class="icons">
            <img id="photoshop" src="../assets/photoshop.png" alt="photoshop" class="icons">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills'
}
</script>

<style lang='scss' scoped>
    .container{
        width: 100vw;
        overflow: hidden;
    }
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        background-image: url('../assets/skills-pic2.jpg');
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
    .skills{
        padding: 40px 350px;
    }
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-size: 40px;
            color: #313a89;
            font-family: 'Montserrat', sans-serif;
        }
        p{
            font-size: 25px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
        }
    }
    .icons{
        width: 120px;
    }
    #python{
        position: absolute;
        top: 1200px;
        left: 1120px;
    }
    #vue{
        position: absolute;
        top: 1375px;
        left: 1130px;
        width: 100px;
    }
    #sql{
        position: absolute;
        top: 1200px;
        left: 85px;
    }
    #css{
        position: absolute;
        left: 85px;
        top: 1370px;
        // width: 155px;
    }
    #html{
        position: absolute;
        left: 98px;
        top: 1560px;
        width: 95px;
    }
    #javascript{
        position: absolute;
        left: 87px;
        top: 1740px;
    }
    #jquery{
        position: absolute;
        left: 1130px;
        top: 1530px;
    }
    #photoshop{
        position: absolute;
        top: 1720px;
        left: 1130px;
        width: 110px;
    }
    @media screen and (max-width:768px) {
        .header{
            position: absolute;
            top: 1100px
        }
        .skills{
            position: absolute;
            top: 1350px;
            padding: 10px 30px;
        }
        .icons{
            width: 80px;
        }
        #python{
            top: 30px;
            left: 650px;
        }
        #vue{
            top: 30px;
            left: 450px;
        }
        #sql{
            top: 150px;
            left: 465px;
        }
        #css{
            top: 150px;
            left: 650px;
        }
        #html{
            top: 280px;
            left: 470px;
            width: 70px;
        }
        #javascript{
            top: 280px;
            left: 650px;
        }
        #photoshop{
            position: absolute;
            top: 0px;
            left: -300px;
        }
        #jquery{
            position: absolute;
            top: 0px;
            left: -300px;
        }
        .item{
            h2{
                font-size: 25px;
            }
            p{
                font-size: 15px;
            }
        }
    }
    @media screen and (max-width:425px){
        .header{
            position: absolute;
            top: 890px;
        }
        .skills{
            position: absolute;
            top: 1150px;

        }
        .item{
            h2{
                text-align: left;
            }
            p{
                text-align: right;
            }
        }
        #python{
            top: 450px;
            left: 70px;
        }
        #vue{
            top: 450px;
            left: 250px;
        }
        #sql{
            top: 575px;
            left: 70px;
        }
        #css{
            top: 575px;
            left: 260px;
        }
        #html{
            top: 700px;
            left: 75px;
            width: 65px;
        }
        #javascript{
            top: 695px;
            left: 260px;
        }
        #photoshop{
            position: absolute;
            top: 0px;
            left: -300px;
        }
        #jquery{
            position: absolute;
            top: 0px;
            left: -300px;
        }
    }
    @media screen and (max-width:375px){
        #python{
            top: 515px;
            left: 45px;
        }
        #vue{
            top: 515px;
            left: 250px;
        }
        #sql{
            top: 615px;
            left: 45px;
        }
        #css{
            top: 615px;
            left: 260px;
        }
        #html{
            top: 715px;
            left: 50px;
            width: 65px;
        }
        #javascript{
            top: 710px;
            left: 260px;
        }
    }
    @media screen and (max-width:320px){
        .header{
            position: absolute;
            top: 890px;
            p{
                padding: 10px;
            }
        }
        .skills{
            position: absolute;
            top: 1200px;
        }
        .icons{
            width: 50px;
        }
        #python{
            top: 500px;
            left: 80px;
        }
        #sql{
            left: 80px;
        }
        #css{
            left: 205px;
        }
        #vue{
            top: 500px;
            left: 200px;
            width: 60px;
        }
        #html{
            top: 650px;
            left: 80px;
            width: 45px;
        }
        #javascript{
            top: 650px;
            left: 205px;
        }
    }
</style>
