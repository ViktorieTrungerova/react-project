import * as React from "react";

interface INavigationProps {
    step: number
}

export class Navigation extends React.Component< INavigationProps, {}> {

    render() {
        return (
            <div className={'row cart-step-navigation no-margin-left no-margin-right margin-bottom'}>
                <div className={'col-xs-4 cart-step ' + (this.props.step == 1 ? 'active' : '')}>Košík</div>
                <div className={'col-xs-4 cart-step ' + (this.props.step == 2 ? 'active' : '')}>Adresa</div>
                <div className={'col-xs-4 cart-step ' + (this.props.step == 3 ? 'active' : '')}>Souhrn</div>
            </div>
        );
    }
}