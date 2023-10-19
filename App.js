import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import PostTypeSelector from './Components/PostTypeSelector';
import QuestionSection from './Components/QuestionForm';
import ArticleSection from './Components/ArticleForm';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
       <SearchBar />
       <PostTypeSelector onSelect={handlePostTypeChange}/>
       {selectedPostType === 'question' ? <QuestionSection /> : null}
      {selectedPostType === 'article' ? <ArticleSection /> : null}
     
    </div>
  );
}

export default App;
