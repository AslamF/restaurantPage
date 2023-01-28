function navBar() {
    let main = document.querySelector("#content");

    let nav= document.createElement("div");
        nav.classList.add("nav");

        let body = document.createElement('div');
        body.classList.add('body');

       


    main.appendChild(nav);    
    main.appendChild(body);
        let navOptions = document.createElement('div');
        navOptions.classList.add('navOptions');
    let option1 = document.createElement('button');
        
        option1.classList.add('option1');
        option1.textContent = "HOME";
    let option2 = document.createElement('button');
        option2.classList.add('option2');
        option2.textContent = "MENU";
    let option3 = document.createElement('button');
        option3.classList.add('option3');
        option3.textContent = "CONTACT";

        let logo = document.createElement('div');
        logo.classList.add('logo');
        logo.textContent = "DESI-EATS"

nav.appendChild(logo);
nav.appendChild(navOptions);
    navOptions.appendChild(option1);
    navOptions.appendChild(option2);
    navOptions.appendChild(option3);
}

export { navBar };