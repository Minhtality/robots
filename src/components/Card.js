import React from 'react';


const card = ({ name, email, id }) => {

    return (
        <div className='tc bg-light dib br3 pa1 ma2 grow bw2 shadow-4'>

            <img src={`https://robohash.org/${id}?200x200`} alt="Drink" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default card
