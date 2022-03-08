import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

export default function ArticleItem() {
  const { article_id: articleId } = useParams();

  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/articles/${articleId}`).then(({ data: { article } }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [articleId]);


if (isLoading) return <p>article is loading...</p>;
return (
  <section id={`article-id-${articleId}`}>
    <h2>{article.title}</h2>
    <p>By: {article.author}</p>
    <p>{`'${article.body}'`}</p>

    <Link to="/">
      <button>Back</button>
    </Link>
  </section>
);
}