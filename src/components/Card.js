import React from 'react';


const card = ({ name, email, id }) => {

    return (
        <div className='tc bg-light bg-lightest-blue dib br3 pa2 ma2 grow bw2 shadow-4'>
            {/* {`${process.env.PUBLIC_URL}/assets/img/img.png`}  */}
            <img src={`https://robohash.org/${id}?size=200x200&set=set2&bgset=bg1`} alt="Drink" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default card
