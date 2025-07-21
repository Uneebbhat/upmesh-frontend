import React, { useState } from "react";
import useFormHandler from "../useFormHandler";
import { ResetPasswordFormProps } from "@/interfaces/User";
import { HandleOnSubmit } from "@/types/form";

const useResetPassword = () => {
  const { loading, formData, setLoading, setFormData, handleOnChange } =
    useFormHandler<ResetPasswordFormProps>({
      newPassword: "",
    });
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
      setSuccess(true);
    } catch (error: unknown) {
      console.log(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    success,
    formData,
    setFormData,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useResetPassword;
