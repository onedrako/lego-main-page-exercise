import "../styles/main.css"
// import visibleModal from "./utils/visibleModal"
// import closeItemView from "./utils/closeItemView"

const modal = document.querySelector(".modal")  //Para llamar id, clase o selector  
// const button1 = document.querySelector("#button1")
const itemCard1 = document.getElementById("item-card-1")
const itemCard2 = document.getElementById("item-card-2")
const itemCard3 = document.getElementById("item-card-3")


window.onload = () =>{
    document.addEventListener("keyup", KeyboardEvent => verifyModal(KeyboardEvent))
    document.addEventListener("click", clickEvent => verifyModal(clickEvent))
} 

// const listenForEscape = (KeyboardEvent) => {
//     if(Keyboard){
//         closeItemView()
//     }
// }

function verifyModal(Event) {
    // console.log(Event)
    if(Event.target.className === "modal visible" || Event.keyCode === 27 ){
        closeItemView()
    } 
    switch (Event.target.alt){
        case "Spiderman":
            itemCard1.src = "https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png"
            itemCard1.alt = "Spiderman Item 1"
            itemCard2.src = "https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png"            
            itemCard2.alt = "Spiderman Item 2"
            itemCard3.src = "https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png"            
            itemCard3.alt = "Spiderman Item 3"
            // console.log("Spiderman")
            break
        case "Robin":
            itemCard1.src = "https://pngimage.net/wp-content/uploads/2018/06/robin-lego-png-1.png"
            itemCard1.alt = "Robin Item 1"
            itemCard2.src = "../assets/images/robin2.png"            
            itemCard2.alt = "Robin Item 2"
            itemCard3.src = "../assets/images/robin3.png"            
            itemCard3.alt = "Robin Item 3"
            // console.log(itemCard2)
        break
        case "Super Man":
            itemCard1.src = "../assets/images/superman2.png"            
            itemCard1.alt = "Super Man Item 1"
            itemCard2.src = "../assets/images/superman1.png"
            itemCard2.alt = "Super Man Item 2"
            itemCard3.src = "../assets/images/superman3.png"            
            itemCard3.alt = "Super Man Item 3"
            // console.log(itemCard3)   
        break 
    } 
}

//Base del código, asi tienen que ser, incluirles despues el cambio de src al html para cambiar las imagenes

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
