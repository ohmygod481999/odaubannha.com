import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { getNews } from "../../services/news.service";
import { formatQueryParams } from "../../utils/common";
import { getArticles, countArticle } from "../../services/article.service";
import ArticleListPage from "../../components/ArticleListPage";
import { usePagination } from "../../utils/hooks/usePagination";
import { getRecuitment } from "../../services/recruitment.service";

function News({ news, articles, _limit, _start, totalCount }) {
    const { title, image } = news;
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

export default News;

export async function getServerSideProps({ params = {}, query = {} }) {
    const news = await getRecuitment();
    const { article_category } = news;

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

    return { props: { news, articles, _limit, _start, totalCount } };
}
