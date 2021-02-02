import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";

const Nav = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background-color: #026ccf;
`;

const SidebarNav = styled(Link)`
    background-color: black;
`;

const NavIcon = styled.div`
    font-size: 2rem;
    margin-left: 2rem;
`

const Sidebar: FC = () => {
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav to="#">
                <NavIcon>
                    < AiOutlineHome />
                </NavIcon>
            </Nav>
            <SidebarNav to="#"></SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;
