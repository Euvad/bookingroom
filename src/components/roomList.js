import React from 'react'
import Room from './room'
export default function roomList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className='empty-search'><h3>Désolé ! Aucune chambre trouvée.</h3></div>
        )
    }
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
    )
}
