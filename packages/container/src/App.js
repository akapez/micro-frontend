import React, { lazy, Suspense, useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
});

const history = createBrowserHistory();

export default () => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        if (signIn) {
            history.push("/dashboard");
        }
    }, [signIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setSignIn(false)} isSignIn={signIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setSignIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!signIn && <Redirect to="/" />}
                                <DashboardApp />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};