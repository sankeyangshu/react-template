import { HashRouter } from 'react-router-dom';
import Router from './routers';

const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};

export default App;
