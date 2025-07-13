import Banner from "../../Components/Banner/Banner";
import { Delivery } from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";
import Features from "../../Components/Features/Features";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import Client from "../../Components/Client/Client";
import Recent from "../../Components/Recent/Recent";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <div>
        {/* Banner Component */}
        <div className="w-full min-h-[850px] bg-amber-100 flex items-center justify-center">
          <Banner></Banner>
        </div>
        {/* Delivery Component */}
        <div className="delivery_component w-full min-h-[#150px]  shadow-md ">
          <Delivery></Delivery>
        </div>

        {/* Brand Component */}
        <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
          <Brand />
        </div>

        <div className="w-full flex items-center justify-center bg-amber-100 p-5">
          <Features></Features>
        </div>

        <div className="w-full flex items-center justify-center bg-[#f0f2f3]">
          <Categories></Categories>
        </div>

        <div className="w-fulle flex items-center justify-center bg-amber-100 p-5">
          <Product></Product>
        </div>

        {/* client say component  */}
        <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">
          <Client></Client>
        </div>

        {/* Recent component  */}
        <div className="w-full flex items-center justify-center pb-[80px] pt-[80px] bg-amber-100">
          <Recent></Recent>
        </div>
      </div>
    </>
  );
}

export default Home;
