import { toast } from "react-toastify";

export const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};

export const toastError = (message) => {
  toast.error(message, options);
};

export const toastSuccess = (message) => {
  toast.success(message);
};
export const toastErrorLogin = () => {
  toast.dark("Couldn't login, try again");
};
