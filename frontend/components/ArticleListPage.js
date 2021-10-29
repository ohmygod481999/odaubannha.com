import React from "react";
import Breadcrumb from "./Breadcrumb";
import Blog from "./sections/Blog";

function ArticleListPage({
    title,
    image,
    articles,
    currentPage,
    itemPerPage,
    totalItems,
}) {
    return (
        <div>
            <Breadcrumb title={title} image={image} />
            <Blog
                articles={articles}
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                totalItems={totalItems}
            />
        </div>
    );
}

export default ArticleListPage;
