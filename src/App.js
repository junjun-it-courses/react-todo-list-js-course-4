import React from 'react';
import {Routes, Route} from "react-router-dom"
import routesList from "./pages/routesList";
import {nanoid} from "nanoid";


const App = () => {
    return (
        <main>
            <Routes>
                {routesList.map(({path, Page}) => (
                    <Route
                        key={nanoid()}
                        path={path}
                        element={<Page/>}
                    />))}
            </Routes>
        </main>
    );
};

export default App;