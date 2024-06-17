import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [
    // 此预设尝试提供流行的实用程序优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等
    presetUno(),

    // 属性模式(在 class 属性过多的情况下优先使用属性模式，否则将会变得难以维护) https://unocss.dev/presets/attributify#attributify-mode
    presetAttributify(),

    // 图标预设: https://unocss.dev/presets/icons
    presetIcons({ scale: 1.2, warn: true }),
  ],

  // 一些实用的自定义组合
  shortcuts: {
    'm-0-auto': 'm-0 ma', // margin: 0 auto
    'wh-full': 'w-full h-full', // width: 100%, height: 100%
    'flex-center': 'flex justify-center items-center', // flex布局居中
    'flex-x-center': 'flex justify-center', // flex布局：主轴居中
    'flex-y-center': 'flex items-center', // flex布局：交叉轴居中
    'text-overflow': 'overflow-hidden whitespace-nowrap text-ellipsis', // 文本溢出显示省略号
    'text-break': 'whitespace-normal break-all break-words', // 文本溢出换行
  },

  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
});
