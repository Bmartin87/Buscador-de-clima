import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribí una ciudad"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
