import React, { useState } from 'react';
// import HeaderNavTabs from './HeaderNavTabs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
import Nav from './BasicExample';


export default function HeaderNavChange() {
  const [currentPage, setCurrentPage] = useState(0);

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Menu') {
      
     
      return <Menu />;
    }
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
   
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
     
      {/* Here we are calling the renderPage method which will return a component  */}
      
      </div>
      <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
      </div>
  );
}
