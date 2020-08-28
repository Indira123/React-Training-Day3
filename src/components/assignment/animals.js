import React, { useState } from 'react';

const Animals = () => {
    const animalInfo = 'Animals are then broken down into two types: vertebrates and invertebrates. Animals with a backbone are vertebrates. Vertebrates belong to the phylum called Phylum Chordata. Vertebrates are further broken down into five classes: amphibians, birds, fish, mammals, and reptiles.'
    const [animalInformation, setAnimalInformation] = useState(animalInfo)
    return (
        <div className='container'>
            <h4>Animal Information</h4>
            <p>{animalInformation}</p>
        </div>
    )
}

export default Animals;