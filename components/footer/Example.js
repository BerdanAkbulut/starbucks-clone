import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./Example.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentPlaceholder from "./ContentPlaceholder";

const Accordion = ({ i, expanded, setExpanded, title, items, links }) => {
  const isOpen = i === expanded;

  return (
    <motion.div
      initial={false}
      onClick={() => setExpanded(isOpen ? false : i)}
      className={` ${styles.header}`}
    >
      <motion.div className={styles.wrap}>
        <motion.h3 className={styles.title}>{title}</motion.h3>
        {isOpen ? (
          <span className={styles.arrow}>
            <KeyboardArrowDownIcon color="#006400" fontSize="large" />
          </span>
        ) : (
          <span className={styles.arrow}>
            {" "}
            <KeyboardArrowRightIcon color="#006400" fontSize="large" />
          </span>
        )}
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
           
            {items.map((item,i) => (
              
              <ContentPlaceholder item={item} link={links[i]} />
             
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function Example() {
  const [expanded, setExpanded] = useState(false || 0);

  return (
    <motion.div className="p-[10px]">
      <Accordion
        i={1}
        title="About As"
        expanded={expanded}
        setExpanded={setExpanded}
        items={aboutUs}
        links={aboutUsLinks}
      />
      <Accordion
        i={2}
        title="Careers"
        expanded={expanded}
        setExpanded={setExpanded}
        items={careers}
        links={careersLinks}
      />
      <Accordion
        i={3}
        title="Social Impact"
        expanded={expanded}
        setExpanded={setExpanded}
        items={socialImp}
        links = {socialImpLinks}
      />
      <Accordion
        i={4}
        title="For Business Partners"
        expanded={expanded}
        setExpanded={setExpanded}
        items={fbp}
        links = {fbpLinks}
      />

<Accordion
        i={5}
        title="Order and Pickup"
        expanded={expanded}
        setExpanded={setExpanded}
        items={order}
        links = {orderLinks}
      />
    </motion.div>
  );
}
const aboutUs = ["Our Heritage", "Our Coffee", "Stories and News","Investor Relations","Policies and Standards","Customer Service"];
const aboutUsLinks = ["share","do","contact","","",""]

const careers = ["Culture and Values",'Inclusion, Diversity, and Equity','College Achievement Plan','U.S. Careers','International Careers']
const careersLinks = ["","","","",""]

const socialImp = ['Ethical Sourcing','Leading in Sustainability','Strengthening Communities','Creating Oppurtunities','Global Social Impact Report']
const socialImpLinks = ["","","","",""]

const fbp = ["Landlord Support Center","Suppliers","Corporate Gift Card Sales",'Office and Foodservice Coffee']
const fbpLinks = ["","","",""]

const order = ['Order on the App','Order on the Web','Delivery','Order and Pickup Options','Explore and Find Coffee for Home']
const orderLinks = ["","","","",""]

export default Example;
