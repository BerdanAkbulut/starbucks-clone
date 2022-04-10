import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function ContentPlaceholder({ link, item }) {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="flex flex-col "
    >
      <Link href={link}><h3 className="  ml-10 text-gray-800 hover:opacity-[0.5] mb-4 cursor-pointer text-[22px] hover:text-[24px] transition-all ease-in-out">{item}</h3></Link>
    </motion.div>
  );
}

export default ContentPlaceholder;
