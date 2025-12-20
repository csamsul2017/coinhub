import { heroImage } from '../assets/home';

const Hero = () => {
  return (
    <div className="pt-24 border border-red-200 px-4 flex flex-col gap-4 lg:flex-row lg:gap-12">
      <div className="flex flex-col gap 4 lg:order-2 lg:flex-1 lg:justify-center lg:gap-6">
        <h1 className="text-6xl md:text-7xl">
          <span>The future of</span>
          <span> finance is here</span>
        </h1>

        <p className="text-lg">Trade crypto and more on a platform you can trust</p>

        <div className="flex flex-col gap-4 md:flex-row">
          <input type="text" placeholder="satoshi@nakamoto.com" className="border border-gray-500 px-4 py-4 rounded-lg flex-1" />
          <div className="flex-1">
            <button className="bg-primary text-white font-bold py-4 w-full md:w-auto md:px-8 rounded-full">Sign up</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:flex-1">
        <div className="rounded-3xl overflow-hidden">
          <img src={heroImage} alt="Hero Image" className="object-cover" />
        </div>

        <p className="text-sm text-muted">Stocks and prediction markets not available in your jurisdiction</p>
      </div>
    </div>
  );
};

export default Hero;
