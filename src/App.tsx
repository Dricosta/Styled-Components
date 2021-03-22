import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Layout from "./components/Layout";
import { ThemeProviderApp } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProviderApp>
        <Layout>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Layout>
      </ThemeProviderApp>
    </>
  );
}

export default App;
