import React, { Component } from 'react'
import '../css/BaiTapBookingTicket.css'
import SeatRows from './SeatRows'
import ReservationInfo from './ReservationInfo'

export default class Reservations extends Component {
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%' }} >
                <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'fixed', width: '100%', height: '100%' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='text-warning display-4 text-center'>BOOKING TICKETS</div>
                                <div className='mt-2 text-light' style={{ fontSize: '25px' }}>Screen</div>
                                <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className='screen'></div>
                                </div>
                                <SeatRows />
                            </div>
                            <div className='col-4'>
                                <div style={{fontSize: '35px'}} className='text-warning text-center mt-2'>YOUR RESERVATION</div>
                                <ReservationInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
