import React from "react";

function Pagination({ currentPage, totalItems, itemPerPage }) {
    const numPage = Math.ceil(totalItems / itemPerPage);
    const items = [];
    for (let i = 0; i < numPage; i++) {
        items.push(i);
    }

    return (
        <div className="row">
            <div className="col-lg-12 wow slideInDown animated">
                <div className="mx-auto d-table">
                    <ul className="pagination mt-50">
                        <li
                            className={`page-item ${
                                currentPage === 0 && "disabled"
                            }`}
                        >
                            <a className="page-link" href="#" tabIndex={-1}>
                            Prev
                            </a>
                        </li>
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className={`page-item  `}
                            >
                                <a
                                    className={`page-link ${
                                        item === currentPage && "active"
                                    }`}
                                    href={`?_limit=${itemPerPage}&_start=${
                                        itemPerPage * item
                                    }`}
                                >
                                    {item + 1}
                                </a>
                            </li>
                        ))}

                        <li
                            className={`page-item ${
                                currentPage === items.length - 1 && "disabled"
                            }`}
                        >
                            <a className="page-link" href="#">
                            Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
