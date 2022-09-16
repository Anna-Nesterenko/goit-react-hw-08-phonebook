import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainBar } from 'components/MainBar/MainBar';
import { WrapperHeader, WrapperMain } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <WrapperHeader>
        <MainBar />
      </WrapperHeader>
      <WrapperMain>
        <Suspense fallback="Wait a little bit...">
          <Outlet />
        </Suspense>
      </WrapperMain>
    </>
  );
};
