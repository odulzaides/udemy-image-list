import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/app';

Meteor.startup(()=> {
    ReactDOM.render(<App />, document.getElementById('app'));
})