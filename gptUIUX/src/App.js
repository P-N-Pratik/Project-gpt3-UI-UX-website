// import logo from './logo.svg';
import './App.css';
// import Article from './components/article/Article';
// import Brand from './components/article/Article';
// import Cta from './components/article/Article';
// import Feature from './components/article/Article';
// import Navbar from './components/article/Article';

import {Brand,Cta,Navbar} from './components';
import {Footer, Blog, Possibility,Features,WhatGPT3,Header} from './containers';

function App(){
  return(
    <div classsName="APP">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      
    </div>




  );
}

// ByDefault
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
