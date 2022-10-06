let contactBtn = document.querySelector('#contact')
let contactInfo = document.querySelector('#contactInfo')

const getContact = (e) => {
    e.preventDefault()

    const contactCard = document.createElement('section')
    contactCard.classList.add('contactCard')

        contactCard.innerHTML = `
        <ul><i class='fa fa-envelope-open'></i> info@jandjcap.com</ul>
        <ul><i class='fa fa-phone'></i> 801-503-XXXX</ul>
        <ul>Hours of Operation: M-F 9am-5pm MST</ul>
        <p>If you already have an account with us, please sign in to access our 24/7 customer service.</p>`
contactInfo.appendChild(contactCard)
}
contactBtn.addEventListener('click', getContact, {once:true})