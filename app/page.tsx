import Toolbar from "./components/Toolbar";
import Text2 from "./components/text2";
import Container3 from "./components/Container3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Toolbar />
      <main>
        <Text2>Zdrovy Products</Text2>

        <Container3
          columns={2}
          eyebrow1="ZDROVY App"
          image1="/appshow.png"
          title1="Plan smarter. Eat better."
          text1="Track your progress — everything in one place."
          href1="https://app.zdrovy.com"
          eyebrow2="For Business"
          image2="/myshopshow.png"
          title2="MyShop for Żabka."
          text2="Assign tasks to your team and manage them remotely — from your phone or laptop."
          href2="/business"
        />
      </main>
      <Footer />
    </>
  );
}
