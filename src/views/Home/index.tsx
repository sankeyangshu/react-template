import reactLogo from '@/assets/react.svg';
import SwitchDark from '@/components/SwitchDark';
import './index.less';

import viteLogo from '/vite.svg';

const Home = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <SwitchDark />
      <h1>欢迎使用 React-Template-Base 模板</h1>
    </>
  );
};

export default Home;
