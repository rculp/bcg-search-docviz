import React from 'react';

const TypographyDisplay = () => {
    return (
        <section className='section' id='display'>
            <p className='section__title'>Display Typography</p>
            <p className='section__subtitle'>Display Large</p>
            <p className='section__heading'>Display Large Serif</p> 
            <p className='display-large-serif'>The quick brown fox jumps over the lazy dog</p>
            <p className='section__heading'>Display Large Sans Serif</p>
            <p className='display-large-sans'>The quick brown fox jumps over the lazy dog</p>
            <p className='section__subtitle'>Display Regular</p>
            <p className='section__heading'>Display Regular Serif</p> 
            <p className='display-regular-serif'>The quick brown fox jumps over the lazy dog</p>
            <p className='section__heading'>Display Large Sans Serif</p>
            <p className='display-regular-sans'>The quick brown fox jumps over the lazy dog</p>
        </section>
    )
}

export default TypographyDisplay;
