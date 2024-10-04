import ecommerce from '../../assets/images/ecommerce.svg'
import { useSpring, animated } from '@react-spring/web';
import './Hero.css'



const Hero = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className='hero'>
      <animated.section style={fadeIn}>
        <img src={ecommerce}></img>
        <div className='md:-mt-[550px] md:mx-[500px] max-sm:-mt-[180px] max-sm:mx-[70px]'>
        <h1 className="fashion-house text-[27px] text-black font-bold">Welcome to you</h1>
        <br></br>
        <div className='mx-8'>
        <a href="#cards" className="bg-blue-400 px-6 py-3 rounded-full text-lg hover:bg-blue-200 transition ">Buy Now</a>
        </div>
        <h1 className="fashion-house text-[27px] text-black font-bold mt-4">Happy Shopping</h1>
        </div>
      </animated.section>
    </div>
  );
};

export default Hero;
