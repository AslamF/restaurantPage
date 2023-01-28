const initialPage = () => {
 
    let body = document.querySelector(".body");
    body.classList.add("active");
    let centerBox = document.createElement('div');
            centerBox.classList.add('centerBox');
        let motto = document.createElement('div');
            motto.classList.add('motto');
            motto.textContent = "Flavours of South Asia";
        let text = document.createElement('div');
            text.classList.add('text');
            text.textContent = "TRADITIONAL, RICH, AUTHENTIC SINCE 2022";


    body.appendChild(centerBox);
    centerBox.appendChild(motto);
    centerBox.appendChild(text);


    
    
}

export { initialPage};