import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { WrapperHeader, WrapperMain } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <WrapperHeader>
        <Navigation />
      </WrapperHeader>
      <WrapperMain>
        <Suspense fallback="Wait a little bit...">
          <Outlet />
        </Suspense>
      </WrapperMain>
    </>
  );
};
