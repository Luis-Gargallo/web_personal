import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


import './MenuSider.scss';

function MenuSider(props) {
    const { menuCollapsed, location } = props;
    const { Sider } = Layout;

    console.log(Location.pathname);

    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} >
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <HomeOutlined type="home" />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={"/admin/users"}>
                        <UserOutlined type="menu" />
                        <span className="nav-home">Usuarios</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(MenuSider);