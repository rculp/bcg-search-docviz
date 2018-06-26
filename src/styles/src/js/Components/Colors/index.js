import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scrollspy from 'react-scrollspy';
import ColorSwatches from './ColorSwatches';

const brandColors = {
    id: 'brand',
    title: 'Brand Colors',
    colors: [
        {
            name: 'green-dark',
            color: '#00532f'
        },
        {
            name: 'green',
            color: '#177b57'
        },
        {
            name: 'blue-green',
            color: '#3fad93'
        },
        {
            name: 'light-green',
            color: '#32c77f'
        },
        {
            name: 'yellow',
            color: '#e4ef39'
        }
    ]
}

const grayscaleColors = {
    id: 'grayscale',
    title: 'Grayscale Colors',
    colors: [
        {
            name: 'black',
            color: '#000'
        },
        {
            name: 'gray-darkest',
            color: '#333333'
        },
        {
            name: 'gray-darker',
            color: '#707070'
        },
        {
            name: 'gray-dark',
            color: '#b7b7b7'
        },
        {
            name: 'gray',
            color: '#d9d9d9'
        },
        {
            name: 'gray-light',
            color: '#f2f2f2'
        },
        {
            name: 'gray-lightest',
            color: '#fafafa'
        },
        {
            name: 'white',
            color: '#fff'
        }
    ]
}

const stateColors = {
    id: 'state',
    title: 'State Colors',
    colors: [
        {
            name: 'error',
            color: '#d50000'
        },
        {
            name: 'success',
            color: '#4CAF50'
        },
        {
            name: 'warning',
            color: '#FF9800'
        },
        {
            name: 'info',
            color: '#00BCD4'
        }
    ]
}

const Colors = () => {
    return (
        <Row>
            <Col xs={12} md={2}>
                <div className='nav-vertical'>
                    <Scrollspy offset={56} items={['brand', 'grayscale', 'state']} currentClassName="nav__list-item--is-active" className='nav__list'>
                        <li className='nav__list-item'><a href="#brand" className='nav__list-link'>Brand</a></li>
                        <li className='nav__list-item'><a href="#grayscale" className='nav__list-link'>Grayscale</a></li>
                        <li className='nav__list-item'><a href="#state" className='nav__list-link'>State</a></li>
                    </Scrollspy>
                </div>
            </Col>
            <Col xs={12} md={10}>
                <ColorSwatches colors={brandColors} />
                <ColorSwatches colors={grayscaleColors} />
                <ColorSwatches colors={stateColors} />
            </Col>
        </Row>
    )
}

export default Colors;
