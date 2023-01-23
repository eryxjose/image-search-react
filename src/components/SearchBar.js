import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        
        onSubmit(term);
    };

    const handleChange = (ev) => {
        setTerm(ev.target.value);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Entre com uma palavra para buscar:</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;