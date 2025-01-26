const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;



document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();
    const Input = document.querySelector(".inputName");
    const regex = / {2,}/g;
    const found = Input.value;
    const call = found.replaceAll(regex, " ").trim();

    document.getElementById("getIt").replaceChildren(call);

    const form = document.querySelector(".form");
    form.style.display = 'none';
    const backGround = document.querySelector(".backgrd");
    backGround.classList.add('class');
    const otherSec = document.querySelector(".page");
    otherSec.style.display = "flex";

    const about = document.querySelector('.abt');
    const aboutUs = document.querySelector('.aboutUs');
    const order = document.querySelector('.ord');
    const orderPage = document.querySelector('.order');
    const contact = document.querySelector('.cont');
    const contactPage = document.querySelector('.contactUs');
    const addressPage = document.querySelector('.addressForm');
    const secondForm = document.querySelector('#secondForm');
    const Biig = document.querySelector('.biig');
    const hardware = document.querySelector('.har');
    const hardwarePage =document.querySelector('.hardware');
    const software = document.querySelector('.sof');
    const softwarePage =document.querySelector('.software');
    const electronic = document.querySelector('.elec');
    const electronicPage = document.querySelector('.electronic');
    const button = document.querySelector('.chnge');
    const button2 = document.querySelector('.chnge2');
    const button3 = document.querySelector('.chnge3');
    const thirdForm = document.querySelector('.thirdForm');

    about.addEventListener('click', (event) => {
        event.preventDefault()

        aboutUs.style.display = 'block';
        hardwarePage.style.display = 'none';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        otherSec.style.display = 'none';
        orderPage.style.display = 'none';
        contactPage.style.display = 'none';
        addressPage.style.display = 'none';
        hardwarePage.style.display = 'none';
        about.classList.add('class');
        backGround.classList.remove('class');
        order.classList.remove('class');
        contact.classList.remove('class');
    })

    order.addEventListener('click', (event) => {
        event.preventDefault()

        orderPage.style.display = 'block';
        hardwarePage.style.display = 'none';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        otherSec.style.display = 'none';
        aboutUs.style.display = 'none';
        contactPage.style.display = 'none';
        addressPage.style.display = 'none';
        hardwarePage.style.display = 'none';
        order.classList.add('class');
        backGround.classList.remove('class');
        about.classList.remove('class');
        contact.classList.remove('class');
    })

    contact.addEventListener('click', (event) => {
        event.preventDefault()

        contactPage.style.display = 'block';
        hardwarePage.style.display = 'none';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        otherSec.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        hardwarePage.style.display = 'none';
        contact.classList.add('class');
        backGround.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    backGround.addEventListener('click', (event) => {
        event.preventDefault()

        otherSec.style.display = 'flex';
        hardwarePage.style.display = 'none';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        hardwarePage.style.display = 'none';
        backGround.classList.add('class');
        contact.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    Biig.addEventListener('click', (event) => {
        event.preventDefault()

        otherSec.style.display = 'flex';
        hardwarePage.style.display = 'none';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        hardwarePage.style.display = 'none';
        backGround.classList.add('class');
        contact.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    hardware.addEventListener('click', (event) => {
        event.preventDefault();

        hardwarePage.style.display = 'block';
        softwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    software.addEventListener('click', (event) => {
        event.preventDefault();

        softwarePage.style.display = 'block';
        hardwarePage.style.display = 'none';
        electronicPage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    electronic.addEventListener('click', (event) => {
        event.preventDefault();

        electronicPage.style.display = 'block';
        softwarePage.style.display = 'none';
        hardwarePage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.remove('class');
        about.classList.remove('class');
    })

    button.addEventListener('click', (event) => {
        event.preventDefault();

        orderPage.style.display = 'block';
        electronicPage.style.display = 'none';
        softwarePage.style.display = 'none';
        hardwarePage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.add('class');
        about.classList.remove('class');
    })

    button2.addEventListener('click', (event) => {
        event.preventDefault();

        orderPage.style.display = 'block';
        electronicPage.style.display = 'none';
        softwarePage.style.display = 'none';
        hardwarePage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.add('class');
        about.classList.remove('class');
    })

    button3.addEventListener('click', (event) => {
        event.preventDefault();

        orderPage.style.display = 'block';
        electronicPage.style.display = 'none';
        softwarePage.style.display = 'none';
        hardwarePage.style.display = 'none';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        addressPage.style.display = 'none';
        backGround.classList.remove('class');
        contact.classList.remove('class');
        order.classList.add('class');
        about.classList.remove('class');
    })

    secondForm.addEventListener('submit', (event) => {
        event.preventDefault();

        addressPage.style.display = 'block';
        otherSec.style.display = 'none';
        contactPage.style.display = 'none';
        aboutUs.style.display = 'none';
        orderPage.style.display = 'none';
        order.classList.add('class');
        backGround.classList.remove('class');
        contact.classList.remove('class');
        about.classList.remove('class');
    })

    thirdForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const modal = document.querySelector('.modal');

        modal.style.display = 'block';
    })

})

document.querySelector(".mailcheck").addEventListener('input', (event) => {
    const small = document.querySelector(".small");

    const mail = document.querySelector(".mailcheck");
    const value = mail.value;
    if (value.length) {
        small.classList.add('dsply');
    }else {
        small.classList.remove('dsply');
    }
    
})