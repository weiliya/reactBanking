import React from 'react';
import {connect} from 'react-redux';
import Transactions from "../../components/Transaction/Transactions";
import {
    fetchTransactions,
} from "../actions/transactions";

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactionList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransactions: () => {
            dispatch(fetchTransactions(dispatch));
        }
    }
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(Transactions);