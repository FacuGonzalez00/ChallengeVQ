import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from './logo.png'
import style from './Navbar.module.css'

const NavBar = () => {
    const items = [
        {
            label: 'Personajes',
        },
        {
            label: 'Insights',
        },
        {
            label: 'Configuaracion',
        },
        {
            label: 'Login',
        }
    ];

    const start = <img alt="logo" src={logo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;

    return (
        <div>
            <div className={style.card}>
                <Menubar model={items} start={start} />
            </div>
        </div>
    );
}
export default NavBar;