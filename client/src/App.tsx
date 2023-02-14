
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './containers/Main';
import Header from './components/header/Header';

const App: React.FC = () => {
    return (
        <Router>
                <Header />
                <Main />
        </Router>
    );
}

export default App;
