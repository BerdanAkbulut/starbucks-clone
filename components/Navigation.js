import * as React from "react";
import { motion } from "framer-motion";
import {MenuLink} from "./MenuLink";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  
  const user = null;
  
  const [showMenuCategories, setShowMenuCategories] = React.useState(false);

  return (
    <>
      {showMenuCategories ? (
        <motion.ul className="z-[50]" variants={variants}>
          
          <MenuLink
            link="Menu"
            goBackIcon
            onClick={() => {
              setShowMenuCategories(false);
            }}
            width="60%"
          />
          <MenuLink
            link="All products"
            path="/menu"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Featured"
            path="/menu/featured"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Previous Orders"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Favorite Products"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul  className="z-[50] overflow-hidden" variants={variants}>
          <MenuLink
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <MenuLink link="Rewards" />
          <MenuLink link="Gift Cards" />
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {!user ? (
              <>
                 <motion.div className="flex">
         <motion.div className=" ml-8 p-2 w-24  border border-black rounded-full font-semibold cursor-pointer hover:bg-black hover:text-white hover:ease-in duration-200">
          <h3 className="text-center">Sign In</h3>
        </motion.div>

        <motion.div className=" ml-8 p-2 w-24 bg-black text-white  border border-black rounded-full font-semibold cursor-pointer hover:bg-white hover:text-black hover:ease-in duration-200">
          <h3 className="text-center">Join Now</h3>
        </motion.div>
      </motion.div>
              </>
            ) : (
              <button>Logout</button>
            )}
          </motion.div>
          <motion.div variants={variants2}>
          <motion.div className="flex space-x-1 items-center cursor-pointer hover:text-lg">
          <LocationOnIcon style={{ width: 40, height: 40 }} />
          <h3 className="font-bold">Find a store</h3>
        </motion.div>
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};