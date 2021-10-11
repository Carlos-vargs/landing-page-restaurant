import React from 'react';
import SubscribeContainer from './SubscribeContainer';
import FreshBakedContainer from './FreshBakedContainer';
import AboutOurHistory from './AboutOurHistory';
import ExploreFoods from './ExploreFoods';
import SpecialOfferProducts from './SpecialOfferProducts';

export default function Section3() {

    const data = [
        {
            title: "rainbow vegetable sandwich",
            url: "http://demo.tutsflow.com/foodera/images/foods/01.jpg",
            timer: "15 - 20",
            serviceCount: "1",
            price: "10.50",
            offerPrice: "9.20",
        },
        {
            title: "vegetarian burger",
            url: "http://demo.tutsflow.com/foodera/images/foods/02.jpg",
            timer: "30 - 45",
            serviceCount: "1",
            price: "10.50",
            offerPrice: "9.20",
        },
        {
            title: "raspberry stuffed french toast",
            url: "http://demo.tutsflow.com/foodera/images/foods/03.jpg",
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