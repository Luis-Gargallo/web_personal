import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import LuisLogo from '../../../assets/img/png/logo-white.png'

import './MenuTop.scss';

export default function MenuTop(props){
    const { menuCollapsed, setMenuCollapsed } = props;
    const MenuUno = MenuFoldOutlined;
    const MenuDos = MenuUnfoldOutlined;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={LuisLogo}
                    alt="Luis Gargallo"
                />
                <Button type="link" onClick={() => setMenuCollapsed( !menuCollapsed )}>
                    <MenuUno type={menuCollapsed ? <MenuDos /> : <MenuUno />}  />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Click...")}>
                    <PoweroffOutlined type="power-off" />
                </Button>
            </div>
        </div>
        
    )
}
