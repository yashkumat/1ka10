import './App.css';
import Navbar from './components/Navbar'
import Board from './components/Board'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
