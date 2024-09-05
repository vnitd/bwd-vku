"use client";
import { AvatarIcon, LockFilledIcon, MailIcon } from "@nextui-org/shared-icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import * as S from "./styles";

import { title } from "@/components/primitives";
import { useRegisterMutation } from "@/store/queries/auth";

function SignUp() {
  const [registerMutation, {}] = useRegisterMutation();
  const [formData, setFormData] = useState<any>({});
  const { push } = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (evt: any) => {
    evt.preventDefault();
    console.log(formData);
    try {
      await registerMutation(formData).unwrap();

      toast.success("LOGIN_SUCCESS", {
        onClose: () => {},
      });
      push("/sign-in");
    } catch (err: any) {
      toast.error(err?.data?.result);
    }
  };

  const validateForm = () => {
    if (!formData?.sid) toast.error("SID_REQUIRED");
    if (!formData?.email) toast.error("EMAIL_REQUIRED");
    if (!formData?.password) toast.error("PASSWORD_REQUIRED");
    if (!formData?.repassword) toast.error("REPASS_REQUIRED");
  };

  return (
    <div className="sign-up-page">
      <S.TitleWrapper>
        <h1 className={title({ size: "sm" })}>SIGN_UP</h1>
        <p>SIGN_UP_DESCRIPTION</p>
      </S.TitleWrapper>
      <S.FormWrapper
        className="flex flex-col justify-between gap-5"
        onSubmit={submitHandler}
      >
        <Input
          required
          label="ID_LABEL"
          labelPlacement="outside"
          name="sid"
          startContent={<AvatarIcon />}
          type="text"
          value={formData?.sid}
          onChange={handleChange}
        />
        <Input
          label="EMAIL_LABEL"
          labelPlacement="outside"
          name="email"
          startContent={<MailIcon />}
          type="email"
          value={formData?.email}
          onChange={handleChange}
        />
        <Input
          label="PASSWORD_LABEL"
          labelPlacement="outside"
          name="password"
          startContent={<LockFilledIcon />}
          type="password"
          value={formData?.password}
          onChange={handleChange}
        />
        <Input
          label="REPASSWORD_LABEL"
          labelPlacement="outside"
          name="repassword"
          startContent={<LockFilledIcon />}
          type="password"
          value={formData?.repass}
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
            SIGN_UP
          </Button>
          <p className="text-center text-xs mt-2">LINCES_ACCEPT</p>
        </S.InputWrapper>
        <S.InputWrapper className="flex justify-center gap-1">
          <p>HAVE_ACCOUNT</p>
          <Link color="primary" href="/sign-in">
            SIGN_IN
          </Link>
        </S.InputWrapper>
      </S.FormWrapper>
    </div>
  );
}

export default SignUp;