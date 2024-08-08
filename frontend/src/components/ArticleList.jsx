
import { ArticleItem } from "./ArticleItem";
import useFetchArticles from "../hooks/useFetchArticles";

export const ArticleList = () => {
    const { data, loading, error } = useFetchArticles('articles');

    return (
        <div className='container'>
            {error && <div>Error: {error}</div>}
            {loading && <div>Loading...</div>}
            {
                data?.articles.map((article) => {
                    return (<ArticleItem key={article._id} {...article} />)
                })
            }
        </div>
    )
}
