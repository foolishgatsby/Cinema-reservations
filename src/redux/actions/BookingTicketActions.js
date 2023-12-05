import { CANCEL_SEAT, CHOOSE_SEAT } from "../types/BookingTicketTypes"


export const chooseSeatAction = (seat) => {
    return {
        type: CHOOSE_SEAT,
        seat
    }
}

export const cancelSeatAction = (seatNum) => {
    return {
        type: CANCEL_SEAT,
        seatNum
    }
}