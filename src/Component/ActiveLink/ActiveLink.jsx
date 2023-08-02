/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
NavLink
import './ActiveLink.css'
const ActiveLink = ({to,children}) => {
    return (
        <div>
             <NavLink
                    to={to}
                    className={({ isActive }) =>isActive ? "active" : "unactive"} >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;