import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'react-vant';
import Router from './routers';

const App = () => {
  return (
    <ConfigProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  );
};

export default App;
