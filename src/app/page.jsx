import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { HeroParallaxDemo, SpotlightPreview } from "@/components/Hero";
import { HeroHighlightDemo } from "@/components/HeroHightlightDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/LampDemo";
import { ModeToggle } from "@/components/ModeToggle";
import { NavbarDemo } from "@/components/Navbar";
import { TimelineDemo } from "@/components/TimelineDemo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* <SpotlightPreview/> */}
      <div className="pb-30" >
        <HeroHighlightDemo/>

      {/* <HeroParallaxDemo  /> */}
      </div>
      <TimelineDemo/>
      <LampDemo/>
      <InfiniteMovingCardsDemo/>
      <AnimatedTestimonialsDemo/>
    </div>

  );
}
