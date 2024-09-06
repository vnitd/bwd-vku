"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AvatarIcon, LockFilledIcon } from "@nextui-org/shared-icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { toast } from "react-toastify";

import * as S from "./styles";

import { title } from "@/components/primitives";
import language from "@/config/language";
import { useLoginMutation } from "@/store/queries/auth";
import { webStorageClient } from "@/types";

function SignIn() {
  const [loginMutation, {}] = useLoginMutation();
  const [formData, setFormData] = useState<any>({});
  const { push } = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await loginMutation(formData).unwrap();

      console.log(res);
      webStorageClient.setToken(res?.result, {
        path: "/",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      toast.success(language["LOGIN_SUCCESS"], {
        onClose: () => {},
      });
      push("/");
    } catch (err: any) {
      toast.error(language[err?.data?.result as string] || err?.data?.result);
    }
  };

  const validateForm = () => {
    if (!formData?.acc) toast.error(language["SID_REQUIRED"]);
    if (!formData?.password) toast.error(language["PASSWORD_REQUIRED"]);
  };

  return (
    <div className="sign-in-page">
      <S.TitleWrapper>
        <h1 className={title({ size: "sm" })}>{language["SIGN_IN"]}</h1>
        <p>{language["SIGN_IN_DESCRIPTION"]}</p>
      </S.TitleWrapper>
      <S.FormWrapper
        className="flex flex-col justify-between gap-5"
        onSubmit={handleSubmit}
      >
        <Input
          label={language["ID_OR_EMAIL_LABEL"]}
          labelPlacement="outside"
          name="acc"
          startContent={<AvatarIcon />}
          type="text"
          value={formData?.acc}
          onChange={handleChange}
        />
        <Input
          label={language["PASSWORD_LABEL"]}
          labelPlacement="outside"
          name="password"
          startContent={<LockFilledIcon />}
          type="password"
          value={formData?.password}
          onChange={handleChange}
        />
        <S.InputWrapper>
          <Button
            fullWidth
            color="primary"
            size="lg"
            type="submit"
            variant="shadow"
            onClick={validateForm}
          >
            {language["SIGN_IN"]}
          </Button>
        </S.InputWrapper>
        <S.InputWrapper className="flex justify-center gap-1">
          <p>{language["NOT_HAVE_ACCOUNT"]}</p>
          <Link color="primary" href="/sign-up">
            {language["SIGN_UP_LINK"]}
          </Link>
        </S.InputWrapper>
      </S.FormWrapper>
    </div>
  );
}

export default SignIn;
