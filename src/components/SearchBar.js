function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("naked");
  };
  return (
    <div>
      <input /> <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default SearchBar;
