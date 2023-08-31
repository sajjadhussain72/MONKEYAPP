import React, {useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 const App =()=> {
  const  country = 'us'
  const apiKey = process.env.REACT_APP_API_KEY
  const[ progress, setProgress] = useState(0)
 
    return (
      <BrowserRouter>
        <div>
          <LoadingBar
            color='#f11946'
            progress ={progress}
            height={3}
          />
            <Navbar/>
          <Routes>
            <Route exact path="/" element=
               {<News setProgress={setProgress} apiKey={apiKey} key='general'  country={country} category="general"/>} />
            <Route exact path="/business" element=
               {<News setProgress={setProgress} apiKey={apiKey}key="business"  country={country} category="business"/>}/>
            <Route exact path="/entertainment" element=
               {<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country={country} category="entertainment"/>}/>
            <Route exact path="/health" element=
               {<News setProgress={setProgress} apiKey={apiKey} key="health" country={country} category="health" /> }/>
            <Route exact path="/science" element=
               {<News setProgress={setProgress} apiKey={apiKey}key="science" country={country} category="science" /> }/>
            <Route exact path="/sports" element=
               {<News setProgress={setProgress} apiKey={apiKey}key="sports" country={country} category="sports" /> } />
            <Route exact  path="/technology"  element=
               {<News setProgress={setProgress} apiKey={apiKey}key="technology" country={country} category="technology" />  }/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    
    );
  }
  export default App
