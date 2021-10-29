import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { getArticles, countArticle } from "../../services/article.service";
import { usePagination } from "../../utils/hooks/usePagination";
import Blog from "../../components/sections/Blog";
import { getStory } from "../../services/story.service";
import { formatQueryParams } from "../../utils/common";
import ArticleListPage from "../../components/ArticleListPage";

function Story({ story, articles, _limit, _start, totalCount }) {
    const { title, image } = story;
    const { currentPage, itemPerPage, totalItems } = usePagination(
        _start,
        _limit,
        totalCount
    );
    
    return (
        <ArticleListPage
            articles={articles}
            currentPage={currentPage}
            image={image}
            itemPerPage={itemPerPage}
            title={title}
            totalItems={totalCount}
        />
    );
}

export default Story;

export async function getServerSideProps({ params = {}, query = {} }) {
    const story = await getStory();
    const { article_category } = story;

    let articles = [];
    let totalCount = 0;

    const queryParams = {
        ...query,
        _category_id: article_category.id,
    };
    const formatedQueryParams = formatQueryParams(queryParams);
    const { _limit, _start } = formatedQueryParams;

    if (article_category) {
        const [resultArticles, resultTotalCount] = await Promise.all([
            getArticles(formatedQueryParams),
            countArticle(formatedQueryParams),
        ]);
        articles = resultArticles;
        totalCount = resultTotalCount;
    }

    return { props: { story, articles, _limit, _start, totalCount } };
}
