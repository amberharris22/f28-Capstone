const baseURL = 'http://localhost:5050'

let showTrucks = document.querySelector('#truckDisplay')
let addBtn = document.querySelector('#addTruck')



const displayTrucks = (arr) => {
    for (let i =0; i<arr.length; i++){
        createTruckCard(arr[i])
    }
}

const addTruck = (e) => {
    e.preventDefault()

    let brandInput = document.querySelector('#brand')
    let yearInput = document.querySelector('#year')
    let priceInput = document.querySelector('#price')
    let colorInput = document.querySelector('#color')
    let picInput = document.querySelector('#pic')

    let newTruck = {
        brand: brandInput.value,
        year: yearInput.value,
        color: colorInput.value,
        price: priceInput.value,
        picture: picInput.value
    }

    axios.post(`${baseURL}/addTruck`, newTruck)
        .then((res) => {
            showTrucks.innerHTML = ''
            displayTrucks(res.data)

            brandInput.value = ''
            yearInput.value = ''
            priceInput.value = ''
            colorInput.value = ''
            picInput.value = ''
        })
        .catch((err) => {
            console.log(err)
        })
}

const createTruckCard = (truck) => {
    const truckCard = document.createElement('section')
    truckCard.classList.add('truck-card')

    truckCard.innerHTML = `
        <img src= ${truck.picture} alt='truck image' class = "truck-img"/>
        <section id="facts">
        <h4>Brand: ${truck.brand}</h4>
        <h4>Year: ${truck.year}</h4>
        <h4>Price: $ ${truck.price}</h4>
        <h4>Color: ${truck.color}</h4>
        </section>
        <section class="likes">  
            <button onclick = "updateTruck(${truck.id}, 'dislike')">-</button>
            <h4> ${truck.likes} likes </h4>
            <button onclick = "updateTruck(${truck.id}, 'like')">+</button>
        </section>
        <button id="delete" onclick="deleteTruck(${truck.id})">Not Interested</button>
    `
    showTrucks.appendChild(truckCard)
}


const getAllTrucks = () => {
    axios.get(`${baseURL}/getTrucks`)
        .then((res) => {
            displayTrucks(res.data)
            // console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteTruck = (id) =>{
    axios.delete(`${baseURL}/deleteTruck/${id}`)
    .then((res) => {
        showTrucks.innerHTML = ''
        displayTrucks(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

const updateTruck = (id, type) => {
    axios.put(`${baseURL}/updateLikes/${id}`, {type})
    .then((res) => {
        showTrucks.innerHTML = ''
        displayTrucks(res.data)

        
    })
    .catch((err) => {
        console.log(err)
    })
}

addBtn.addEventListener('click', addTruck)

getAllTrucks()

