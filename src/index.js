import "../styles/main.css"

const modal = document.querySelector(".modal")  //Para llamar id, clase o selector  
// const button1 = document.querySelector("#button1")  

const visibleModal = () =>{
    // console.log(modal)
    modal.classList.remove("hidden")
    modal.classList.add("visible")
}

const closeItemView = () =>{
    modal.classList.remove("visible")
    modal.classList.add("hidden")
}
