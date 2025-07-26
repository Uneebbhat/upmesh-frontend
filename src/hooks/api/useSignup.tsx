"use client";

import axios from "axios";
import useFormHandler from "../useFormHandler";

import { toast } from "sonner";
import { HandleOnSubmit } from "@/types/form";
import { Role, SignupFormDataProps } from "@/interfaces/User";
import { useRouter } from "next/navigation";

const useSignup = () => {
  const router = useRouter();
  const {
    formData,
    loading,
    setLoading,
    setFormData,
    handleOnChange,
    handleOnFileChange,
  } = useFormHandler<SignupFormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePic: null,
    role: Role.developer,
    otherRole: Role.other || "",
  });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const { data } = await axios.post("/api/signup", formData);
      // console.log(data);
      // toast.success(data.message);
      console.log(formData);

      router.push("/");
    } catch (error: unknown) {
      // if (axios.isAxiosError(error)) {
      //   toast.error(error.response?.data.error);
      // }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    setFormData,
    handleOnSubmit,
    handleOnChange,
    handleOnFileChange,
  };
};
export default useSignup;
