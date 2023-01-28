import samosa from '../images/samosa.jpeg';
import guppa from '../images/gol_Gappa.jpg';
import chaat from '../images/chana_chaat.jpg';

import palak from '../images/palak.jpg';
import biryani from '../images/biryani.jpg';
import haleem from '../images/haleem.jpg';
import lamb from '../images/lambChops.jpg';
import qeema from '../images/qeema.jpeg';
import chicken from '../images/tandooriChicken.jpeg'

import kulfi from  '../images/kulfi.jpg';
import kheer from '../images/kheer.jpg';
import gulab from '../images/gulabJaman.jpg';










const menu = () => {

let body = document.querySelector(".body");
    body.classList.remove("active");
let menuPage = document.createElement("div")
    menuPage.classList.add("menuPage");
    

        let appetizerContainer = document.createElement("div");
            appetizerContainer.classList.add("appetizerContainer");
            
            let containerName = document.createElement("div");
                containerName.classList.add("containerName");
                containerName.textContent = "APPETIZER";
            let hr = document.createElement("hr");
            hr.setAttribute("width", "500px")
            hr.classList.add("hr");

            let containerContent = document.createElement("div");
                containerContent.classList.add("containerContent");
                    const itemContainer = document.createElement("div");
                    itemContainer.classList.add("itemContainer");
                        const img = document.createElement("img");
                        img.src = samosa;
                        itemContainer.appendChild(img);

                        const name = document.createElement("h1");
                        name.textContent = "-SAMOSA-";
                        itemContainer.appendChild(name);

                        const price = document.createElement("h3");
                        price.textContent = "$5.00";
                        itemContainer.appendChild(price);
                    containerContent.appendChild(itemContainer);
            
                    let containerContent2 = document.createElement("div");
                    containerContent2.classList.add("containerContent");
                        const itemContainer2 = document.createElement("div");
                        itemContainer2.classList.add("itemContainer");
                            const img2 = document.createElement("img");
                            img2.src = chaat;
                            itemContainer2.appendChild(img2);
    
                            const name2 = document.createElement("h1");
                            name2.textContent = "-CHANA CHAAT-";
                            itemContainer2.appendChild(name2);
    
                            const price2 = document.createElement("h3");
                            price2.textContent = "$5.00";
                            itemContainer2.appendChild(price2);
                        containerContent.appendChild(itemContainer2);

                        let containerContent3 = document.createElement("div");
                        containerContent3.classList.add("containerContent");
                            const itemContainer3 = document.createElement("div");
                            itemContainer3.classList.add("itemContainer");
                                const img3 = document.createElement("img");
                                img3.src = guppa;
                                itemContainer3.appendChild(img3);
        
                                const name3 = document.createElement("h1");
                                name3.textContent = "-GOL GAPPA-";
                                itemContainer3.appendChild(name3);
        
                                const price3 = document.createElement("h3");
                                price3.textContent = "$5.00";
                                itemContainer3.appendChild(price3);
                            containerContent.appendChild(itemContainer3);
    
            
                    appetizerContainer.appendChild(containerName);
                    appetizerContainer.appendChild(hr);
                    appetizerContainer.appendChild(containerContent);

        menuPage.appendChild(appetizerContainer);






        let entreeContainer = document.createElement("div");
            entreeContainer.classList.add("appetizerContainer");
        
        let containerName2 = document.createElement("div");
            containerName2.classList.add("containerName");
            containerName2.textContent = "ENTREE";
        
        let hr2 = document.createElement("hr");
            hr2.setAttribute("width", "500px")
            hr2.classList.add("hr");

        let entreeContainerContent = document.createElement("div");
            entreeContainerContent.classList.add("containerContent");
                const entreeItem = document.createElement("div");
                    entreeItem.classList.add("itemContainer");
                    const entreeImg1 = document.createElement("img");
                    entreeImg1.src = biryani;
                    entreeItem.appendChild(entreeImg1);

                    const entreeName1 = document.createElement("h1");
                    entreeName1.textContent = "-BIRYANI-";
                    entreeItem.appendChild(entreeName1);

                    const entreePrice = document.createElement("h3");
                    entreePrice.textContent = "$15.00";
                    entreeItem.appendChild(entreePrice);

                entreeContainerContent.appendChild(entreeItem);

                
            
                let entreeContainerContent2 = document.createElement("div");
                    entreeContainerContent2.classList.add("containerContent");
                    const entreeItem2 = document.createElement("div");
                        entreeItem2.classList.add("itemContainer");
                        const entreeImg2 = document.createElement("img");
                        entreeImg2.src = palak;
                        entreeItem2.appendChild(entreeImg2);
    
                        const entreeName2 = document.createElement("h1");
                        entreeName2.textContent = "-PALAK-";
                        entreeItem2.appendChild(entreeName2);
    
                        const entreePrice2 = document.createElement("h3");
                        entreePrice2.textContent = "$10.00";
                        entreeItem2.appendChild(entreePrice2);
    
                    entreeContainerContent.appendChild(entreeItem2);



                    let entreeContainerContent3 = document.createElement("div");
                    entreeContainerContent3.classList.add("containerContent");
                    const entreeItem3 = document.createElement("div");
                        entreeItem3.classList.add("itemContainer");
                        const entreeImg3 = document.createElement("img");
                        entreeImg3.src = qeema;
                        entreeItem3.appendChild(entreeImg3);
    
                        const entreeName3 = document.createElement("h1");
                        entreeName3.textContent = "-QEEMA-";
                        entreeItem3.appendChild(entreeName3);
    
                        const entreePrice3 = document.createElement("h3");
                        entreePrice3.textContent = "$12.00";
                        entreeItem3.appendChild(entreePrice3);
    
                    entreeContainerContent.appendChild(entreeItem3);

                    let entreeContainerContent4 = document.createElement("div");
                    entreeContainerContent4.classList.add("containerContent");
                    const entreeItem4 = document.createElement("div");
                        entreeItem4.classList.add("itemContainer");
                        const entreeImg4 = document.createElement("img");
                        entreeImg4.src = lamb;
                        entreeItem4.appendChild(entreeImg4);
    
                        const entreeName4 = document.createElement("h1");
                        entreeName4.textContent = "-LAMB CHOPS-";
                        entreeItem4.appendChild(entreeName4);
    
                        const entreePrice4 = document.createElement("h3");
                        entreePrice4.textContent = "$18.00";
                        entreeItem4.appendChild(entreePrice4);
    
                    entreeContainerContent.appendChild(entreeItem4);

                    let entreeContainerContent5 = document.createElement("div");
                    entreeContainerContent5.classList.add("containerContent");
                    const entreeItem5 = document.createElement("div");
                        entreeItem5.classList.add("itemContainer");
                        const entreeImg5 = document.createElement("img");
                        entreeImg5.src = chicken;
                        entreeItem5.appendChild(entreeImg5);
    
                        const entreeName5 = document.createElement("h1");
                        entreeName5.textContent = "-CHICKEN-";
                        entreeItem5.appendChild(entreeName5);
    
                        const entreePrice5 = document.createElement("h3");
                        entreePrice5.textContent = "$13.00";
                        entreeItem5.appendChild(entreePrice5);
    
                    entreeContainerContent.appendChild(entreeItem5);

                    let entreeContainerContent6 = document.createElement("div");
                    entreeContainerContent6.classList.add("containerContent");
                    const entreeItem6 = document.createElement("div");
                        entreeItem6.classList.add("itemContainer");
                        const entreeImg6 = document.createElement("img");
                        entreeImg6.src = haleem;
                        entreeItem6.appendChild(entreeImg6);
    
                        const entreeName6 = document.createElement("h1");
                        entreeName6.textContent = "-HALEEM-";
                        entreeItem6.appendChild(entreeName6);
    
                        const entreePrice6 = document.createElement("h3");
                        entreePrice6.textContent = "$12.00";
                        entreeItem6.appendChild(entreePrice6);
    
                    entreeContainerContent.appendChild(entreeItem6);
    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    entreeContainer.appendChild(containerName2);
                    entreeContainer.appendChild(hr2);
                    entreeContainer.appendChild(entreeContainerContent);
        
                    menuPage.appendChild(entreeContainer);





            let dessertContainer = document.createElement("div");
            dessertContainer.classList.add("appetizerContainer");
            
            let dessertContainerName = document.createElement("div");
                dessertContainerName.classList.add("containerName");
                dessertContainerName.textContent = "DESSERT";
            let hr3 = document.createElement("hr");
            hr3.setAttribute("width", "500px")
            hr3.classList.add("hr");

            let dessertContent = document.createElement("div");
                dessertContent.classList.add("containerContent");
                    const dessertItem1 = document.createElement("div");
                    dessertItem1.classList.add("itemContainer");
                        const dessertImg1 = document.createElement("img");
                        dessertImg1.src = gulab;
                        dessertItem1.appendChild(dessertImg1);

                        const dessertName1 = document.createElement("h1");
                        dessertName1.textContent = "-GULAB JAMUN-";
                        dessertItem1.appendChild(dessertName1);

                        const dessertPrice1 = document.createElement("h3");
                        dessertPrice1.textContent = "$2.00";
                        dessertItem1.appendChild(dessertPrice1);
                    dessertContent.appendChild(dessertItem1);
                    
                    const dessertItem2 = document.createElement("div");
                    dessertItem2.classList.add("itemContainer");
                        const dessertImg2 = document.createElement("img");
                        dessertImg2.src = kulfi;
                        dessertItem2.appendChild(dessertImg2);

                        const dessertName2 = document.createElement("h1");
                        dessertName2.textContent = "-KULFI-";
                        dessertItem2.appendChild(dessertName2);

                        const dessertPrice2 = document.createElement("h3");
                        dessertPrice2.textContent = "$5.00";
                        dessertItem2.appendChild(dessertPrice2);
                    dessertContent.appendChild(dessertItem2);

                    const dessertItem3 = document.createElement("div");
                    dessertItem3.classList.add("itemContainer");
                        const dessertImg3 = document.createElement("img");
                        dessertImg3.src = kheer;
                        dessertItem3.appendChild(dessertImg3);

                        const dessertName3 = document.createElement("h1");
                        dessertName3.textContent = "-KHEER-";
                        dessertItem3.appendChild(dessertName3);

                        const dessertPrice3 = document.createElement("h3");
                        dessertPrice3.textContent = "$5.00";
                        dessertItem3.appendChild(dessertPrice3);
                    dessertContent.appendChild(dessertItem3);
            
                
                    dessertContainer.appendChild(dessertContainerName);
                    dessertContainer.appendChild(hr3);
                    dessertContainer.appendChild(dessertContent);

                    menuPage.appendChild(dessertContainer);


body.appendChild(menuPage);
    




















}









export{menu};