import './App.css';
import Navbar from 'components/Navbar/Navbar';
import WrapperRoutes from 'components/WrapperRoutes';
import WrapperContext from 'components/WrapperContext';

function App() {
  return (
    <div className="App">
      <WrapperContext>
        <Navbar />
        <WrapperRoutes />
      </WrapperContext>
    </div>
  );
}

export default App;
