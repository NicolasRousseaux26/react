import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-primary">
                {this.props.text ? (
                this.props.text
            ) : (
                'texte par defaut du bouton'               
            )}</button>
        );
    }
}
export default Button;