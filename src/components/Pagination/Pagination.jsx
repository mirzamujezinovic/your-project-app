import "./Pagination.css"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



function Pagination({ numOfPages, page, setPage }) {
    const arr = [];
    for (let i = 1; i <= numOfPages; i++) {
      arr.push(i);
    }
    return (
      <div className="pagination">
        <button className="pagination-btn" onClick={() => setPage(page - 1)}>
          <MdKeyboardDoubleArrowLeft height={25} />
        </button>
        {arr.map((num) => (
          <button
            className="pagination-btn"
            key={num}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}
        <button className="pagination-btn" onClick={() => setPage(page + 1)}>
          <MdOutlineKeyboardDoubleArrowRight height={25} />
        </button>
      </div>
    );
  }
  
  export default Pagination;