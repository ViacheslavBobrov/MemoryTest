import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    digitKey: {
        margin: theme.spacing(1),
        minWidth: '120px',
        minHeight: '120px',
        backgroundColor: '#8F7EAA',
        color: 'white',
        fontSize: '40px'
    }
}));

const DigitKey = (props: any) => {
    const classes: any = useStyles();
    return (
        <Fab color="primary" className={classes.digitKey}
            onClick={() => props.onClick()} disabled={props.disabled}>
            {props.value}
        </Fab>
    );
}

class DigitKeyboard extends React.Component<{ onClick: any, disabled: boolean }, {}> {

    renderKey(digit: number) {
        return <DigitKey value={digit} onClick={() => this.props.onClick(digit)} disabled={this.props.disabled} />;
    }

    renderKeyBoard() {
        let keyBoard: any = []
        var key: number = 0;
        for (let i = 1; i <= 2; i++) {
            let children = []
            for (; key < i * 5; key++) {
                children.push(this.renderKey(key));
            }
            keyBoard.push(<div>{children}</div>);
        }
        return keyBoard;
    }

    render() {

        const digitKeyboardStyles = {
            padding: '30px',
            display: 'block',
            margin: 'auto',
            width: '60%'
        }

        return (
            <div style={digitKeyboardStyles}>
                {this.renderKeyBoard()}
            </div>
        );
    }

}



export default DigitKeyboard;