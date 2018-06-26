import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const ColorSwatches = ({ colors }) => {
    return (
        <section className='section' id={colors.id}>
        <h2 className='section__title'>{colors.title}</h2>
            <Row>
                {
                    colors.colors.map((color, index) => {
                        return (
                            <Col key={index} xs={6} md={4}>
                                <div  className='swatch'>
                                    <div className='swatch__color' style={{backgroundColor: color.color}} />
                                    <p className='swatch__text'>{ color.name }</p>
                                    <p className='swatch__label'>{ color.color }</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </section>
    )
}

export default ColorSwatches;
