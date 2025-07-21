import axios from "axios";
import useFormHandler from "../useFormHandler";

import { toast } from "sonner";
import { HandleOnSubmit } from "@/types/form";
import { LoginFormDataProps } from "@/interfaces/User";
import { useRouter } from "next/navigation";
import { resolve } from "path";

const useLogin = () => {
  const router = useRouter();
  const { formData, loading, setFormData, setLoading, handleOnChange } =
    useFormHandler<LoginFormDataProps>({
      email: "",
      password: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const { data } = await axios.post("/api/login", formData);
      // console.log(data);
      // toast.success(data.message);

      await new Promise((resolve) => setTimeout(resolve, 2000));
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

  return { loading, formData, setFormData, handleOnSubmit, handleOnChange };
};

export default useLogin;
