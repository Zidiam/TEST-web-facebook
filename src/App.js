import './App.css';
import './resources/facebookSDK';
import ShareButton from './components/shareButton';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
function App() {

  return (

    <div className="App"> Facebook
      <div className="App-buttons">
        <div id = "Out Of Account Buttons">
          <LoginButton/>
          <LogoutButton/>
        </div>
        <div className="App-header" id = "In Account Buttons">
          <ShareButton/>
        </div>
      </div>
    </div>
  );

}

export default App;
