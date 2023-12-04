import React, { Component } from 'react'

export default class ReservationInfo extends Component {
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
                                    <tr className>
                                        <th scope='row'>R1C1</th>
                                        <td>R1C2</td>
                                        <td>R1C3</td>
                                    </tr>
                                    <tr className>
                                        <th scope='row'>Item</th>
                                        <td>Item</td>
                                        <td>Item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
