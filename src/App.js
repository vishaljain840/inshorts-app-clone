import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './App.css';
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apiKey from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

    } catch(error) {
      console.log(error);
    }
  };



  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadmore])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}  />

      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
