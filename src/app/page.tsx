import About from "./_sections/about";
import { DesignPrinciple } from "./_sections/design-principle";
import Gallery from "./_sections/gallery";
import Hero from "./_sections/hero";


export default function Home() {
  return (
    <div className="relative flex flex-col">
      <section className="bg-[#3A0018] text-white">

        <Hero />
      </section>
      <div className="relative">
        <div className="divider-bottom divider-164">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#FFE2C5]"></path>
          </svg>
        </div>
      </div>
      <section className="bg-[#FFE2C5]">
        <About />
      </section>
      <div className="relative pt-18">
        <div className="divider-top divider-130 rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#FFE2C5]"></path>
          </svg>
        </div>
      </div>
      <section className="my-64">
        <DesignPrinciple />
      </section>
      <div className="relative block">
        <div className="divider-bottom divider-140">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#3A0018]"></path>
          </svg>
        </div>
      </div>
      <section className="bg-[#3A0018] py-20">
        <Gallery />
      </section>
    </div>
  );
}
