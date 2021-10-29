import Breadcrumb from "../../components/Breadcrumb";
import { getArticles, getArticle } from "../../services/article.service";
import BlogDetailFull from "../../components/sections/BlogDetailFull";
import Head from "next/head";
import { getStrapiImage } from "../../utils/medias";

function DetailBlog({ article = {} }) {
    return (
        <div>
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
            <Breadcrumb title={article.title} image={article.image} />
            <BlogDetailFull article={article} />
        </div>
    );
}

export default DetailBlog;

export async function getServerSideProps({ params }) {
    const article = await getArticle(params.slug);
    return { props: { article } };
}

// export async function getStaticPaths() {
//     const articles = await getArticles();
//     return {
//         paths: articles.map((_article) => {
//             return {
//                 params: { slug: _article.slug },
//             };
//         }),
//         fallback: true,
//     };
// }
