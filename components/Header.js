import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Example } from "./Example";
import useLocalStorage from "../hooks/useLocalStorage";
import { userState } from "../atoms/userAtom";
import { useRecoilValue } from "recoil";
const Header = ({ menuPage }) => {
  const [userState, setUserState] = useLocalStorage("user");
  
  // const user  = useRecoilValue(userState)

  return (
    <Fade>
      <div className="p-1 h-28 w-full bg-white/25 md:p-4 mt-4 flex items-center justify-between overflow-y-hidden">
        <div className="flex items-center justify-content">
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
                height="100px"
                width="100px"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center list-none space-x-1 md:space-x-4 font-bold text-sm md:text-lg font-serif ml-2 mt-8 md:ml-8 cursor-pointer ">
            <Link href={userState ? "/menu" : "/login"}>
              <li className="hover:text-green-800 overflow-hidden">MENU</li>
            </Link>

            <Link href={userState ? "/rewards" : "/login"}>
              <li className="hover:text-green-800 ">REWARDS</li>
            </Link>

            <Link href={userState ? "/giftCards" : "/login"}>
              <li className="hover:text-green-800 ">GIFT CARDS</li>
            </Link>
          </div>
        </div>

        <Example />

        <div className="hidden md:flex items-center justify-between">
          <div className="flex space-x-1 items-center cursor-pointer hover:text-lg mr-6 ">
            <LocationOnIcon  style={{ width: 40, height: 40 }} />
            <h3 className="font-bold">Find a store</h3>
          </div>

          {!userState ? (
            <div className="flex">
              <Link href="/login">
                <div className=" ml-8 p-2 w-24  border border-black rounded-full font-semibold cursor-pointer hover:bg-black hover:text-white hover:ease-in duration-200">
                  <h3 className="text-center">Sign In</h3>
                </div>
              </Link>

              <Link href="/register">
                <div className=" ml-8 p-2 w-24 bg-black text-white  border border-black rounded-full font-semibold cursor-pointer hover:bg-white hover:text-black hover:ease-in duration-200">
                  <h3 className="text-center">Join Now</h3>
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <button className="mr-4 hover:font-black font-mono" onClick={() => setUserState(null)}>Log Out</button>
              {/* {menuPage ? <button>Logout</button> : <button>Order Now</button>} */}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};


export default Header;
