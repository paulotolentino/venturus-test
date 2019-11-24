import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return (
        <div className="icon-box">
            <FontAwesomeIcon className="icon" icon={props.icon} />
            <div className="text-icon-box">
                <p className="small-text">{props.litle}</p>
                <p className="medium-text">{props.text}</p>
            </div>
        </div>
    )
}