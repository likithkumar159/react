import React from 'react'

const Kip_cards = (props) => {
    return (
        <div className='card2_group'>
            <div className={`card2_line ${props.cards_background_color}`}></div>
            <div className={`${props.cards_color}`}>
                <p className='card2_num'>{props.num}</p>
                <p className='card2_name'>WAITING FOR {props.name}</p>
            </div>
        </div>
    )
}

export default Kip_cards