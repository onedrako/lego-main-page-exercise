import "../styles/main.css"
// import visibleModal from "./utils/visibleModal"
// import closeItemView from "./utils/closeItemView"

const modal = document.querySelector(".modal")  //Para llamar id, clase o selector  
// const button1 = document.querySelector("#button1")  

const closeItemView = () =>{
    modal.classList.remove("visible")
    modal.classList.add("hidden")
}

const visibleModal = () =>{
    // console.log(modal)
    modal.classList.remove("hidden")
    modal.classList.add("visible")
}

window.visibleModal = visibleModal;
window.closeItemView = closeItemView;
