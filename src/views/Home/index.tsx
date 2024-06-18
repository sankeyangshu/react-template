import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import reactLogo from '@/assets/react.svg';
import SwitchDark from '@/components/SwitchDark';

const Home = () => {
  const [contentList] = useState([
    '✔ 👑 React18 + Vite5',
    '✔ 🍕 TypeScript',
    '✔ ✨ React Vant 组件库',
    '✔ 🌀 UnoCSS 原子类框架',
    '✔ 🔥 Zustand 状态管理',
    '✔ 🚀 React-Router v6',
    '✔ 🎉 React Hooks',
    '✔ 🌓 支持深色模式',
    '✔ 🎄 支持主题定制',
    '✔ 🎃 支持 SVG 图标自动注册组件',
    '✔ 👓 vmin 视口适配',
    '✔ 🎨 Axios 封装',
    '✔ 🎁 打包资源 gzip 压缩',
    '✔ 🧲 ESLint',
    '✔ 🎈 Prettier',
    '✔ 🌈 Stylelint',
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in-right');
      }, index * 200); // 每个元素增加0.2秒的延迟
    });
  }, []);

  return (
    <>
      <div className="w-full flex-center flex-col px-[12px] box-border">
        <img
          src={reactLogo}
          className="w-[120px] mx-auto mb-[20px] mt-[30px] block hover:drop-shadow-[0_0_2em_#61dafbaa]"
          alt="React logo"
        />
        <div className="mb-[10px] text-[24px] lh-none">React-Template</div>
        <div className="p-[10px] text-[14px] rounded-[4px] bg-[var(--color-block-background)]">
          基于 React18、React-Router v6、React-Hooks、Zustand、TypeScript、Vite 构建工具，开箱即用的
          H5 移动端项目基础模板
        </div>
        <div className="w-full m2 flex-center">
          <a href="https://github.com/sankeyangshu/react-template" target="_blank">
            <Icon icon="carbon:logo-github" className="text-[20px] color-[var(--color-text)]" />
          </a>
          <div className="ml-4">
            <SwitchDark />
          </div>
        </div>
        <div className="w-full p-[10px] flex justify-start flex-col">
          {contentList.map((item, index) => (
            <div
              key={item}
              className="text-[18px] leading-[30px] animate-on-load op0 animate-duration-2s animate-ease-in-out animate-forwards"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
