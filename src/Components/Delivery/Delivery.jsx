import {
  Clock3,
  Percent,
  PercentDiamondIcon,
  PercentIcon,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const Delivery = () => {
  return (
    <div>
      <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl">
        <div className="grid grid-cols-4">
          {/* discount */}
          <div className="delivery_wrapper">
            <div className="flex items-center gap-4 font-inter">
              <p className="text-shadow-lime-700">
                <PercentDiamondIcon className="text-black" size="3rem" />
              </p>
              <div>
                <h4 className="text-base text-black capitalize font-inter font-medium mb-2 5">
                  Discount
                </h4>
                <h5 className="text-sm text-black">Every week new sales</h5>
              </div>
            </div>
          </div>
          {/* delivery */}
          <div className="delivery_wrapper">
            <div className="flex items-center gap-4 font-inter">
              <p className="text-shadow-lime-700">
                <Truck className="text-black" size="3rem" />
              </p>
              <div>
                <h4 className="text-base text-black capitalize font-inter font-medium mb-2 5">
                  Free Delivery
                </h4>
                <h5 className="text-sm text-black">100% Free for all orders</h5>
              </div>
            </div>
          </div>
          <div className="delivery_wrapper">
            <div className="flex items-center gap-4 font-inter">
              <p className="text-shadow-lime-700">
                <Clock3 className="text-black" size="3rem" />
              </p>
              <div>
                <h4 className="text-base text-black capitalize font-inter font-medium mb-2 5">
                  Support 24/7
                </h4>
                <h5 className="text-sm text-black">We care your experience</h5>
              </div>
            </div>
          </div>
          <div className="delivery_wrapper">
            <div className="flex items-center gap-4 font-inter">
              <p className="text-shadow-lime-700">
                <ShieldCheck className="text-black" size="3rem" />
              </p>
              <div>
                <h4 className="text-base text-black capitalize font-inter font-medium mb-2 5">
                  Secure Payment
                </h4>
                <h5 className="text-sm text-black">
                  100% Secure Payment Method
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
