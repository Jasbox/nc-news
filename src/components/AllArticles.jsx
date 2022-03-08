import { useEffect, useState } from "react";
import api from "../api";
import ArticleCard from "./ArticleCard";


export default function AllArticles({ articles, setArticles}) {
         const [isLoading, setIsLoading] = useState(true)

         useEffect(() => {
             api.get('/articles').then(({data: {articles}}) => {
                 setArticles(articles)
                 setIsLoading(false)
             })
         },[setArticles])

         if(isLoading) {
             return <p>articles loading...</p>
         }
         return (
             <ul>
                 {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article}/>
                 ))}
             </ul>
         )
}