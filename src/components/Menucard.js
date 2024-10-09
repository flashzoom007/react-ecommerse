import React from 'react'
import Menu from './menuApi.js';

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((currEle) => {
                    const { id, name, image, category, price, description } = currEle;
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-description subtle'>{description}</span>
                                        <div className='card-read'>{price}</div>
                                    </div>
                                    <img src={image} alt={image} width={350} height={350} className='card-media' />
                                    <span className='card-tag'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard