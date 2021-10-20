<template>
  <div id="app">
    <NavBar/>
    <Intro/>
    <About/>
    <Skills/>
    <ProjectList/>
    <!-- modals -->
    <MoreInfo name="Bank App" takeaway1="Positioning" takeaway2="Z-index" final="I used absolute positioning to place different items in the proper place, and I used z-index to create the overlapping elements effect." disclaimer="(The vectors were given to me by Frontend Mentor)" description="In this project, I created a landing page to showcase a banking app. This was one the first pages I created with Vue." v-if='bankModal'/>
    <MoreInfo name="Sammy Seafood" takeaway1="Lifecycle Methods" takeaway2="API's in Vue" description="On this website, I created the design and landing page for a seafood restaurant. This site is Javascript heavy with buttons, shading, and a dynamic header." final="The most challenging part of this project was incorporating the Google Places API." v-if="seafoodModal"/>
    <MoreInfo name="Room Decoration" takeaway1="Managing State in Vue" takeaway2="Clean Animations" description="This is a simple yet powerful landing page showcasing a furtniture/decorating business." disclaimer="(The vectors were given to me by Frontend Mentor)" final="I used a custom store(i.e. not VueX) to manage the application variables and clearly illustrate my knowledge of state" v-if="furnitureModal"/>
    <MoreInfo name="Pokedex" takeaway1="Making AJAX calls" takeaway2="Passing varialbes to the template" description="This was a fun project. I learned AJAX to make calls to the Pokemon API and display Pokemon information on click." final="The challenge of this project was figuring out how to traverse a Javascript object to get what I needed. And after that, posting it to the template on click." v-if="pokeModal"/>
    <MoreInfo name="Favorite Books" takeaway1="Authentication" takeaway2="Working with Models" description="This is a functioning full-stack application. Everything from login Auth to submitting forms and hanlding user interaction." final="There were many difficult parts of this project. Building the error messaging and creating the favoriting functionality were two of the hardest things." v-if="booksModal"/>
    <MoreInfo name="List Filter" takeaway1="Serializing and Parsing JSON" takeaway2="Intermediate Javascript" description="This project allows you to add records to a list, and filter that list by typing in a name or entering a date range." final="I've included this project because it shows a number of different technologies and skills in action." v-if="filterModal"/>
    <Contact/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import ProjectList from './components/ProjectList.vue'
import MoreInfo from './components/MoreInfo'
import Contact from './components/Contact.vue'
import store from '@/store.js'

export default {
  name: 'App',
  components: {
    NavBar,
    Intro,
    About,
    Skills,
    ProjectList,
    MoreInfo,
    Contact
  },
  data(){
    return store.state
  },
  updated(){
    if(this.bankModal ==true || this.seafoodModal == true || this.furnitureModal == true
      || this.pokeModal ==true || this.booksModal ==true || this.filterModal ==true){
        window.scrollTo({top: 2270, behavior: 'smooth'});
      }
  },
  mounted(){
    var bruh = document.querySelector('#app')
    console.log(bruh)
    bruh.classList.add('lockScroll')
  }
}
</script>

<style>
html, body{
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
.lockScroll{
  overflow-y: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
