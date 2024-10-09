import React from 'react'

const Navbar = ({ filterNav, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    { 
                    menuList.map((currEle) => {
                        return (
                            <button 
                            className='btn-group__item' 
                            onClick={() => { filterNav(currEle) 
                            }}>{currEle}</button>
                        )
                    })
                    } 
                </div>
            </nav>
        </>
    )
}

export default Navbar