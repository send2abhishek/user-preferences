import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "components/login/";
import Register from "components/register/";
import Home from "components/home/";
import Layout from "containers/layout/";
import PrivateRoute from "routes/privateRoutes/";
import { autoLogin } from "reduxSlices/themeSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(autoLogin());

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
