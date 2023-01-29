import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './Component/MainPage';
import NewsPage from './Component/NewsPage';
import { useEffect } from 'react';
function App() {
  return (
    <div className="App" dir='rtl'>
        <BrowserRouter>
          <Switch>
            {/* <Redirect from="/" to="/profile" /> */}
            <Route path={"/MainPage"} key={"MainPage"} render={() => <MainPage></MainPage>} />
            <Route path={"/news"} key={"NewsPage"} render={() => <NewsPage></NewsPage>} />
            <Redirect from="/" to="/MainPage" />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
