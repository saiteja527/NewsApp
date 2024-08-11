import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import image from "../assets/image.jpg";
import './NewsMain.css';

const NewsMain = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 16;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${articlesPerPage}&page=${currentPage}&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setArticles(data.articles || []);
        setTotalPages(Math.ceil(data.totalResults / articlesPerPage)); 
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };
    fetchNews();
  }, [category, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="news-container">
      <h2 className="text-center">
        <span className="badge bg-danger">
          LATEST NEWS {category === "general" ? "" : "ABOUT"}{" "}
          {category === "general" ? "" : category.slice(0).toUpperCase()}
        </span>
      </h2>
      {articles.length > 0 ? (
        articles.map((item, index) => (
          <NewsItems
            key={index}
            title={item.title || "No Title"}
            description={item.description || "This the Breaking News Right Now"}
            url={item.url}
            img={item.urlToImage || image}
            author={item.author || "Unknown Author"}
          />
        ))
      ) : (
        <p className="text-center">No articles available.</p>
      )}
      <div className="pagination my-2">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default NewsMain;
