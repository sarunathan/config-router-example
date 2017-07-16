import calculatorHeader from "./pages/calculator-header.jsx";
import calculator from "./pages/calculator.jsx";
import Router from "config-router";
import ReactAdapter from "./react-adapter";
import { createStore,compose } from 'redux'
import reducers from './reducers/calc.js'


const store = createStore(reducers,{},window.devToolsExtension ? window.devToolsExtension() : f => f);
window.store = store;
ReactAdapter.init({
    dataStore : store
});

// Init Router
Router.init({
    "react": ReactAdapter,
    "default": ReactAdapter
});

Router.configure([
    {
        path: "/",
        name: "root",
        moduleConfig: {
            moduleName: 'calculatorHeader',
            type: "react",
            instanceConfig: {
                placeholders: {},
                container: '#root'
            },
            module: calculatorHeader
        }
    },
    {
        name: 'index',
        path: '/index',
        moduleConfig: {
            moduleName: 'calculatorHeader',
            type: "react",
            instanceConfig: {
                placeholders: {},
                container: '#root'
            },
            module: calculatorHeader
        }
    },
    {
        name: 'index.calc',
        path: '/calc',
        moduleConfig: {
            moduleName: 'calculator',
            type: "react",
            instanceConfig: {
                placeholders: {},
                container: '#app-container'
            },
            module: calculator
        }
    }
], {
    useHash: true,
    ignoreConstraints:true,
    hashPrefix: '',
    trailingSlash: true,
    logger: true,
    history: true,
    listener: true,
    autoCleanUp: false,
    strictQueryParams: false,
    defaultRoute: "index.calc"
});


Router.start();
