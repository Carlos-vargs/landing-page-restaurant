import React, { Fragment } from 'react';
import Section1 from './main/section1/Section1';
import Section2 from './main/section2/Section2';
import Section3 from './main/section3/Section3';


function Main() {
    return (
        <Fragment>
            <Section1 />
            <Section2 />
            <Section3 />
        </Fragment>
    );
}

export default Main;