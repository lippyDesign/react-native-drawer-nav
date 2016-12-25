import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list.js'

const App = ()=> {
    return (
        <div>
            <EmployeeList/>
        </div>
    )
}
// After meteor loads in the browser, render the app to the DOM
Meteor.startup( ()=> {
    // React render call
    ReactDOM.render(<App/>, document.querySelector('.container'))
})