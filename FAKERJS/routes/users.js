var express = require('express');
var router = express.Router();
var faker = require('faker'); 

allpoets = fakePersonArray(10);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(allpoets);
});

function createFakePerson()
{
  let randomName = faker.name.findName(); // Rowan Nikolaus
  let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  let randomCard = faker.helpers.createCard(); // random contact card containing many properties
  let person = {
    name:randomName,
    email:randomEmail,
    card: randomCard
  }
  return person;
}

function fakePersonArray(arrayLenght) 
{
  let array = [];
  for (let i = 0; i < arrayLenght; i++) {
    array.push(createFakePerson());
  }
  return array;
}

module.exports = router;