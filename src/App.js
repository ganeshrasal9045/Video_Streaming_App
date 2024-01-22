import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
    {
      path:"/",
      element: <Main />
    },
    {
      path:"/watch",
      element: <WatchPage />
    },
  ]
}])

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
