import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import LuisLogo from '../../../assets/img/png/logo-white.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    const MenuUno = MenuFoldOutlined;
    const MenuDos = MenuUnfoldOutlined;

    const logoutUser = () => {
        logout();
        window.location.reload();
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={LuisLogo}
                    alt="Luis Gargallo"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <MenuUno type={menuCollapsed ? <MenuDos /> : <MenuUno />} />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined type="power-off" />
                </Button>
            </div>
        </div>

    )
}
