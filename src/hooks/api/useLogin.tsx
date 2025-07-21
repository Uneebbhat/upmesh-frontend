import { LoginFormDataProps } from "@/interfaces/User";
import useFormHandler from "../useFormHandler";
import { HandleOnSubmit } from "@/types/form";
import axios from "axios";
import { toast } from "sonner";

const useLogin = () => {
  const { formData, loading, setFormData, setLoading, handleOnChange } =
    useFormHandler<LoginFormDataProps>({
      email: "",
      password: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/login", formData);
      console.log(data);
      toast.success(data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, formData, setFormData, handleOnSubmit, handleOnChange };
};

export default useLogin;
