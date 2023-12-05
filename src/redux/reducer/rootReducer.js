import {combineReducers} from 'redux';
import BookingTicketReducer from './BookingTicketReducer';

const rootReducer = combineReducers({
    // Nơi khai báo các state của ứng dụng
    BookingTicketReducer,
})

export default rootReducer;