import { useEffect } from 'react';
import SvgIcon from '@/components/SvgIcon';
import { useTheme } from '@/hooks/useTheme';
import { useSettingStore } from '@/store/setting';
import moduleCss from './index.module.less';

const SwitchDark = () => {
  // 获取全局状态管理仓库中系统设置状态
  const [isDark, setThemeDark] = useSettingStore((state) => [state.isDark, state.setThemeDark]);

  // 获取切换暗黑模式hooks
  const { switchDark } = useTheme();

  // 切换暗黑模式
  const onClickToggleDark = () => {
    setThemeDark(!isDark);
    switchDark();
  };

  // 初始化主题
  useEffect(() => {
    switchDark();
  }, [isDark]);

  return (
    <div className={moduleCss['switch-dark']} onClick={onClickToggleDark}>
      {isDark ? (
        <SvgIcon icon="Moon" className={moduleCss['switch-svg']}></SvgIcon>
      ) : (
        <SvgIcon icon="Sunny" className={moduleCss['switch-svg']}></SvgIcon>
      )}
    </div>
  );
};

export default SwitchDark;
