import { HeroParallaxDemo, SpotlightPreview } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { TimelineDemo } from "@/components/TimelineDemo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <NavbarDemo/> 
      {/* <SpotlightPreview/> */}
      <div className="pb-30" >

      <HeroParallaxDemo  />
      </div>
      <TimelineDemo/>
    </div>

  );
}
