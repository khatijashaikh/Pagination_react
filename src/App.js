
import './App.css';
import ReactPaginate from 'react-paginate';

function App() {
  const handlePageClick=()=>{}
  return (
   <div>
     <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={20}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
   </div>
  );
}

export default App;
