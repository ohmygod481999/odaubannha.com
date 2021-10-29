import React from "react";

function Pagination({ currentPage, totalItems, itemPerPage }) {
    const numPage = Math.ceil(totalItems / itemPerPage);
    const items = [];
    for (let i = 0; i < numPage; i++) {
        items.push(i);
    }

    return (
        <div className="row">
            <div className="col-12 mt-2 mt-md-4">
                <ul className="pagination pagination_style1 justify-content-center">
                    <li
                        className={`page-item ${
                            currentPage === 0 && "disabled"
                        }`}
                    >
                        <a className="page-link" href="#" tabIndex={-1}>
                            <i className="linearicons-arrow-left" />
                        </a>
                    </li>
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className={`page-item ${
                                item === currentPage && "active"
                            } `}
                        >
                            <a
                                className="page-link"
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
                            <i className="linearicons-arrow-right" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;
