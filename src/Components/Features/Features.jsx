import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

function Features() {
  const features = [
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/features/product_1.png",
      currentPrice: "$200",
    },
    {
      title: "library stool Chair",
      status: "Sales",
      price: "$250",
      image: "/features/product_2.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "/features/product_3.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "/features/product_4.png",
      currentPrice: "$200",
    },
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "features/product_1.png",
      currentPrice: "$200",
    },
    {
      title: "library stool Chair",
      status: "Sales",
      price: "$250",
      image: "features/product_2.png",
    },
    {
      title: "library stool Chair",
      price: "$250",
      image: "features/product_3.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "features/product_4.png",
      currentPrice: "$200",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="lg:container mx-auto">
        <SectionTitle title="Featured Products" mb="mb-11"></SectionTitle>

        <div
          className="slider-container features_slider w-full h-full text-black
        capitalize font-inter font-normal mb-4"
        >
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="p-4">
                {/* feature image */}
                <div className="feature_image mb-4 relative">
                  <img
                    src={feature?.image}
                    alt={feature?.title}
                    className="w-full h-full object-cover "
                  />
                  {feature?.status && (
                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature?.status}
                      </button>
                    </div>
                  )}
                </div>

                {/* feature context */}
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base">{feature?.title}</h4>

                    <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter mb-4">
                      {feature?.currentPirce && (
                        <span className="text-sm text-[#9a9caa] font-inter font-normal">
                          {feature?.currentPrice}
                        </span>
                      )}
                    </p>
                    <span className="bg-[$007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                      <ShoppingCart></ShoppingCart>
                    </span>
                  </div>
                  {feature?.price}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Features;
