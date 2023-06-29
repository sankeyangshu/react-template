import { create } from 'zustand';

/**
 * 系统设置store类型
 */
export interface settingsStoreType {
  isDark: boolean;
  setThemeDark: (value: boolean) => void;
}

export const useSettingStore = create<settingsStoreType>()((set) => ({
  isDark: false, // 深色模式 切换暗黑模式

  // 设置暗黑模式
  setThemeDark: (value: boolean) => set({ isDark: value }),
}));
