import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zdrovy for Business",
};

export default function BusinessPage() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="biz-hero">
          <div className="biz-hero-inner">
            <div className="biz-hero-copy">
              <h1 className="biz-hero-title">
                <span>Run your store</span>
                <span>from one screen.</span>
              </h1>
              <div className="biz-hero-cta">
                <Link href="https://myshop.zdrovy.com" className="toolbar-pill toolbar-pill--solid">
                  Start for free
                </Link>
                <Link href="mailto:zdrovy.co@gmail.com" className="toolbar-pill toolbar-pill--ghost">
                  Contact us for more info
                </Link>
              </div>
            </div>

            <div className="biz-hero-mark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/myshop.svg" alt="MyShop" />
            </div>
          </div>
        </section>

        <div id="myshop">
          <Container2
            image="/Zabka-franczyza.jpg"
            imageAlt="Zdrovy for Żabka"
            title="MyShop — run your Żabka from one screen"
            text="MyShop is a web tool that helps you run the store day to day. Assign tasks to your team, and they mark them done with photos and comments right from their phone. Employees log their working hours in the same place. Everything is saved on one platform — check what happened yesterday, plan tomorrow, and manage it all from a phone or a laptop."
            href="#"
          />
        </div>

        <Container3
          columns={3}
          image1="/ex1.png"
          title1="1. Build your task list"
          text1="In your personal dashboard, create the tasks you want done — daily routines, restocks, cleaning, deliveries — anything your team should take care of."
          href1="#"
          image2="/ex2.png"
          title2="2. Hang a QR code"
          text2="Print a QR code that links straight to the task list and place it where your team starts their shift. One scan and they see what needs doing."
          href2="#"
          image3="/ex3.png"
          title3="3. Team completes tasks"
          text3="Employees tick tasks off, add notes and photos to each one, and log their working hours — all right from their phone."
          href3="#"
        />
      </main>
      <Footer />
    </>
  );
}
