import { Center, Flex } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import FoodCard from '../../FoodCard';

export default function SpecialOfferProducts({products}) {
    return (
        <Fragment>
            <Flex  justifyContent="center" alignItems="center" >
                <Center flexDirection={['column','column','column','row','row']} gridGap="40px" mb={['100px','100px','100px','200px','200px']} >
                    {
                        products.map((e) => <FoodCard
                            key={Math.random()*2}
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
