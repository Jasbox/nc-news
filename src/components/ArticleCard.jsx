import { Link } from "react-router-dom";

export default function ArticleCard ({article}) {
      return (
          <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <Link to={`/article/${article.article_id}`}>
                  <button>read more</button>
              </Link>

          </li>
      )

   
    
}