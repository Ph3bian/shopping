import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./components/AppRouter";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 5000 });

const App = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
