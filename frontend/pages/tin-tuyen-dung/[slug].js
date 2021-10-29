import Breadcrumb from "../../components/Breadcrumb";
import { getArticles, getArticle } from "../../services/article.service";
import BlogDetailFull from "../../components/sections/BlogDetailFull";

function DetailBlog({ article = {}}) {
    return (
        <div>
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
//     console.log(articles.map(a => a.title))
//     return {
//         paths: articles.map((_article) => {
//             return {
//                 params: { slug: _article.slug },
//             };
//         }),
//         fallback: true,
//     };
// }
