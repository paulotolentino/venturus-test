import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return (
        <section className="registration-column">
            <p className="reg-title">{props.title}</p>
            <section className="registration-row">
                <FontAwesomeIcon className="iconBigger" icon={props.icon} />
                <p className="reg-text">{props.text}</p>
            </section>
        </section>
    )
}