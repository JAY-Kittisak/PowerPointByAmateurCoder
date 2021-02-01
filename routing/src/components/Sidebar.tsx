import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled(Link)`
    background-color: black;
`

const SidebarNav = styled(Link)`
    background-color: black;
`

const Sidebar: FC = () => {
    return (
        <>
            <Nav to="#"></Nav>
            <SidebarNav to="#"></SidebarNav>
        </>
    )
}

export default Sidebar