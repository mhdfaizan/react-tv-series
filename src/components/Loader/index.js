import React from 'react';
import loaderSrc from '../../logo.svg';

const Loader = props => {
    return (
        <div>
            <img style={{ width: 50 }} alt='loader icon' src={loaderSrc}>
            </img>
        </div>
    )
}

export default Loader;