import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import style from "./App.css";
import {history} from "./helpers/history";
import LoginPage from "./components/LoginPage";
import {alertActions} from "./actions/alert.actions";
import userActions from "./actions/user.actions";
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";
import CreateConfetti from "./components/confetti";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      console.log("pathname:" + location.pathname);
      this.props.clearAlerts();
    });

  }

  componentDidMount() {
     if(history.location.pathname !== '/loginSignIn' && history.location.pathname !== '/loginSignUp') {
      let token = localStorage.getItem('user');
      if (token) {
        this.props.getProfile(token);
      } else history.push('/start');
     }
  }

  render() {
    console.log("Im in App");
    return (
              // alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>

              <Router history={history}>
                <Switch>
                  <Route exact path={["/", "/lost", "/profile", "/edit", "/activities"]} render={props => (
                      this.props.token ?
                          <MainPage/> :
                          <CreateConfetti/>
                          // <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                  )}/>
                  <Route exact path="/start" component={StartPage}/>
                  <Route exact path={["/loginSignIn", "/loginSignUp"]} component={LoginPage}/>
                  {/*<Redirect from="*" to="/"/>*/}
                  {/*<Route exact path="/lost" render={props => (*/}
                  {/*    this.props.token ?*/}
                  {/*        <MainPage/> :*/}
                  {/*        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>*/}
                  {/*)}/>*/}
                  {/*<Route exact path="/lost" component={MainPage}/>*/}
                </Switch>
               </Router>
    );
  }
}

function mapState(state) {
  const { alert, token } = state;
  return { alert, token };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  login: userActions.login,
  getProfile: userActions.getProfile
};

export default connect(mapState, actionCreators)(App);
