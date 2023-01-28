const contact = () => {
let body = document.querySelector(".body");
    

    let contactPage = document.createElement("div");
        contactPage.classList.add("contactPage");
        body.classList.remove("active");
        
        

                let locationBox = document.createElement("div");
                locationBox.classList.add("box")
                    let boxName1 = document.createElement("div");
                        boxName1.classList.add("boxName")
                        boxName1.textContent = "-Location-"
                        locationBox.appendChild(boxName1);
                    let boxContent1 = document.createElement("div");
                        boxContent1.classList.add("boxContent")
                        boxContent1.textContent = "125 Wall Street, NYC"
                        locationBox.appendChild(boxContent1);
                contactPage.appendChild(locationBox);    
                
                let hoursBox = document.createElement("div");
                hoursBox.classList.add("box")
                    let hoursName = document.createElement("div");
                        hoursName.classList.add("boxName")
                        hoursName.textContent = "-Hours-"
                        hoursBox.appendChild(hoursName);
                    let hoursContent = document.createElement("div");
                        hoursContent.classList.add("boxContent")
                        hoursContent.textContent = "Mon - Fri | Sat | Sun | 12pm - 9pm"
                        hoursBox.appendChild(hoursContent);
                contactPage.appendChild(hoursBox);

                let contactBox = document.createElement("div");
                contactBox.classList.add("box")
                    let contactName = document.createElement("div");
                        contactName.classList.add("boxName");
                        contactName.textContent = "-Contact-";
                        contactBox.appendChild(contactName);
                    let contactContent = document.createElement("div");
                        contactContent.classList.add("boxContent");
                        contactContent.textContent = "(726) - 888 - 0983"
                        contactBox.appendChild(contactContent);
                contactPage.appendChild(contactBox);

        
        
       
        body.appendChild(contactPage);
}









export{ contact };