
import './App.scss';
import Chatlist from './Components/Chatlist/Chatlist';
import Topbar from './Components/Topbar/Topbar';
import Search from './Components/Search/Search';
import Chatside from './Components/Chatside/Chatside';
function App() {
  return (
    <>
    {
      false? (
        <login />
      ):
      (
    <div className="App">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="middleApp">
        {/* Below is the Left section of the app */}
        <div className="LColumn">
        <div className="Sc"><Search /></div>  
          <Chatlist />
        </div>

        {/* Below is the right section of the app */}
        <div className="RColumn">
          <Chatside />
        </div>
      </div>
    </div>
      )}
    </>
  );
}
export default App;
