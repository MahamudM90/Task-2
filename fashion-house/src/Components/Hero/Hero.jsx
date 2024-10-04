import ecommerce from '../../assets/images/ecommerce.svg'
import { useSpring, animated } from '@react-spring/web';
import './Hero.css'



const Hero = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className='hero'>
      <animated.section style={fadeIn}>
        <h1 className="fashion-house text-[27px] text-black font-bold">Welcome to you</h1>
        <br></br>
        <a href="#cards" className="bg-blue-400 px-6 py-3 rounded-full text-lg hover:bg-blue-200 transition ">Buy Now</a>
        <h1 className="fashion-house text-[27px] text-black font-bold mt-4">Happy Shopping</h1>
      </animated.section>
    </div>
  );
};

export default Hero;
