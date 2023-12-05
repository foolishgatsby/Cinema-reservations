import { CANCEL_SEAT, CHOOSE_SEAT } from "../types/BookingTicketTypes";

const initState = {
    lstSelectedSeat: [],
    lstChoosingSeat: [],
}

const BookingTicketReducer = (state = initState, action) => {
    switch (action.type) {
        case CHOOSE_SEAT: {
            let lstChoosingSeatUpdate = [...state.lstChoosingSeat];
            // Kiem tra xem ghe duoc chon co trong mang chua
            let index = lstChoosingSeatUpdate.findIndex(item => item.soGhe === action.seat.soGhe);
            // Neu co thi xoa khoi mang
            if (index !== -1) {
                lstChoosingSeatUpdate.splice(index, 1);
            } else {    // Neu chua co thi them vao mang
                lstChoosingSeatUpdate.push(action.seat);
            }
            // Cap nhat lai state
            state.lstChoosingSeat = [...lstChoosingSeatUpdate];
            return { ...state }
        }
        case CANCEL_SEAT: {
            let lstChoosingSeatUpdate = [...state.lstChoosingSeat];
            // Kiem tra xem ghe duoc chon co trong mang chua
            let index = lstChoosingSeatUpdate.findIndex(item => item.soGhe === action.seatNum);
            if (index !== -1) { // Neu co thi xoa khoi mang
                lstChoosingSeatUpdate.splice(index, 1);
            }
            // Cap nhat lai state
            state.lstChoosingSeat = [...lstChoosingSeatUpdate];
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default BookingTicketReducer;