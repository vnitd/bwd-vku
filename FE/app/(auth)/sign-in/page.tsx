"use client";
import { AvatarIcon, LockFilledIcon } from "@nextui-org/shared-icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import * as S from "./styles";

import { title } from "@/components/primitives";

function SignIn() {
  return (
    <div className="sign-in-page">
      <S.TitleWrapper>
        <h1 className={title({ size: "sm" })}>SIGN_IN</h1>
        <p>SIGN_IN_DESCRIPTION</p>
      </S.TitleWrapper>
      <S.FormWrapper className="flex flex-col justify-between gap-5">
        <Input
          label="ID_OR_EMAIL_LABEL"
          labelPlacement="outside"
          name="acc"
          startContent={<AvatarIcon />}
          type="text"
        />
        <Input
          label="PASSWORD_LABEL"
          labelPlacement="outside"
          name="password"
          startContent={<LockFilledIcon />}
          type="password"
        />
        <S.InputWrapper>
          <Button
            fullWidth
            color="primary"
            size="lg"
            type="submit"
            variant="shadow"
          >
            SIGN_UP
          </Button>
          <p className="text-center text-xs mt-2">LINCES_ACCEPT</p>
        </S.InputWrapper>
        <S.InputWrapper className="flex justify-center gap-1">
          <p>NOT_HAVE_ACCOUNT</p>
          <Link color="primary" href="/sign-up">
            SIGN_UP
          </Link>
        </S.InputWrapper>
      </S.FormWrapper>
    </div>
  );
}

export default SignIn;
