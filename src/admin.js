import { Col, Row } from 'antd';
import React from 'react'
import Header from './components/Header' //default find index.js
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import Home from './pages/home'
export default class Admin extends React.Component {

    render() {
        return (
            <Row className='container'>
                <Col span="3" className='nav-left'>
                    <NavLeft></NavLeft>
                </Col>
                <Col span='21' className='main'>
                    <Header>
                    </Header>
                    <Row className='content'>
                        <Home/>
                    </Row>
                    <Footer>
                    </Footer>
                </Col>
            </Row>
        );

    }
}