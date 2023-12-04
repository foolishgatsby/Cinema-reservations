import React, { Component } from 'react'

export default class Seats extends Component {

    renderSeat = () => {
        return this.props.rowNum.danhSachGhe.map((seat, index) => {
            let classSeat = '';
            if (seat.daDat) {
                classSeat = 'gheDuocChon'
            }
            return <button className={`${classSeat} ghe`} key={index}>{seat.soGhe}</button>
        })
    }

    renderRowNum = () => {
        return this.props.rowNum.danhSachGhe.map((seat, index) => {
            return <button className='rowNumber' key={index}>{seat.soGhe}</button>
        })
    }

    renderARow = () => {
        if (this.props.number === 0) {
            return <div className='ms-4'>
                {this.props.rowNum.hang} {this.renderRowNum()}
            </div>
        } else {
            return <div>
                {this.props.rowNum.hang} {this.renderSeat()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light text-start ms-5 mt-1' style={{ fontSize: '25px' }}>
                {this.renderARow()}
            </div>
        )
    }
}
