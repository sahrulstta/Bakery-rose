import React, {useState, useEffect} from 'react'
import {Nav, NavContainer, NavLogo, NavIcon, MobileIcon,Buttonn, NavMenu, NavItem,NavLink, NavButton, BtnLink} from './NavbarElement'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../GlobalStyled'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton();
    },[]);
    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#000000'}}>
        <Nav>
            <NavContainer>
                <NavLogo to='/Home'>
                    <NavIcon/>
                    Rose Bakeri
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/>:<FaBars/>}
                </MobileIcon>

                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/Home'>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/About'>About Me</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/Product'>Product</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </NavItem>

                    <NavButton>
                        {button ? (
                        <BtnLink to='/ChatNow'>
                            <Button primery>Chat Now</Button>
                        </BtnLink>
                        ) : (
                            <BtnLink to='/ChatNow'>
                                <Button fontBig primery>
                                    Chat Now
                                </Button>
                            </BtnLink>
                        )}
                    </NavButton>
                </NavMenu>

            </NavContainer>
        </Nav>
        </IconContext.Provider>

        </>
    )
}

export default NavBar
