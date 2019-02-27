import React from 'react';
import CardAction from './CardAction/CardAction';

const cardActions = (props) => (
    <div style={{width: '100%', height: '100px'}}>
        {props.cardActions.map((cardAction) => (
            <CardAction key={cardAction['text']} cardActionData={cardAction}/>
        ))}
    </div>
)

export default cardActions