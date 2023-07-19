import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// Page and layout imports below
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import ReviewDetails from './Pages/ReviewDetails';
import Category from './Pages/Category';

// Apollo client for new connection...
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
      <div className="App">
        <Header/>
        <ApolloProvider client={client}>
          <Routes>
            <Route exact path="/" element={<Homepage />}/>
            <Route path="/details/:id" element={<ReviewDetails />}/>
            <Route path="/category/:id" element={<Category />}/>
          </Routes>
        </ApolloProvider>
      </div>
  );
}

export default App;
