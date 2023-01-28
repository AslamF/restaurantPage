import "./styles/home.css";
import {menu} from "./pages/menu";
import {contact} from "./pages/contact";
import { initialPage } from "./pages/initialPage";
import { navBar } from "./pages/navbar";



(function(){
navBar();
initialPage()


let homeButton = document.querySelector(".option1");
let menuButton = document.querySelector(".option2");
let contactButton = document.querySelector(".option3");


homeButton.addEventListener("click", ()=>{
    clearContent();
    initialPage();
})


menuButton.addEventListener("click", ()=>{
    clearContent();
    menu();
})

contactButton.addEventListener("click", ()=>{
    clearContent();
    contact();
})


function clearContent() {
    const contentBox = document.querySelector(".body");
    contentBox.replaceChildren();
    return;
}
})();

