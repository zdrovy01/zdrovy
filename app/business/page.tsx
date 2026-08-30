import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Text1 from "../components/text1";
import Text2 from "../components/text2";
import Container3 from "../components/Container3";
import Container4 from "../components/Container4";
import PriceParagon from "../components/PriceParagon";
import Footer from "../components/Footer";

export const metadata = {
  title: "ZDROVY for Business",
};

export default function BusinessPage() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="biz-hero biz-hero--center">
          <p className="biz-hero-eyebrow">MyShop</p>
          <Text1>Run your Żabka from one screen.</Text1>
          <p className="biz-hero-lead">Tasks, staff hours, photos — all in one place. Phone or laptop.</p>
          <div className="biz-hero-cta">
            <Link href="https://myshop.zdrovy.com" className="toolbar-pill toolbar-pill--solid">
              Start for free
            </Link>
          </div>
        </section>

        <section className="biz-fullbleed">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Zabka-franczyza.jpg" alt="" className="biz-fullbleed-img" />
        </section>

        <div className="biz-section-gap" />
        <Text2>Never let your team forget their tasks.</Text2>

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

        <div className="biz-section-gap" />
        <div className="biz-panel">
          <div className="biz-panel-inner">
            <Text2>Get started in 5 minutes.</Text2>

            <Container3
              columns={3}
              autoCycle
              image1="/step1.svg"
              title1="Register your store in a minute."
              href1="https://myshop.zdrovy.com"
              image2="/step2.svg"
              title2="Add your team."
              href2="https://myshop.zdrovy.com"
              image3="/step3.svg"
              title3="Create the first task."
              href3="https://myshop.zdrovy.com"
            />
          </div>
        </div>

        <div className="biz-section-gap" />

        <section className="price">
          <div className="price-visual" aria-hidden="true">
            <PriceParagon src="/paragon.png" />
          </div>
          <div className="price-body">
            <p className="price-lead">Everything you need to run your Żabka.</p>
            <ul className="container4-list container4-list--checks">
              <li>Task list &amp; completion tracking</li>
              <li>Employees with PIN login</li>
              <li>QR code for staff</li>
              <li>Photos &amp; completion notes</li>
              <li>Task history</li>
              <li>Priority support</li>
            </ul>
            <Link href="https://myshop.zdrovy.com" className="toolbar-pill toolbar-pill--solid price-cta">
              Start free, then 99 zł / month
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
