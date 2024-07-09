import React, { useState } from 'react';

const newsArticles = [
    { id: 1, headline: "Heist Gone Wrong: LSPD in Pursuit of Suspects", image: "/src/assets/place.png", content: "Detailed article content about Heist Gone Wrong.", likes: 0, comments: [] },
    {
        id: 2, headline: "Los Santos Traffic Mayhem: Another Day, Another Crash", image: "/src/assets/place.png", content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill.
The chaos began during the morning rush hour when a multi-car pileup occurred on the Del Perro Freeway, leading to extensive delays and gridlock that rippled across adjacent routes. Eyewitnesses reported reckless driving and excessive speeding as the primary causes, exacerbated by a sudden downpour that rendered roads slick and hazardous.
Emergency services were quick to respond, with LSPD officers and paramedics working tirelessly to manage the scene, assist the injured, and restore order. The accident, which involved over a dozen vehicles, resulted in several non-fatal injuries and significant property damage. Commuters expressed frustration and concern over the frequent traffic incidents plaguing the city.
Local authorities have reiterated the importance of adhering to traffic regulations and urged drivers to exercise caution, especially during adverse weather conditions. Plans to enhance traffic management and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`, likes: 0, comments: []
    },
    {
        id: 3, headline: "Los Santos Traffic Mayhem: Another Day, Another Crash", image: "/src/assets/place.png", content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill.
The chaos began during the morning rush hour when a multi-car pileup occurred on the Del Perro Freeway, leading to extensive delays and gridlock that rippled across adjacent and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`, likes: 0, comments: []
    },
    {
        id: 4, headline: "Los Santos Traffic Mayhem: Another Day, Another Crash", image: "/src/assets/place.png", content: `Los Santos, the bustling metropolis renowned for its dynamic urban life and scenic coastlines, is no stranger to traffic chaos. Yesterday marked another typical day of vehicular mayhem as a series of collisions brought parts of the city to a standstill. tance of adhering to traffic regulations and urged drivers to exercise caution, especially during adverse weather conditions. Plans to enhance traffic management and infrastructure are underway, aiming to mitigate such incidents in the future. Until then, Los Santos residents continue to navigate their city with a mix of caution and resilience, hoping for safer commutes ahead.
`, likes: 0, comments: []
    },
];

const News = () => {
    const [articles, setArticles] = useState(newsArticles);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [comment, setComment] = useState("");

    const handleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleBack = () => {
        setSelectedArticle(null);
    };

    const handleLike = (id) => {
        setArticles(articles.map(article => article.id === id ? { ...article, likes: article.likes + 1 } : article));
    };

    const handleComment = (id) => {
        if (comment.trim() === "") return;
        setArticles(articles.map(article => article.id === id ? { ...article, comments: [...article.comments, comment] } : article));
        setComment("");
    };

    return (
        <div className="bg-[var(--bg2)] dark:bg-[var(--dbg2)] p-0 pt-7 md:p-7">
            <div className="container bg-[var(--bg1)] dark:bg-[var(--dbg1)] mx-auto p-4 md:p-10">
                {selectedArticle ? (
                    <div>
                        <button onClick={handleBack} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Back to News</button>
                        <div className="max-w-[100%] mx-auto bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] text-[var(--lgold)] dark:text-[var(--dltext)] shadow-lg dark:shadow-sm rounded-lg md:rounded-2xl overflow-hidden">
                            <h2 className="md:text-4xl text-xl p-4 pricedown text-center m-2">{selectedArticle.headline}</h2>
                            <img src={selectedArticle.image} alt={selectedArticle.headline} className="w-full p-4 object-cover" />
                            <div className="p-4 poppins text-sm md:text-lg text-[var(--ltext)] dark:text-[var(--dlblue)]">
                                <p>{selectedArticle.content}</p>
                            </div>
                            <div className="p-4 poppins text-sm">
                                <div className="md:flex block justify-center"><button onClick={() => handleLike(selectedArticle.id)} className="bg-blue-500 text-white h-9 px-2 py-1 mr-5 mb-2 md:mb-4 md:mr-20 rounded-md">Like ({selectedArticle.likes})</button>
                                    <div>
                                        <input
                                            type="text"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="Add a comment"
                                            className="border-2 border-[var(--dbg2)] dark:border-[var(--dlgold)] rounded-md bg-[var(--ltext)] text-[var(--bg1l)] px-2 py-1 h-9 mr-2"
                                        />
                                        <button onClick={() => handleComment(selectedArticle.id)} className="bg-blue-500 text-white h-9 px-2 py-1 rounded-md">Comment</button>
                                    </div></div>
                                <div className="mt-4">
                                    {selectedArticle.comments.map((comment, index) => (
                                        <div key={index} className="border-b py-2">{comment}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="md:p-6 md:m-6 p-2 m-2 mt-6 align-center text-center justify-center">
                            <h2 className="text-xl md:text-4xl pricedown mb-4 text-[var(--lgold)] dark:text-[var(--dlgold)]">
                                News and Alerts
                            </h2>
                            <p className="text-sm md:text-xl poppins mb-4 text-[var(--ltext)] dark:text-[var(--dltext)]">
                                Stay Updated with all news of Los Santos!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                            {articles.map(article => (
                                <div key={article.id} className="bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] hover:bg-[var(--hover-bg-gradient-end)] hover:dark:bg-[var(--dllgold)] text-[var(--ltext)] dark:text-[var(--dlblue)] hover:text-[var(--lgold)] hover:dark:text-[var(--dltext)] shadow-lg dark:shadow-sm rounded-lg md:rounded-2xl overflow-hidden cursor-pointer p-3 md:p-4 transition ease-in-out duration-1500" onClick={() => handleClick(article)}>
                                    <img src={article.image} alt={article.headline} className="w-full md:h-52 h-30 md:rounded-md rounded-sm shadow-sm object-cover" />
                                    <div className="md:p-4 p-0 pt-3">
                                        <h3 className="md:text-lg text-sm poppins font-medium">{article.headline}</h3>
                                        <div className="flex justify-between mt-2">
                                            <span>Likes: {article.likes}</span>
                                            <span>Comments: {article.comments.length}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
