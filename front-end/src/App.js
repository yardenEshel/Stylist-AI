import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello, React!</h1>
                <p>
                    If you see this message, React is installed correctly.
                </p>
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));