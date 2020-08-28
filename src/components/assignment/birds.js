import React, { useState } from 'react';

const Birds = () => {
    const birdsInfo = 'Birds are vertebrates (animals with backbones) with wings and feathers. Most birds can fly, using powerful muscles to flap their wings. ... Birds bodies are covered with a light, tough layer of feathers and they have very light skeletons.Instead of teeth, they have hornlike beaks, or bills.'
    const [birdsInformation, setBirdsInformation] = useState(birdsInfo)
    return (
        <div className='container'>
            <h4>Birds Information</h4>
            <p>{birdsInformation}</p>
        </div>
    )
}

export default Birds;