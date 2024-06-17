import autoprefixer from 'autoprefixer';
import mobile from 'postcss-mobile-forever';

// mobile配置项 https://github.com/wswmsword/postcss-mobile-forever/blob/main/README.md
const mobileOptions = {
  appSelector: '#root', // 根元素选择器，用于设置桌面端和横屏时的居中样式
  viewportWidth: 375, // 设计稿的视口宽度，可传递函数动态生成视图宽度
  // viewportWidth: file => (file.includes('node_modules/react-vant/') ? 375 : 750), // 只将 vant 转为 375 设计稿的 viewport，其它样式的视图宽度为 750
  unitPrecision: 3, // 转化精度，转换后保留位数
  maxDisplayWidth: 600, // 限制视口单位的最大宽度
  propList: ['*'], // 哪些属性要替换，哪些属性忽略？用法参考https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
  selectorBlackList: ['.ignore'], // 选择器黑名单，名单上的不转换
  valueBlackList: ['1px solid'], // 属性值黑名单，名单上的值不转换
  mobileUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
};

export default {
  plugins: [
    autoprefixer(),
    mobile({
      ...mobileOptions,
    }),
  ],
};
