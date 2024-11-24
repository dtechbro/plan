import Image from "next/image";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import CoupleInfo from "./components/CoupleInfo";
import PhotoGallery from "./components/PhotoGallery";
import WeddingDetails from "./components/WeddingDetails";
import RSVPForm from "./components/RSVPForm";

import HeroImage from './assets/hero-image.jpg'
import MobileHeroImage from './assets/mobile-hero.jpg'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-screen relative">
        <Image
          src={HeroImage}
          alt="Wedding hero image"
          fill
          className="object-cover hidden md:block"
          priority
        />

        <Image
          src={MobileHeroImage}
          alt="Wedding hero image"
          fill
          className="object-cover md:hidden"
          priority
        />
        <div className="relative z-10">
          {/* This ensures content appears above the image */}
          <Header />
          <Countdown />
        </div>
      </div>
      <OurStory />
      <CoupleInfo />
      <PhotoGallery />
      <WeddingDetails />
      <RSVPForm />
    </main>
  );
}
