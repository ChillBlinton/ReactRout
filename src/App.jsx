import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
             <>
                <Link to="/">
                    <Button variant="info" style={{margin: "10px"}}>Go Home</Button>
                </Link>
                <Link to="/films">
                    <Button variant="info" style={{margin: "10px"}}>View Films</Button>
                </Link>
                <Link to="/people">
                    <Button variant="info" style={{margin: "10px"}}>View People</Button>
                </Link>
        </BrowserRouter>

        {/* // <BrowserRouter>
        //     <Routes>
        //         <Route path="/faq" element={() => <h1>Router</h1>} />
        //         <Route path="/about" element={() => <h1>Router</h1>} />

        //     </Routes>
        // </BrowserRouter> */}
    )};

export default App;