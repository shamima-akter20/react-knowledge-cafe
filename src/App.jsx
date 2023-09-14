import { useState } from 'react';
import './App.css'
import Blogs from './assets/Blogs.jsx';
import Bookmark from './Bookmark.jsx';
import Header from './header';

function App() {
 const[bookmarks, setBookmarks] = useState{[]};

 const handleAddToBookmark = blog => {
  console.log('Bookmark adding soon');
 }

  return (
    <>
     <Header></Header> 
     <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmark></Bookmark>
     </div>
    </>
  )
}

export default App
