import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import firebase from "./firebase-config";

const List = () => {
  const { addToast } = useToasts();
  const [posts, setP] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const db = firebase.firestore();
      // const data = await db.collection('posts');
      const querySnapshot = await db.collection('posts').get(); 
      const temp = [];
      querySnapshot.forEach((doc) => { 
        temp.push({header: doc.data().header, text: doc.data().text}); 
      });
      setP(temp);
      addToast('Прочитано!', {
        appearance: 'success',
        autoDismiss: true,
      })
    }
    fetchData();
  }, []);
return <>
  <h1>Посты</h1> <Link to="/" >Спрятать</Link>
  <table><tbody>{posts.map((pst, i) => <tr key={i}><td>{pst.header}</td><td>{pst.text}</td></tr>)}</tbody></table>  
</>
};
 
function App() {
  
  return <ToastProvider>
    <div className="App">
      <h1>Посты и не только</h1>
      
      <BrowserRouter>
      <Link to="/posts" >.. к постам</Link>
        <Route exact path="/posts" component={List} />
         
      </BrowserRouter>
    </div>
    </ToastProvider>;
}

export default App;
