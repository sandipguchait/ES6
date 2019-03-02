var cars = [
    { model: 'volvo', price: '$700'},
{ model: 'ford' , price: '$2000'}
];

var prices = cars.map(function(car){
return car.price;
})

prices;