import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";


export default function main() {
  return (
    <main >
      <div >
        <Herosection />

        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6/>
        <Footer/>

      </div>
    </main>
  )
}