import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://www.tennessean.com/gcdn/-mm-/ecf7500611857c298a730ab23bac7c03a3045ed5/c=0-16-1200-694/local/-/media/2017/11/17/TennGroup/Nashville/636465397762397494-Cocoa.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp'
                    title='Healthy Made!'
                    comment='25% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://www.tennessean.com/gcdn/-mm-/ecf7500611857c298a730ab23bac7c03a3045ed5/c=0-16-1200-694/local/-/media/2017/11/17/TennGroup/Nashville/636465397762397494-Cocoa.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp'
                    title='Organic Made!'
                    comment='View More'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection