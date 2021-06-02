import React from 'react';
import Sneakers from '../sneakers/sneakers.component'
import Jackets from '../jackets/jackets.component'
import Mens from '../mens/mens.component'
import Womens from '../womens/womens.component'
import Hats from '../hats/hats.component'
const Collections = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <Jackets />
                </div>
                <div className="col-sm-2">
                    <Mens />
                </div>
                <div className="col-sm-2">
                    <Womens />
                </div>
                <div className="col-sm-2">
                    <Sneakers />
                </div>
                <div className="col-sm-2">
                    <Hats />
                </div>
            </div>
        </div>
    )
}


export default Collections;