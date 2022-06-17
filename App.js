// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Newcomponent from './newcomponent';

function App() {
  return (
    <div className="App">
      <Navbar heading="Textutils" About="About us" homemenu="myHome"/>
      <TextForm/>
      <Newcomponent/>
    </div>
  );
}

export default App;
