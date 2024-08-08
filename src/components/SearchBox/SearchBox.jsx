export const SearchBox = ({ handleSearch }) => {
  return (
    <div>
      <input onChange={handleSearch} type="text" />
    </div>
  );
};
