import React from 'react';
import SubscribeContainer from './SubscribeContainer';
import FreshBakedContainer from './FreshBakedContainer';
import AboutOurHistory from './AboutOurHistory';
import ExploreFoods from './ExploreFoods';
import SpecialOfferProducts from './SpecialOfferProducts';
import one from '../../../images/01.jpg'
import two from '../../../images/02.jpg'
import three from '../../../images/03.jpg'

export default function Section3() {

    const data = [
        {
            title: "rainbow vegetable sandwich",
            url: one,
            timer: "15 - 20",
            serviceCount: "1",
            price: "10.50",
            offerPrice: "9.20",
        },
        {
            title: "vegetarian burger",
            url: two,
            timer: "30 - 45",
            serviceCount: "1",
            price: "10.50",
            offerPrice: "9.20",
        },
        {
            title: "raspberry stuffed french toast",
            url: three,
            timer: "10 - 15",
            serviceCount: "1",
            price: "13.20",
            offerPrice: "12.50",
        },
    ]

    return (
        <React.Fragment>
            <AboutOurHistory />
            <ExploreFoods />
            <SpecialOfferProducts products={data} />
            <FreshBakedContainer />
            <SubscribeContainer />
        </React.Fragment >
    );
}