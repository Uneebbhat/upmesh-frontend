import React from "react";
import useFormHandler from "../useFormHandler";
import { ForgotPasswordFormProps } from "@/interfaces/User";
import { HandleOnSubmit } from "@/types/form";

const useForgotPassword = () => {
  const { formData, loading, setLoading, setFormData, handleOnChange } =
    useFormHandler<ForgotPasswordFormProps>({
      email: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formData);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, formData, setFormData, handleOnChange, handleOnSubmit };
};

export default useForgotPassword;
