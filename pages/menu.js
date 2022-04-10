import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";
import { sidebarState } from "../atoms/userAtom";
import { useRecoilValue } from "recoil";
import MenuItem from "../components/MenuItem";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Heading from "../components/Heading";
import Info from "../components/Info";
import Featured from "../components/Featured";
import Example  from "../components/footer/Example";
function menu() {
  const sidebarstateValue = useRecoilValue(sidebarState);
  const [activeState, setActiveState] = useState(0);

  const scrollToDrink = () => {
    if (typeof window === "object") {
      const drinkH3 = document.getElementById("drinkId");
      drinkH3.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFood = () => {
    if (typeof window === "object") {
      const foodH3 = document.getElementById("foodId");
      foodH3.scrollIntoView({ behavior: "smooth" });
    }
  };

  //   useEffect(() => {
  //     const drinkH3 = _document.getElementById("drinkId");
  //     drinkH3.scrollIntoView();
  //   }, []);

  return (
    <div className="overflow-y-hidden">
      <Header />
      <Head>
        <title>Menu | Starbucks</title>
        <script></script>
      </Head>

      <div
        className={`relative overflow-y-hidden ${
          sidebarstateValue ? "z-[-1]" : "z-[70]"
        } overflow-x-hidden`}
      >
        <div
          className={`w-full h-[60px] bg-stone-200  flex  flex-row items-center overflow-y-hidden`}
        >
          <div className="w-full flex flex-row items-center ml-[10px] md:ml-[150px] text-[13px] md:text-[15px]  gap-4 md:gap-10 overflow-y-hidden">
            <h3
              onClick={() => setActiveState(0)}
              className={`font-mono text-center font-black  cursor-pointer ${
                activeState === 0 ? "active" : ""
              }`}
            >
              All Products
            </h3>
            <h3
              onClick={() => {
                setActiveState(1);
              }}
              className={`font-mono text-center font-black  cursor-pointer ${
                activeState === 1 ? "active" : ""
              }`}
            >
              Featured
            </h3>
            <h3
              onClick={() => setActiveState(2)}
              className={`font-mono text-center  font-black cursor-pointer ${
                activeState == 2 ? "active" : ""
              } `}
            >
              Previous Orders
            </h3>
            <h3
              onClick={() => setActiveState(3)}
              className={`font-mono text-center font-black  cursor-pointer ${
                activeState == 3 ? "active" : ""
              }`}
            >
              Favorite Products
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen p-4  flex flex-row overflow-y-hidden">
        <div className=" w-[25%] h-screen bg-white flex flex-col items-center pt-10  gap-10">
          <div className="flex flex-col gap-1 menuLeft  ">
            <h3
              onClick={() => {
                scrollToDrink();
              }}
              className="font-mono font-black text-[20px] cursor-pointer hover:text-[24px]"
            >
              Drinks
            </h3>
            <h4>Hot Coffees</h4>
            <h4>Hot Teas</h4>
            <h4>Hot Drinks</h4>
            <h4>Frappuccino Blended Beverages</h4>
            <h4>Cold Coffees</h4>
            <h4>Iced Teas</h4>
            <h4>Cold Drinks</h4>
          </div>

          <div className="flex flex-col gap-2 menuLeft ">
            <h3
              onClick={() => {
                scrollToFood();
              }}
              className="font-mono font-black text-[20px] cursor-pointer hover:text-[24px]"
            >
              Foods
            </h3>
            <h4>Hot Teas</h4>
            <h4>Hot Drinks</h4>
            <h4>Frappuccino Blended Beverages</h4>
            <h4>Cold Coffees</h4>
            <h4>Iced Teas</h4>
            <h4>Cold Drinks</h4>
          </div>
        </div>

        <div
          className={`w-[75%] p-12 bg-stone-100  ${
            activeState === 0 ? "flex" : "hidden"
          } flex-col gap-8 shrink-0 `}
        >
          <h3 className="font-black font-serif text-[36px] overflow-hidden shrink-0">
            Menu
          </h3>
          <h3
            id="drinkId"
            className="font-black font-serif text-[23px] border-b-2 border-gray-800 p-2  shrink-0"
          >
            Drinks
          </h3>
          <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 overflow-hidden shrink-0">
            <MenuItem
              img="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
              title="Hot Coffees"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288"
              title="Hot Teas"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_1242"
              title="Hot Drinks"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/06cfd44aac9f4b488495e0f7da404825.jpg?impolicy=1by1_tight_288"
              title="Frappuccino® Blended Beverages"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/21f012c25a714d81b211a19094fb90cc.jpg?impolicy=1by1_wide_1242"
              title="Cold Coffees"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/0f3e19ad457f4b9f9fb5afde29d0c7cf.jpg?impolicy=1by1_wide_1242"
              title="Iced Teas"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/1fbfdef2d1814c86ae271460a5b85f93.jpg?impolicy=1by1_wide_1242"
              title="Cold Drinks"
            />
          </div>
          <h3
            id="foodId"
            className="font-black font-serif text-[23px] ml-2 border-b-2 border-gray-800 p-2 overflow-hidden shrink-0"
          >
            Foods
          </h3>

          <div className=" grid grid-cols-2 gap-10 overflow-hidden shrink-0">
            <MenuItem
              img="https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_wide_1242"
              title="Hot Breakfast"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_wide_1242"
              title="Bakery"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_wide_1242"
              title="Lunch"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/374230e32c03466e9f1696551d843f3b.jpg?impolicy=1by1_wide_1242"
              title="Snacks & Sweets"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/3e10e6d4c9cb412b9f37d421c0376465.jpg?impolicy=1by1_wide_1242"
              title="Oatmeal & Yogurt"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/69b578aa962c40f98d88d9d521c5410c.jpg?impolicy=1by1_wide_1242"
              title="Whole Bean"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/833e95732cc849a4b1fe1d315771ae0a.jpg?impolicy=1by1_wide_1242"
              title="Verismo® Pods"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/833e95732cc849a4b1fe1d315771ae0a.jpg?impolicy=1by1_wide_1242"
              title="VIA® Instant"
            />
            <MenuItem
              img="https://globalassets.starbucks.com/assets/b3c749e064534f608fcc84076329f39d.jpg?impolicy=1by1_wide_1242"
              title="Drinkware"
            />
          </div>
        </div>
        <div
          className={`w-[75%] h-auto  bg-stone-100  ${
            activeState === 1 ? "" : "hidden"
          }  shrink-0 `}
        >
          <Fade>
            <Heading text="SELF-CARE IS COOL" />
          </Fade>
          <Fade>
            <div className="flex flex-row">
              <Info
                title="Honey Almondmilk Flat White"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67893.png"
                info="Our signature espresso meets creamy sweetness."
                link="Order"
                color="#1e3932"
                background="#f0ebe0"
                className="info__hoverLight"
              />
              <Info
                title="NEW Honey Almondmilk Cold Brew"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png"
                info="With a hint of honey and an almondmilk finish. "
                link="Order"
                color="#1e3932"
                background="#f0ebe0"
                className="info__hoverLight"
              />
            </div>
          </Fade>

          <Fade>
            <Heading text="CREAMY, DREAMY COFFEE" />
          </Fade>
          <Fade>
            <div className="grid grid-cols-2">
              <Info
                title="NEW Pistachio Latte"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png"
                info="Espresso, steamed milk and nutty pistachio sauce."
                link="Order"
                color="white"
                background="#1e3932"
                className="info__hoverDark"
              />
              <Info
                title="NEW Pistachio Frappuccino® blended beverage"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png"
                info="Finished with whipped cream and a brown-buttery topping. "
                link="Order"
                color="white"
                background="#1e3932"
                className="info__hoverDark"
              />

              <Info
                title="Nitro Cold Brew"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png"
                info="Velvety-smooth with a lush, cascading texture. "
                link="Order"
                color="white"
                background="#1e3932"
                className="info__hoverDark"
              />

              <Info
                title="Nitro Cold Brew with Sweet Cream"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"
                info="Topped with house-made sweet cream."
                link="Order"
                color="white"
                background="#1e3932"
                className="info__hoverDark"
              />
            </div>
          </Fade>

          <Fade>
            <Heading text="GOOD FOOD, GOOD MOOD" />
          </Fade>
          <Fade>
            <div className="flex flex-row">
              <Info
                title="NEW Kale & Portabella Mushroom Sous Vide Egg Bites"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png"
                info="With cage-free eggs and Monterey Jack cheese."
                link="Order"
                color="#1e3932"
                background="#d4e9e4"
                className="info__hoverLight"
              />
              <Info
                title="Impossible™ Breakfast Sandwich*"
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png"
                info="Featuring savory Impossible™ Sausage Made from Plants."
                link="Order"
                color="#1e3932"
                background="#d4e9e4"
                className="info__hoverLight"
              />
            </div>
          </Fade>
          <Fade>
            <div className="flex flex-row">
              <Featured
                title="MEATLESS MONDAYS AT STARBUCKS"
                info="Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.**"
                link="Order now"
                path=""
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"
                order="2"
                background="#1e3932"
                color="white"
                className="featured__hoverDark"
              />
            </div>
          </Fade>
        </div>
      </div>
      <Example/>
    </div>
  );
}

export default menu;
