import React from 'react'


export default function (props) {
    return (
        <div>
            <h1>Slug details</h1>
            <h2>This page is for {props.match.params.slug}</h2>
        </div>
    )
}