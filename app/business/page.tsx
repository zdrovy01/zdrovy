import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Text1 from "../components/text1";
import Text2 from "../components/text2";
import Container3 from "../components/Container3";
import Container4 from "../components/Container4";
import Footer from "../components/Footer";

export const metadata = {
  title: "ZDROVY for Business",
};

export default function BusinessPage() {
  return (
    <>
      <Toolbar />
      <main>
        <section className="biz-hero">
          <Text1>About MyShop</Text1>
        </section>

        <Container4
          title="Run your Żabka from one screen."
          text="Tasks, staff hours, photos — all in one place. Phone or laptop."
          image="/myshopshow.png"
          imageAlt="MyShop"
          cta={
            <>
              <Link href="https://myshop.zdrovy.com" className="toolbar-pill toolbar-pill--solid">
                Start for free
              </Link>
              <Link href="mailto:zdrovy.co@gmail.com" className="toolbar-pill toolbar-pill--ghost">
                Contact us
              </Link>
            </>
          }
        />

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

        <div className="biz-section-gap" />
        <Text1>Price</Text1>

        <section className="container4">
          <div className="container4-card">
            <div className="container4-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/myshop.svg" alt="MyShop" className="container4-brand" />
              <p className="container4-text">Everything you need to run your Żabka.</p>
              <div className="container4-cta container4-cta--block">
                <Link href="https://myshop.zdrovy.com" className="toolbar-pill toolbar-pill--solid container4-cta-btn">
                  Start free, then 99 zł / month
                </Link>
              </div>
            </div>
            <div className="container4-body">
              <ul className="container4-list container4-list--checks">
                <li>Task list &amp; completion tracking</li>
                <li>Employees with PIN login</li>
                <li>QR code for staff</li>
                <li>Photos &amp; completion notes</li>
                <li>Task history</li>
                <li>Priority support</li>
              </ul>
              <p className="container4-text container4-text--note">
                Get everything free for the first month. Subscribe to keep
                using all features after your trial.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
