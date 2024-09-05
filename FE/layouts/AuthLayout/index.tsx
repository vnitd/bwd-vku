import { ReactNode } from "react";

import * as S from "./styles";

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default AuthLayout;
