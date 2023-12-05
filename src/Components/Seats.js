import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseSeatAction } from '../redux/actions/BookingTicketActions';

class Seats extends Component {

    renderSeat = () => {
        return this.props.rowNum.danhSachGhe.map((seat, index) => {
            let classSeat = '';
            let disabled = '';
            // Trang thai ghe da dat
            if (seat.daDat) {
                classSeat = 'gheDuocChon';
                disabled = 'disabled';
            }

            // Trang thai ghe dang dat
            let indexChoosingSeat = this.props.lstChoosingSeat.findIndex(item => item.soGhe === seat.soGhe);
            if (indexChoosingSeat !== -1) {
                classSeat = 'gheDangChon'
            }

            // Trang thai ghe chua dat
            return <button disabled={`${disabled}`} className={`${classSeat} ghe`} key={index} onClick={() => {
                this.props.chooseSeat(seat)
            }}>{seat.soGhe}</button>
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

const mapStateToProps = (state) => {
    return {
        lstChoosingSeat: state.BookingTicketReducer.lstChoosingSeat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseSeat: (seat) => {
            dispatch(chooseSeatAction(seat))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seats)
