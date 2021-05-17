import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.saga";
import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
    // yield 'all' allows us to call any number of sagas inside the array and initialize them all on separate task streams
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
