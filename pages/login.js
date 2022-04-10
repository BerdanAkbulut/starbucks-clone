import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import * as EmailValidator from "email-validator";
import ReportProblemSharpIcon from "@mui/icons-material/ReportProblemSharp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../firebase";
import { useRecoilState } from "recoil";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import useLocalStorage from '../hooks/useLocalStorage'
import {userState} from '../atoms/userAtom'
function LoginScreen() {



  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [userStat3,setUserStat3] = useRecoilState(userState)

  const [persistUserState,setPersistUserState] = useLocalStorage('user',null)
  

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setPersistUserState(userCredential.user)
        setUserStat3(persistUserState)

        toast.success("Login Success, Redirecting..");
        router.push("/");
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.warning("Password is Wrong");
        }
        if (error.code === "auth/user-not-found") {
          toast.warning("User Not Found");
        }
      });
  };

  return (
    <div className="w-screen h-screen flex flex-row">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login | Starbucks Coffee</title>
      </Head>

      <div className="relative w-[40%] hidden h-full md:flex justify-center items-center mr-5">
        <Link href="/">
          <div className="absolute top-6 left-8 cursor-pointer ">
            <Image
              src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
              objectFit="contain"
              width={150}
              height={150}
            />
          </div>
        </Link>

        <div className="flex flex-row w-full ml-10 justify-center items-center">
          <h1 className="font-serif text-center font-black text-[16px] md:text-[24px] mr-2 ">
            Sign in or create an account
          </h1>
          <Image
            src="https://pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png"
            objectFit="contain"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className="w-full md:w-[60%]  border-8  flex flex-col shrink-0 items-center justify-center overflow-y-scroll">
        <div className=" h-[1200px] pt-10 flex flex-col items-center justify-center shrink-0">
          <div className="flex flex-col items-center justify-center mt-[550px]">
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6 items-center justify-center">
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

                <div>
                  <button
                    className="p-3 mt-9 w-[90px] text-white  font-mono text-center cursor-pointer hover:bg-green-400 bg-green-600 rounded-full transition-all ease-in-out duration-500"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <ToastContainer autoClose={2000} />
                </div>
              </div>
            </form>
          </div>

          <div className="mt-[50px] flex flex-col gap-2">
            <h4 className="underline text-green-600 font-semibold cursor-pointer hover:opacity-[0.6] transition-all ease-in-out">
              Forgot your username ?{" "}
            </h4>
            <h4 className="underline text-green-600 font-semibold cursor-pointer hover:opacity-[0.6] transition-all ease-in-out">
              Forgot your password ?{" "}
            </h4>
          </div>
        </div>
        <div className=" h-[100px] w-full flex shrink-0 justify-center items-center text-white font-serif font-semibold tracking-widest text-[20px] bg-black/90 cursor-pointer hover:opacity-[0.9]">
          <h3>JOIN STARBUCKS REWARDS</h3>
        </div>
        <div className="bg-stone-400  flex flex-col shrink-0  items-center justify-center w-full p-10">
          <Link href="/register">
            <div className=" ml-8 p-2 w-24 bg-black text-white  border border-black rounded-full font-semibold cursor-pointer hover:bg-white hover:text-black hover:ease-in duration-200">
              <h3 className="text-center">Join Now</h3>
            </div>
          </Link>

          <div>
            <h1 className=" max-w-[450px] font-serif font-semibold text-[24px] mt-3">
              Create an account and bring on the Rewards !
            </h1>
            <h3 className="max-w-[350px] font-serif font-normal mt-4">
              Join Starbucks Rewards to earn free food and drkinks,get free
              refilils,pay and order with your phone, and more.
            </h3>
          </div>
        </div>
        <div className="bg-stone-200 flex flex-row justify-around   shrink-0 w-full p-10">
          <div className="flex flex-col items-center justify-between gap-20 mt-4">
            <div className="flex space-x-1 items-center cursor-pointer">
              <LocationOnIcon style={{ width: 40, height: 40 }} />
              <h3 className="font-bold hover:text-[20px]">Find a store</h3>
            </div>
            <h3 className="font-semibold mt-16">2022 Starbucks</h3>
          </div>
          <div className="flex flex-col ml-10 gap-2 justify-center font-serif self-auto">
            <h3 className="cursor-pointer hover:text-lg transition-all ease-in-out">
              Responsibility
            </h3>
            <h3 className="cursor-pointer hover:text-lg transition-all ease-in-out">
              Web Accessibility
            </h3>
            <h3 className="cursor-pointer hover:text-lg transition-all ease-in-out">
              Privacy Policy
            </h3>
            <h3 className="cursor-pointer hover:text-lg transition-all ease-in-out">
              Terms of Use
            </h3>
            <h3 className="cursor-pointer hover:text-lg transition-all ease-in-out">
              Cookie Preferences
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
