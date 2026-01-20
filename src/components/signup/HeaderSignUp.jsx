import { coinbaseLogo } from '../../assets/home/index';

const HeaderSignUp = () => {
  return (
    <div className="h-8 px-4">
      <img src={coinbaseLogo} className="h-full invert brightness-0" alt="Coinbase Logo" />
    </div>
  );
};

export default HeaderSignUp;
