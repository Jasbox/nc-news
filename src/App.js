
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import ArticleItem from './components/ArticleItem';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllArticles from './components/AllArticles';

function App() {
  const [articles, setArticles] = useState([])
  return (
    
    <div className="App">
      <Header />
      <Navbar />
       <main>
         <Routes>
           <Route 
               path="/"
               element={<AllArticles articles={articles} setArticles={setArticles}/>}
                />
            <Route
                path='/article/:article_id' element={<ArticleItem />} />
         </Routes>
       </main>
      
     
    </div>
  );
}

export default App;
