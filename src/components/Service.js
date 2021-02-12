import React from 'react'
import '../styles/Service.css';

export default function Service(props) {
    return (
        <div className="service-container">
            {props.children}
        </div>
    )
}
