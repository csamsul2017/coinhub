import { coinbaseSystem } from '../assets/home';

const Feature = () => {
  return (
    <div className="bg-[#141519] flex justify-center text-white py-4">
      <div className="bg-[#0A0B0D] m-6 p-6 rounded-5xl flex flex-col gap-4 md:flex-row md:gap-8 md:items-center ">
        <div className="flex justify-center rounded-5xl md:flex-1 md:">
          <div className="rounded-5xl overflow-hidden">
            <img src={coinbaseSystem} className="object-contain" alt="Hero Image" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-1">
          <h2 className="text-4xl md:max-w-1/2 md:text-5xl lg:w-full lg:text-6xl">The future of finance is on Coinhub.</h2>
          <p className="text-md md:text-lg">Watch the System Update replay to see Brian Armstrong and the Coinhub team introduce the next chapter for the company.</p>

          <button className="w-fit px-8 py-4 rounded-full bg-white text-black font-bold">Watch now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
