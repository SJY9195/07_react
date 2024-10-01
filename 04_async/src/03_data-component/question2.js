import { useEffect, useState } from "react";
import './news.css';

const Article = () => {
    const API_KEY = 'b2f485cd2f274a5ba62325da31653420';

    const [articles, setArticles] = useState([]); // 여러 기사를 저장할 상태

    const getArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles; // 전체 기사를 반환
    };

    useEffect(() => {
        async function setArticle() {
            const result = await getArticles();
            if (result) {
                setArticles(result.slice(0, 2)); // 상위 2개의 기사만 저장
            }
        }
        setArticle();  // 비동기 함수 setArticle를 만든 후, 바로 setArticle() 호출!
    }, []);

    return (
        <>
        <div className="news-container">
            {articles.map((article, index) => (
                <div key={index} className="news-card">
                    {<img src={article.urlToImage} alt={article.title} className="news-image" />}
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-description">{article.description}</p>
                    {<p><a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">더 읽기</a></p>}
                </div>
            ))}
            </div>
        </>
    );
}

export default Article;