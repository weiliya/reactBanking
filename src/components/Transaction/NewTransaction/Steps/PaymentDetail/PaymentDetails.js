import React from 'react';
import AmountInput from "../../../../UI/AmountInput";
import CurrencySelect from "../../../../UI/CurrencySelect";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'inline',
        flexWrap: 'wrap',
    }
});

 const PaymentDetails = ({classes, ccy, amount, onChange}) =>(
        <div className={classes.root}>
            <CurrencySelect
                name="ccy"
                label="Currency"
                value={ccy}
                onChange={onChange}
            />
            <AmountInput
                name="amount"
                value={amount}
                ccy={ccy}
                label="Amount"
                onChange={onChange}
            />
        </div>
    );


export default withStyles(styles)(PaymentDetails);
