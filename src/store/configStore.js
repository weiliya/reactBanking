import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import {loadTransactions} from "./actions/transactions";
import {loadSavingsAccounts} from "./actions/savingsAccounts";
import {loadAccounts} from "./actions/accountActions";

export default  () => {

    const enhancers = [applyMiddleware(thunk)];

    const store = createStore(rootReducer, ...enhancers);

    store.dispatch(loadTransactions(), loadSavingsAccounts(), loadAccounts());

    return store;
}