import Head from "next/head";
import Image from "next/image";
import { sidebarState } from "../atoms/userAtom";
import Info from "../components/Info";
import { useRecoilValue } from "recoil";
import Heading from "../components/Heading";
import { AttentionSeeker, Bounce, Fade, Hinge ,Slide } from "react-awesome-reveal";
import Featured from "../components/Featured";
import Header from "../components/Header";
import  Example from "../components/footer/Example";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const sidebarstateValue = useRecoilValue(sidebarState);
  const [userState, setUserState] = useLocalStorage("user");
  
  // order , gap, flex-wrap, max-width
  return (
    <div>
      <div className="  overflow-hidden">
         <Header/>
      </div>
      
    <div
      className={`relative ${
        sidebarstateValue ? "z-[-1]" : "z-[70]"
      } overflow-x-hidden`}
    >
      <Head>
        <title>Starbucks</title>
      
      </Head>
      
     
        
      
     

      <div className="bg-green-100 flex items-center justify-center w-full p-10 ">
        <Bounce>
          <div className="flex w-[400px] md:w-[600px] text-[20px] md:text-[22px] font-mono">
            <h3>
              We're working hard to put the health and well-being of our
              partners and customers first in all that we do.{" "}
              <span className="underline cursor-pointer transition-all ease-in-out hover:opacity-[0.6]">
                Learn More
              </span>
            </h3>
          </div>
        </Bounce>
      </div>

         <div className="absolute top-8 right-8 overflow-hidden ">
           <Hinge triggerOnce={true}  delay={2000}  >
        <div className="max-w-md flex items-center justify-center flex-wrap text-[20px] font-serif">
          <i><h6 className="font-mono">Welcome</h6> {userState?.displayName ? userState.displayName : "Guest" }</i>
        </div>
      </Hinge>
        </div> 
     

      <Fade>
        <div className="bg-green-100 flex flex-col md:flex-row md:justify-around items-center justify-center w-full p-10 mt-6">
          <div className="flex flex-col mt-8 w-[200px]">
            <h1 className="text-[30px] font-mono tracking-widest w-[200px] leading-10">
              Investing in our communities
            </h1>
            <h2 className="text-[22px] mt-5 w-[300px] ">
              The Starbucks Foundation awarded grants to over 400 nonprofits
              serving communities of color. Reciptients were nominated by
              Starbuks partners (employees).
            </h2>
            <div className="mt-8 border text-center border-black rounded-full p-2 cursor-pointer  transition-all ease-in-out duration-300 hover:bg-black/90 hover:text-white ">
              Learn More
            </div>
          </div>
       
          <div className="photoA relative  w-[600px] h-[400px] hidden md:inline ml-40  ">
            
            <Image
              className="rounded-lg hover:scale-x-[-1] hover:opacity-[0.9]"
              src="https://layyn.com/wp-content/uploads/2021/07/SBX20200225-SpringBeverages-FeatureHorizontal.jpg"
              layout="fill"
              objectFit="fill"
            />
   
          </div>
          
        </div>
      </Fade>

      <AttentionSeeker>
        <Heading text="TODAY IS YOURS" />
      </AttentionSeeker>

      <div className="homeScreen__featured">
        <Slide>
          <Featured
            title="NICELY NONDAIRY"
            info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
            link="Explore the honey drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
            background="bg-orange-100"
            color="text-green-900"
            className="featured__hoverLight"
          />
        </Slide>

        <Slide direction="right">
          <Featured
            title="PISTACHIOOOO"
            info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
            link="Try the new pistachio drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
            order="2"
            background="bg-purple-500"
            color="text-yellow-500"
            className="featured__hoverLight"
          />
        </Slide>
      </div>
      <AttentionSeeker>
        <Heading text="MORE TO DISCOVER" />
      </AttentionSeeker>

      <div className="flex flex-col md:flex-row gap-[25px]">
        <Fade>
          <Info
            title="Order and pick up. Easy as that."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </Fade>

        <Fade>
          <Info
            title="Coffee delivered. Day made."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="Order now"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </Fade>
      </div>
    <Example/>
      
    </div>
    </div>
  );
}
