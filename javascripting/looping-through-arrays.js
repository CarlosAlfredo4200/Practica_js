const arrayFinal = []
const pets = ['cat', 'dog', 'rat']
for(i = 0; i < pets.length; i++){
    
   arrayFinal.push(pets[i] + 's')
}
console.log(arrayFinal)

//forma b
const pets = ['cat', 'dog', 'rat']

    for (let i = 0; i < pets.length; i++) {
      pets[i] = pets[i] + 's'
    }

    console.log(pets)