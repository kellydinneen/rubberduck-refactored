import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Prescription from '../Prescription/Prescription';
import Submission from '../Submission/Submission';
import ErrorPage from '../ErrorPage/ErrorPage'
import './App.css';

const App = () => {

  return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Header home={true} submit={false}/>
                <Home />
              </>
            )}
          />
          <Route
            path="/form"
            render={() => (
              <>
                <Header home={false} submit={false}/>
                <main>
                <Form />
                </main>
              </>
            )}
            exact
          />
          <Route
            path="/advice/:type"
            render={({match}) => (
              <>
                <Header home={false} submit={false}/>
                <main>
                <Prescription type={match.params.type} />
                </main>
              </>
            )}
            exact
          />
          <Route
            path="/submit"
            render={() => (
              <>
                <Header home={false} submit={true}/>
                <main>
                <Submission />
                </main>
              </>
            )}
            exact
          />
          <Route render={() => (
            <>
              <Header home={false} submit={false}/>
              <div className="error-wrapper">
                <ErrorPage message={"We don't have a page here."}/>
              </div>
            </>
          )}
          />
          </Switch>
        </>
  )
}
export default App
