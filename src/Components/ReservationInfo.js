import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelSeatAction } from '../redux/actions/BookingTicketActions'

class ReservationInfo extends Component {

    renderReservationInfo = () => {
        return this.props.lstChoosingSeat.map((choosingSeat, index) => {
            return <tr key={index}>
                <th scope='row'>{choosingSeat.soGhe}</th>
                <td>{choosingSeat.gia.toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    this.props.dispatch(cancelSeatAction(choosingSeat.soGhe))
                }}>Cancel</button></td>
            </tr>
        })
    }

    renderTotalPrice = () => {
        return <tfoot>
            <tr>
                <td>
                    <h3>Total price</h3>
                </td>
                <td>
                    {this.props.lstChoosingSeat.reduce((total, seat, index) => {
                        return total += seat.gia;
                    }, 0).toLocaleString()}
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        this.props.lstChoosingSeat.map((choosingSeat, index) => {
                            return this.props.dispatch(cancelSeatAction(choosingSeat.soGhe))
                        })
                    }}><i className="fa fa-times"></i></button>
                </td>
            </tr>
        </tfoot>
    }

    render() {
        return (
            <div>
                <div className='mt-5 text-start'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '25px' }}>Selected</span>
                    <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '25px' }}>Choosing</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button> <span className='text-light' style={{ fontSize: '25px' }}>Available</span>
                </div>
                <div className='mt-5'>
                    <div style={{ opacity: '0.5' }}>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ fontSize: '25px' }}>
                                        <th scope="col">Seat number</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderReservationInfo()}
                                </tbody>
                                {this.renderTotalPrice()}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        lstChoosingSeat: state.BookingTicketReducer.lstChoosingSeat
    }
}


export default connect(mapStateToProps)(ReservationInfo)
