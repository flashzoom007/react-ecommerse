import React, { useState } from 'react'
import Menu from './menuApi.js';
import MenuCard from './Menucard';
import Navbar from './Navbar.js';

const Resturant = () => {
    const unicMenu = [
        ...new Set(
            Menu.map((currEle) => {
                return currEle.category;
            })
        ),
        "All",
    ];

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(unicMenu);
    // const [count, setCount] = useState(0);


    const filterNav = (category) => {
        if (category === "All") {
            return setMenuData(Menu);

        }
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterNav={filterNav} menuList={menuList} />

                {/* <h3>{count}</h3>
                <button onClick={()=>{setCount(count+1)}}>Incr</button>
                <button onClick={()=>{(count>0)?setCount(count-1):setCount(0)}}>Decr</button> */}

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant