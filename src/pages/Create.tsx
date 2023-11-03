import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../api/Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { user } from "../global/recoil";
import {useRecoilState} from "recoil"

const Create = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const [state, setState] = useRecoilState(user)

  console.log(state._id)
  const schema = yup.object({
    location: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
  });

  const onHandleImage = (e: any) => {
    try {
      const file = e.target.files[0];
      const realImage: any = URL.createObjectURL(file);
      setImage(realImage);
      setAvatar(file);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { email, location, name } = data;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("avatar", avatar);

    createUser(formData).then((res: any) => {
      if (res) {
        setState(res)
        Swal.fire({
          icon: "success",
          title: "Created Successfully",
          text: "it great to have you here",
          timerProgressBar: true,
          timer: 3000,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "not created, internet connection not available",
          timerProgressBar: true,
          timer: 3000,
        });
      }
      navigate("/create-user");
    });
    reset();
  });
  return (
    <div className="w-full h-[calc(100vh-70px)] bg-gray-100 flex justify-center items-center">
      <form
        className="border w-[300px] min-h-[200px] shadow-md bg-white text-black rounded-md p-3"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-center flex-col">
          <img
            src={image}
            alt=""
            className="w-[100px] h-[100px] border rounded object-cover mb-2"
          />
          <input
            type="file"
            id="pix"
            onChange={onHandleImage}
            className="hidden"
          />
          <label
            htmlFor="pix"
            className="w-[100px] h-[40px] bg-black text-white flex justify-center items-center rounded-md mb-2 hover:cursor-pointer duration-300 transition-all"
          >
            upload pic
          </label>
        </div>
        <div className="mb-2">
          <div className="font-semibold">name</div>
          <input
            type="text"
            placeholder="enter name"
            {...register("name")}
            className="w-full h-[40px] rounded-md pl-[10px] outline-none
                 placeholder:text-[13px] border"
          />
          {errors.name && (
            <div className="text-[10px] text-red-500 flex justify-end">
              please fill here
            </div>
          )}
        </div>

        <div className="mb-2">
          <div className="font-semibold">email</div>
          <input
            type="text"
            placeholder="enter email"
            {...register("email")}
            className="w-full h-[40px] rounded-md pl-[10px] outline-none
                 placeholder:text-[13px] border"
          />
          {errors.email && (
            <div className="text-[10px] text-red-500 flex justify-end">
              please fill here
            </div>
          )}
        </div>

        <div className="mb-2">
          <div className="font-semibold">address</div>
          <input
            type="text"
            placeholder="enter home address"
            {...register("location")}
            className="w-full h-[40px] rounded-md pl-[10px] outline-none
                 placeholder:text-[13px] border"
          />
          {errors.location && (
            <div className="text-[10px] text-red-500 flex justify-end">
              please fill here
            </div>
          )}
        </div>

        <button
          className="w-full h-[40px] rounded-md hover:cursor-pointer duration-300 transition-all bg-black text-white mt-1"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Create;
