// inside of /src/App.jsx
import React, {useState, useEffect} from 'react';







const App = () => {

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])
    const [loadfilms, setLoadFilms] = useState([])
    const [loadpeople, setLoadPeople] = useState([])











    return (
        <div>
            <h1>Hello from App Component!</h1>
        </div>
    );
};

export default App;