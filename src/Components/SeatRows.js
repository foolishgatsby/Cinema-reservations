import React, { Component } from 'react'
import Data from '../assets/data/danhSachGhe.json'
import Seats from './Seats'

export default class SeatsRows extends Component {

    renderSeats = () => {
        return Data.map((row, index) => {
            return <div key={index} className='ms-4'>
                <Seats rowNum={row} number={index} />
            </div>
        })
    }

    render() {
        return (
            <div>
                {this.renderSeats()}
            </div>
        )
    }
}
