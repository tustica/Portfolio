<template>
  <div class="nav-wrap">
    <div class="header">
    <h1 id="name"><span id="tim">Tim</span> Ustica</h1>
    <p id="thankyou">Thanks for contacting me!</p>
    <div class="nav-links">
      <ul id="menu-items">
        <li @click="scrollAbout(), mobileMenu()" class="list-item">About</li>
        <li @click="scrollSkills(), mobileMenu()" class="list-item">Skills</li>
        <li @click="scrollProjects(), mobileMenu()" class="list-item">Projects</li>
        <li @click="scrollContact(), mobileMenu()" class="list-item">Contact</li>
      </ul>
      <div class="hamburger">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"/></svg>
      </div>
    </div>
    <Contact hidden />
  </div>
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
export default {
  name: 'Navbar',
  components: {
    Contact
  },
  props: {
    msg: String
  },
  methods: {
    scrollAbout(){
      window.scroll({top: 350, behavior:'smooth'})
    },
    scrollSkills(){
      window.scroll({top: 810, behavior: 'smooth'})
    },
    scrollProjects(){
      window.scroll({top: 1810, behavior: 'smooth'})
    },
    scrollContact(){
      window.scroll({top:6000, behavior: 'smooth'})
    },

    mobileMenu() {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector("#menu-items");
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    }
  },
  mounted(){
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("#menu-items");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    }
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&family=Montserrat:wght@500&display=swap');

#tim{
  color: #313a89;
}
#name{
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  margin-left:5%;
  color: #080810;
  @media screen and(max-width: 320px) {
    font-size: 35px;
  }
}
#thankyou{
  display: none;
}
.nav-wrap{
  position: fixed;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.452);
  z-index: 1;
  width: 100vw;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: white;
  transition: all .5s ease-in-out;
  animation: slide 1s, fade 1s;
  animation-fill-mode: forwards;
}
@keyframes slide{
  0%{transform: translateY(-70%);}
  100%{transform: translatey(0);}
}
@keyframes fade{
  0%{opacity: 0;}
  100%{opacity: 1;}
}
h3 {
  margin: 40px 0 0;
}
#menu-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5rem;
}
.hamburger{
  display: none;
}
li {
  display: inline-block;
  margin: 5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #080810;
  margin: 0px 20px 0px 20px;
  transition: all .2s ease-in-out
}
li::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color:#313a89;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
li:hover::after{
  transform: scaleX(1);
}

li:hover{
  transform: translatey(-20%);
  color: #313a89;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  #menu-items{
    position: fixed;
    z-index: -2;
    overflow: hidden;
    left: -100%;
    margin-top: 0px;
    padding: 0px;
    top: 4.4rem;
    flex-direction: column;
    background-color: rgb(236, 236, 236);
    opacity: .9;
    width: 100%;
    height: 500px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }
  #menu-items.active {
    left: 0;
  }
  .list-item {
    margin: 2.5rem 0;
  }
  .hamburger{
    display: block;
    margin: 2em;
  }
}

</style>
