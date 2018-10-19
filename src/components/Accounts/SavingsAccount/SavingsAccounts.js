import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "@reach/router";

function mapStateToProps(state) {
    return {savingsAccounts: state.savingsAccounts};
}

class SavingsAccounts extends Component {

    render() {
        return (
            <div>
                <h2>My Savings Account:</h2>
                <ul>
                    {this.props.savingsAccounts.map(sva => {
                        return (
                            <li key={sva.id}> {sva.id} </li>
                        )
                    })}
                </ul>
                <Link to="/bond-details">Bond Details</Link>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(SavingsAccounts);