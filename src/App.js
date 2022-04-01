import React from 'react';
import DataTable from './component/DataTable';
import MyJob from './component/MyJob';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DataTable />}></Route>
          <Route path="/myjob" element={<MyJob />}></Route>
        </Routes>     
        </BrowserRouter>
    </div>
  )
  };


