<template>
    <div class="container">
        <div class="header">
            <h1>Skills</h1>
            <p>What I've learned so far</p>
        </div>
        <div class="skills">
            <div class="leftcolumns">
                <img class="icons" src="../assets/sqlserver.png" alt="sqlserver">
                <img class="icons" src="../assets/css.png" alt="css">
                <img class="icons" src="../assets/html.png" alt="html">
                <img class="icons" src="../assets/javascript.jpg" alt="js">
            </div>
            <div class="skillnames">
                <h2>Languages:</h2>
                <h2>Frameworks:</h2>
                <h2>Frontend</h2>
                <h2>Database</h2>
                <h2>Design</h2>
                <h2>Other Concepts</h2>
            </div>
            <div class="technames">
                <p>Python, Javascript, HTML, CSS</p>
                <p>Django</p>
                <p>VueJS, Jquery, SCSS, Bootstrap</p>
                <p>SQL Server, MySQL</p>
                <p>Photoshop</p>
                <p>AJAX, CRUD, RESTful</p>
            </div>
            <div class="rightcolumns">
                <img class="icons" src="../assets/python.png" alt="python">
                <img class="icons" src="../assets/vue.png" alt="vue">
                <img class="icons" src="../assets/jquery.png" alt="jquery">
                <img class="icons" src="../assets/photoshop.png" alt="photoshop">
            </div>
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
        margin-bottom: 40px;
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
        display: flex;
        justify-content: space-around;
        height: 100vh;
        .skillnames{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .technames{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        h2{
            font-size: 40px;
            margin: 30px 0px;
            color: #313a89;
            font-family: 'Montserrat', sans-serif;
            height: 35px;
        }
        p{
            font-size: 30px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            height: 25px;
        }
    
        .leftcolumns{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .rightcolumns{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    .item{
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        // align-items: center;
    }
    .icons{
        width: 120px;
    }
    
    @media screen and (max-width: 1600px) {
        
    }
    @media screen and (max-width:768px) {
        .header{
            position: absolute;
            top: 1100px;
        }
        .skills{
            position: absolute;
            top: 1350px;
            padding: 10px 30px;
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
            height: 85%;
            overflow-x: hidden;
            h2{
                margin-top: 40px;
            font-size: 20px;
            }   
            p{
                // margin: 30px;
                font-size: 16px;
            }
        }
        .icons{
            width: 50px;
            height: 50px;
        }
    }
    @media screen and (max-width:375px){
        .skills h2{
            margin: 0px;
        }
        .icons{
            width: 45px;
            height: 45px;
        }
    }
    @media screen and (max-width:320px){
        .header{
            position: absolute;
            top: 850px;
            p{
                padding: 10px;
            }
        }
        .skills{
            position: absolute;
            padding: 10px;
            top: 1350px;
            left: 0px;
        }
        .icons{
            width: 40px;
            height: 40px;
        }
    }
</style>
