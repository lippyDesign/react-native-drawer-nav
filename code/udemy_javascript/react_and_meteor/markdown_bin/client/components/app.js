import React from 'react';

import Header from './header';

export default App = (props)=> {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}