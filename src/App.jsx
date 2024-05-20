import { useState } from "react";
import { bigShoe2, bigShoe3, headerLogo, shoe4, shoe5, shoe6, shoe7, shoe8, thumbnailShoe1 } from "./assets/images";
import { bigShoe1 } from "./assets/images";
import { star } from "./assets/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="w-full p-5 sticky top-0 shadow-sm bg-white z-10">
        <nav className="w-[80vw] m-auto flex items-center justify-between">
          <div className="flex flex-1">
            <img src={headerLogo} alt="logo" width={145} height={50} />
          </div>

          <div className="flex  w-[80%]  ">
            <ul className="w-full flex justify-end gap-6 text-lg font-medium">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className=" w-[80vw] m-auto h-[80vh] md:flex gap-3  p-3 ">
        <div className="flex gap-5 flex-col relative">
          <p className="text-xl font-semibold text-slate-500 mt-8">
            Our Summer Collections
          </p>
          <h1 className="text-[45px] font-extrabold w-[40vw] ">
            The New Arrival <span className="text-[#ff3300]">Nike</span> Shoes
          </h1>
          <h3 className="w-[30vw] text-[18px] font-medium text-slate-600">
            Discover the stylish qualities,amazing discounts and ease of
            delivery. enter the worl of glories
          </h3>
          <button className="w-[200px] font-bold text-[16px] text-white rounded-lg py-5 px-14 bg-[#ff3300] mt-10">
            shop now
          </button>

          <div className="w-[25vw] flex justify-between mt-10 px-4 ">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[23px] text-black ">1K</p>
              <p className=" font-medium text-[20px] text-[#636262] ">Brands</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[23px] text-black ">200K</p>
              <p className=" font-medium text-[20px] text-[#636262] ">Shops</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-[23px] text-black ">250K</p>
              <p className=" font-medium text-[20px] text-[#636262] ">
                Customers
              </p>
            </div>
          </div>
        </div>
        <div className="w-[45vw] h-[75vh] p-3 bg-slate-200">
          <img src={bigShoe1} alt="hero" className="w-[45vw] h-[65vh] " />
          <div className=" w-full flex justify-center gap-4">
            <div className=" w-[140px] h-[130px] border-1 p-6 rounded-lg bg-slate-500">
              <img src={bigShoe1} alt="shoe1" className="w-full h-full" />
            </div>
            <div className=" w-[140px] h-[130px] border-1 p-6 rounded-lg bg-slate-500">
              <img src={bigShoe2} alt="shoe1" className="w-full h-full" />
            </div>
            <div className=" w-[140px] h-[130px] border-1 p-6 rounded-lg bg-slate-500">
              <img src={bigShoe3} alt="shoe1" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[80vw] m-auto  mt-40 p-2">
        <h1 className=" text-[30px] font-semibold flex gap-2 ">
          Our <span className="text-[#ff3300]">Popular</span>Products
        </h1>
        <div className=" w-[30vw] font-medium mt-2 text-md">
          Performance-driven: Experience unmatched performance with our
          best-selling Nike products. Comfortable: Stay comfortable all day long
          with our top-rated
        </div>
        <div className=" w-full my-4 flex g-4 justify-between">
          <div className="w-full h-auto flex flex-col gap-1" >
            <div className="w-[250px] h-[200px] ">
              <img src={shoe4} alt="shoe4" className="  h-full" />
            </div>
            <div className="flex items-center gap-1 mt-4">
              <img src={star} alt="star" width={25} height={25} />
              <span className="font-medium">(4.5)</span>
            </div>
            <p className="font-semibold text-[19px]">Nike Air Jordan 01</p>
            <div className="font-bold text-[#ff3300] text-[19px]">$220.20</div>
          </div>
          <div className="w-full h-auto flex flex-col gap-1" >
            <div className="w-[250px] h-[200px] ">
              <img src={shoe4} alt="shoe4" className="  h-full" />
            </div>
            <div className="flex items-center gap-1 mt-4">
              <img src={star} alt="star" width={25} height={25} />
              <span className="font-medium">(4.5)</span>
            </div>
            <p className="font-semibold text-[19px]">Nike Air Jordan 13</p>
            <div className="font-bold text-[#ff3300] text-[19px]">$220.20</div>
          </div>
          <div className="w-full h-auto flex flex-col gap-1" >
            <div className="w-[250px] h-[200px] ">
              <img src={shoe5} alt="shoe4" className="  h-full" />
            </div>
            <div className="flex items-center gap-1 mt-4">
              <img src={star} alt="star" width={25} height={25} />
              <span className="font-medium">(4.5)</span>
            </div>
            <p className="font-semibold text-[19px]">Nike Air Jordan 10</p>
            <div className="font-bold text-[#ff3300] text-[19px]">$250.20</div>
          </div>
          <div className="w-full h-auto flex flex-col gap-1" >
            <div className="w-[250px] h-[200px] ">
              <img src={shoe6} alt="shoe4" className="  h-full" />
            </div>
            <div className="flex items-center gap-1 mt-4">
              <img src={star} alt="star" width={25} height={25} />
              <span className="font-medium">(4.5)</span>
            </div>
            <p className="font-semibold text-[19px]">Nike Air Jordan 12</p>
            <div className="font-bold text-[#ff3300] text-[19px]">$230.20</div>
          </div>
        </div>
      </div>

      <div className=" w-[80vw] m-auto my-20 flex items-center justify-between p-1">
        <div className="w-6/12 flex flex-col gap-3">
          <h1 className=" text-[30px] font-semibold ">We Provide You With<span className="text-[#ff3300] mx-3">Super Quality</span>Shoes</h1>
          <p className=" w-[30vw] font-medium mt-2 text-md w-[30vw]">Industry-leading Standards: Nike sets industry-leading standards for quality, pushing boundaries and continuously raising the bar to deliver shoes that exceed expectations.</p>
          <span className="mt-2 font-medium mt-2 text-md w-[30vw]">Trusted Brand: Nike is a trusted brand known for its commitment to quality and innovation in footwear</span>
        </div>
        <div className="w-[35vw] h-[50vh]">
          <img src={shoe8} alt="th" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default App;
