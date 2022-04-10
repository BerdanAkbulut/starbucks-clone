import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import * as EmailValidator from "email-validator";
import ReportProblemSharpIcon from "@mui/icons-material/ReportProblemSharp";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { userState } from "../atoms/userAtom";
import { useRecoilState } from "recoil";
import useLocalStorage from "../hooks/useLocalStorage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useRouter } from "next/router";

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const [userStat3, setUserStat3] = useRecoilState(userState);

  const [persistUserState, setPersistUserState] = useLocalStorage("user", null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordAgain: "",
      name: "",
      lastname: "",
    },
  });

  const onSubmit = ({ email, password, name, lastname }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.displayName = name + " "  + lastname
        setPersistUserState(userCredential.user);
        setUserStat3(persistUserState);

        toast.success("Register Success, Redirecting..");
        router.push("/");
        // ...
      })
      .catch((error) => {
        console.log(error)
        toast.warning("Register failed");
      });
  };

  return (
    <div className="relative flex flex-col w-screen h-screen  items-center gap-8">
      
      <Head>
        <title>Sign Up | Starbucks Coffe</title>
      </Head>
      <div className="absolute right-0 top-0">
      <ToastContainer autoClose={2000}/>
      </div>
      <div className=" w-full h-[120px] flex flex-row border-4 items-center overflow-hidden">
        <Link href="/">
          <div className=" cursor-pointer  ml-12 mt-3 overflow-hidden">
            <Image
              src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
              height="100px"
              width="100px"
              objectFit="contain"
              alt="logo"
            />
          </div>
        </Link>

        <h3 className="text-center m-auto tracking-widest font-serif text-[24px]">
          Sign Up Now !
        </h3>
      </div>

      <div className="relative flex flex-col justify-center signUpBox w-[500px] h-[650px] rounded-lg bg-slate-100">
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-6 items-center justify-center">
              <h2 className="absolute top-16 text-center font-mono text-[20px] tracking-widest">
                Sign Up
              </h2>
              <div>
                <Controller
                  name="name"
                  rules={{
                    required: true,
                    minLength: { value: 2 },
                    maxLength: 30,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="w-[300px] text-xs md:text-[16px] font-serif tracking-wider md:w-[400px]"
                      placeholder="Enter your Name"
                      {...field}
                    />
                  )}
                />

                {errors.name?.type === "required" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Name is required
                  </p>
                )}
                {errors.name?.type === "minLength" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Name is minimum 2 characters
                  </p>
                )}
              </div>
              <div>
                <Controller
                  name="lastname"
                  rules={{
                    required: true,
                    minLength: { value: 2 },
                    maxLength: 30,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="w-[300px] text-xs md:text-[16px] font-serif tracking-wider md:w-[400px]"
                      placeholder="Enter your Lastname"
                      {...field}
                    />
                  )}
                />

                {errors.lastname?.type === "required" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Lastname is required
                  </p>
                )}
                {errors.lastname?.type === "minLength" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Lastname is minimum 2 characters
                  </p>
                )}
              </div>

              <div>
                <Controller
                  name="email"
                  rules={{
                    required: true,
                    minLength: { value: 8 },
                    maxLength: 30,
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      color={
                        EmailValidator.validate(watch("email"))
                          ? "success"
                          : "error"
                      }
                      className="w-[300px] text-xs md:text-[16px] font-serif tracking-wider md:w-[400px]"
                      placeholder="Enter your Email"
                      {...field}
                    />
                  )}
                />
                {!EmailValidator.validate(watch("email")) && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Not a valid Email
                  </p>
                )}

                {errors.email?.type === "required" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Email is required
                  </p>
                )}
                {errors.email?.type === "minLength" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Email is minimum 8 characters
                  </p>
                )}
              </div>

              <div className="relative overflow-y-hidden">
                <Controller
                  name="password"
                  rules={{
                    required: true,
                    maxLength: 20,
                    minLength: { value: 8 },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      color={errors.password ? "error" : "success"}
                      className="w-[300px] text-xs md:text-[16px] font-serif tracking-wider md:w-[400px]"
                      type={showPassword ? "" : "password"}
                      placeholder="Enter your Password"
                      {...field}
                    />
                  )}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                >
                  {showPassword ? (
                    <VisibilityTwoToneIcon
                      color="success"
                      className="absolute top-1 right-2"
                    />
                  ) : (
                    <VisibilityOffTwoToneIcon
                      color="info"
                      className="absolute top-1 right-2"
                    />
                  )}
                </div>

                {errors.password?.type === "required" && (
                  <p className="mt-1 text-xs font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="mt-1 text-xs  font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Password is minimum 8 characters
                  </p>
                )}
              </div>
              <div className="relative overflow-y-hidden">
                <Controller
                  name="passwordAgain"
                  rules={{
                    required: true,
                    maxLength: 20,
                    minLength: { value: 8 },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      color={errors.password ? "error" : "success"}
                      className="w-[300px] text-xs md:text-[16px] font-serif tracking-wider md:w-[400px]"
                      type="password"
                      placeholder="Enter your Password Again"
                      {...field}
                    />
                  )}
                />

                {errors.passwordAgain?.type === "required" && (
                  <p className="mt-1 text-xs font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Password is required
                  </p>
                )}

                {watch("password") != watch("passwordAgain") && (
                  <p className="mt-1 text-xs font-semibold font-mono text-red-500">
                    <span className="mr-1">
                      <ReportProblemSharpIcon fontSize="inherit" />
                    </span>
                    Passwords not the same !
                  </p>
                )}
              </div>
              <div>
                {watch("password") === watch("passwordAgain") ? (
                  <div>
                    {" "}
                    <button
                      className="p-3 mt-9 w-[90px] text-white  font-mono text-center cursor-pointer hover:bg-green-400 bg-green-600 rounded-full transition-all ease-in-out duration-500"
                      type="submit"
                    >
                      Sign In
                    </button>
                  
                  </div>
                ) : (
                  <div>
                    {" "}
                    <button
                      className="p-3 mt-9 w-[90px] text-white  font-mono text-center cursor-not-allowed   bg-gray-400 rounded-full transition-all ease-in-out duration-500 "
                      type="submit"
                    >
                      Sign In
                    </button>
                   
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        
      </div>
      
    </div>
  );
}

export default RegisterScreen;
