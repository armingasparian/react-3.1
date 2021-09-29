import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content"> 
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} 
                                                        addPost={props.addPost} 
                                                        updateNewPostText={props.updateNewPostText}/>}
                                                        />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
