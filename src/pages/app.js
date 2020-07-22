import React from "react"
import { Router, Link } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
    <Link to='/app/profile'>PROFIL</Link>
    <Link to='/app/login'>LOGIN</Link>

  </Layout>
)

export default App;
