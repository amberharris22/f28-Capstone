const trucks = require('./db.json')
let truckId = 4

module.exports = {
    getTrucks: (req, res) => {
        res.status(200).send(trucks)
    },

    addTruck: (req, res) => {
        const {brand, year, color, price, picture} = req.body
        // console.log(req.body)
        let newTruckObj = {
            id: truckId,
            brand: brand,
            year: +year,
            color: color,
            price: price,
            picture: picture,
            likes: 0
        }
        // console.log(newTruckObj)
        trucks.push(newTruckObj)
        truckId++

        res.status(200).send(trucks)
    },
    deleteTruck: (req, res) => {
        const index = trucks.findIndex(elem => elem.id === +req.params.id)
        // console.log(index)
        // console.log(req.params.id)
        trucks.splice(index, 1)

        res.status(200).send(trucks)
    },

    updateLikes: (req, res) => {
        const index= trucks.findIndex(elem => elem.id === +req.params.id)
        const {type} = req.body;

        if(type === 'like'){
            trucks[index].likes++
            res.status(200).send(trucks)
        }else if (type === 'dislike' && trucks[index].likes > 0){
            trucks[index].likes--
            res.status(200).send(trucks)
        }else{
            res.status(400).send('likes is already at 0')}
    }
}