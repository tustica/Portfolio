<template>
    <div class="contact">
        <a target="blank" href="https://github.com/tustica"><img id="github" src="../assets/github.png" alt="github"></a>
        <a target="blank" href="https://www.linkedin.com/in/tim-ustica-3ba08816b/"><img id="linkedin" src="../assets/linkedin.png" alt="linkedin"></a>
        <h1>Get in Contact!</h1>
        <form id="form">
                <input class="content" type="text" name="name" v-model="name" placeholder="Name">
                <input class="content" type="text" name="email" v-model="email" placeholder="Email">
                <input class="content" type="text" name="company" v-model="company" placeholder="Company">
                <textarea class="content" cols="30" rows="5" name="message" v-model="message" placeholder="Message"></textarea>
                <input @click="sendEmail()" id="send" class="content" type="submit" value="Send">
        </form>
    </div> 
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_3gqTY4G8Rbn56e3Gd2uBT");
export default {
    name: 'Contact',
    data(){
        return {
            name: '',
            email: '',
            company: '',
            message: ''
        }
    },
    methods: {
        sendEmail(e){
            e.preventDefault();
            try {
                emailjs.sendForm('service_r3jggdq', 'template_hreugpi', e.target,
                'user_3gqTY4G8Rbn56e3Gd2uBT', {
                    name: this.name,
                    email: this.email,
                    company: this.company,
                    message: this.message
                })
                .then(function() {
                        console.log('SUCCESS!')
                })
            }
            catch(error) {
                console.log({error})
            }
            this.name = ''
            this.email = ''
            this.company = ''
            this.message = ''
        }
    }

}
</script>
<style lang='scss' scoped>
    $tablet: 768px;
    $phone: 425px;
    $mphone: 375px;
    $sphone: 320px;

    .contact{
        width: 100vw;
        height: 130vh;
        background-color: #313a89;
        h1{
            color: white;
            font-size: 60px;
            padding: 25px;
            margin: 0px;
            font-family: 'Montserrat', sans-serif;
        }
        #form{
            display: flex;
            flex-direction: column;
            padding: 5px 500px;

            .content{
                border-radius: 10px;
                border: none;
                font-size: 25px;
                padding: 10px;
                margin: 10px;
            }
            #send{
                width: 40%;
                cursor: pointer;
                align-self: center;
                color: white;
                font-size: 30px;
                font-family: 'Montserrat', sans-serif;
                background-color: rgb(206, 58, 0);
                transition: all .3s ease-in-out;
            }
            #send:hover{
                background-color: rgb(255, 136, 0);
            }
        }
    }
    #github, #linkedin{
        width: 150px;
        height: 150px;
        margin: 30px;
        border-radius: 70%;
        transition: .2s ease-in-out;
    }
    #github:hover, #linkedin:hover{
        background-color: rgb(206, 58, 0);
        cursor: pointer;
    }
    @media screen and (max-width: $tablet) {
        .contact{
            width: 100vw;
            height: 900px;
            overflow: hidden;
            position: absolute;
            top: 5550px;
            h1{
                padding: 40px;
            }
            #form{
                padding: 20px 200px;
            }
        }
    }
    @media screen and (max-width: $phone){
        .contact{
            width: 100vw;
            height: 1300px;
            overflow: hidden;
            position: absolute;
            top: 5650px;
            h1{
                padding: 40px;
            }
            #form{
                padding: 20px 70px;
                #send{
                    font-size: 23px;
                }
            }
        }
    }
    @media screen and (max-width: $mphone){
        .contact{
            width: 100vw;
            height: 1200px;
            overflow: hidden;
            position: absolute;
            top: 5700px;
            h1{
                padding: 40px;
            }
            #form{
                padding: 20px 50px;
                #send{
                    font-size: 23px;
                }
            }
        }
    }
</style>
