// import './Hero.css';
import heroImg from './assets/heroImage2.jpg';

const Hero = () => {
    return (
        <div className="w-full h-[500px] overflow-hidden">
            <img className="w-full" src={heroImg}></img>
        </div>
    )
}

export default Hero;