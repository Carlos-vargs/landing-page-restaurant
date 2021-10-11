import { Center, Flex } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import FoodCard from '../../FoodCard';

export default function SpecialOfferProducts({products}) {
    return (
        <Fragment>
            <Flex justifyContent="center" >
                <Center gridGap="40px" mb="310px">
                    {
                        products.map((e) => <FoodCard
                            key={Math.random()}
                            url={e.url}
                            title={e.title}
                            timer={e.timer}
                            serviceCount={e.serviceCount}
                            price={e.price}
                            offerPrice={e.offerPrice}
                        />)
                    }
                </Center>
            </Flex>
        </Fragment>
    );
}
