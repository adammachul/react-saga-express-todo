import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from '../homepage';

// TODO: Paths codesplitting, remove imports from top and add NODE_PATH

export const routes = [
    {
        path: "/",
        component: Homepage,
        exact: true
    },
    {
        path: "/auth",
        component: "auth",
        routes: [
            {
                path: "/login",
                component: "Login",
            },
            {
                path: "/register",
                component: "Register"
            }
        ]
    },
    {
        path: "/todos/:page",
        component: "todolist"
    }
];

export const RouteWithSubroutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);