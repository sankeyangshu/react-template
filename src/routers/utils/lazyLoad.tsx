import React, { Suspense } from 'react';
import { Loading } from 'react-vant';

/**
 * 路由懒加载
 * @param Component 需要访问的组件
 * @return element
 */
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <Loading
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        />
      }
    >
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
