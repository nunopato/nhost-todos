import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Login } from "components/login";
import { AuthGate } from "components/auth-gate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import { auth } from "utils/nhost";

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint="http://localhost:8080/v1/graphql"
      >
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <AuthGate>
            <Route exact path="/">
              <App />
            </Route>
            </AuthGate>
          </Switch>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
