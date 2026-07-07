import heroImage from '../images/nords.png';

const Hero = () => (
  <section className="relative min-h-screen flex">
    <img
      src={heroImage}
      alt="Nordic sauna by a lakeside forest"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-end pt-24 pb-[6%] pl-[6%] md:pl-[30%] pr-[6%] gap-9">
      <h1 className="heading-display text-cream max-w-2xl">
        Resilient lives begin in our saunas
      </h1>
      <p className="text-cream/90 text-base md:text-lg max-w-[375px] leading-relaxed font-light">
        Beautiful experiences, products, and saunas for a better life.
      </p>
      <div>
        <a href="#contact" className="btn btn-cream">
          Get started
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
