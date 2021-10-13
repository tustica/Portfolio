export default {
    state: {
        bankModal: false,
        seafoodModal: false,
        furnitureModal: false,
        pokeModal: false,
        booksModal: false, 
        filterModal: false
    },
    changeBank(){
        this.state.bankModal = true
    },
    changeSeafood(){
        this.state.seafoodModal = true
    },
    changeFurniture(){
        this.state.furnitureModal = true
    },
    changePoke(){
        this.state.pokeModal = true
    },
    changeBooks(){
        this.state.booksModal = true
    },
    changeFilter(){
        this.state.filterModal = true
    },
    turnModalsOff(){
        this.state.bankModal = false
        this.state.seafoodModal = false
        this.state.furnitureModal = false
        this.state.pokeModal = false
        this.state.booksModal = false
        this.state.filterModal = false
    }

}