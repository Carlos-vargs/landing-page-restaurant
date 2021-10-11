import React, { Fragment } from 'react';
import BasicIngredientsInfo from './BasicIngredientsInfo';
import FullIngredientsInfo from './FullIngredientsInfo';

export default function Section2() {

    const dataIngredients = [
        ' Etiam sed dolor ac diam volutpat.',
        'Erat volutpat aliquet imperdiet.',
        'purus a odio finibus bibendum.'
    ]

    return (
        <Fragment>
            <BasicIngredientsInfo />
            <FullIngredientsInfo ingredients={dataIngredients} />
        </Fragment>
    );
}
