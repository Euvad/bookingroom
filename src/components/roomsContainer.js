import React from 'react'
import RoomsFilter from './roomFilter'
import RoomsList from './roomList'
import { withRoomConsumer } from '../context'
import Loading from './loading'
function roomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default withRoomConsumer(roomsContainer)