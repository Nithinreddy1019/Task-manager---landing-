import { Banner } from "@/components/banner";
import { CallToAction } from "@/components/call-to-action";
import { Faqs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import { Navbar } from "@/components/navbar";
import { ProductShowcase } from "@/components/product-showcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Faqs />
      <CallToAction />
    </>
  );
}
