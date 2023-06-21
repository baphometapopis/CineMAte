import './App.css';
import { Header } from './component/header/Header';
import { Navigation } from './Router/Navigation';

function App() {
  return (
    <div className='App'>
     
    <Header/>      
    <main>
    <Navigation/>
    </main>    </div>
);}

export default App;
