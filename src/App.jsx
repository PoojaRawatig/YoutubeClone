import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ListItems from './components/ListItems';
import Mapp from './components/Mapp';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar className="w-1/4 bg-gray-100 p-4" />
        <div className="flex-1 p-4">
          <ListItems />
          <Mapp />
        </div>
      </div>
    </div>
  );
}

export default App;
