import * as React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
