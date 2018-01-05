import React from 'react';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
    <DefaultInput
        placeholder="Place Name"
        value={props.placeData.value}
        valid={props.placeData.valid}
        touched={props.placeData.touched}
        onChangeText={props.onChangeText}
        style={{ color: '#000' }}
    />
);

export default placeInput;
