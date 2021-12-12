import BlogDetail from "../../components/sections/BlogDetail";
import { getArticle } from "../../services/article.service";
import Head from "next/head";
import { getStrapiImage } from "../../utils/medias";
import { fetchAPI } from "../../utils/api";
import Social from "../../components/Social";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
function DetailBlog({ article = {}, articlesData, generalInfo }) {
    return (
        <div style={{ width: "100vw" }}>
            <Head>
                <title>{article.title}</title>
                <meta property="og:title" content={article.title} key="title" />
                <meta
                    property="og:description"
                    content={article.description}
                    key="description"
                />
                <meta
                    property="og:image"
                    content={
                        article.image
                            ? getStrapiImage(article.image)
                            : "/assets/images/blog_bg.jpg"
                    }
                    key="image"
                />
            </Head>
            <Header generalInfo={generalInfo} />
            <Banner
                bannerData={{
                    title: article.title,
                    subtitle: article.subdescription,
                    image: article.image ? [article.image] : "/assets/images/blog_bg.jpg",
                }}
            />
            <BlogDetail article={article} articlesData={articlesData} />
        </div>
    );
}

export default DetailBlog;

export async function getServerSideProps({ params }) {
    const [article, articlesData, generalInfo] = await Promise.all([
        getArticle(params.slug),
        fetchAPI("/articles"),
        fetchAPI("/general"),
    ]);
    return { props: { article, articlesData, generalInfo } };
}
