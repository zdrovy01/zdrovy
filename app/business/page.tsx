import Link from "next/link";
import Toolbar from "../components/Toolbar";
import Container2 from "../components/Container2";

export const metadata = {
  title: "ZDROVY for Business",
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
            imageAlt="ZDROVY for Żabka"
            title="MyShop — run your Żabka from one screen"
            text="MyShop is a web tool that helps you run the store day to day. Assign tasks to your team, and they mark them done with photos and comments right from their phone. Employees log their working hours in the same place. Everything is saved on one platform — check what happened yesterday, plan tomorrow, and manage it all from a phone or a laptop."
            href="#"
          />
        </div>
      </main>
    </>
  );
}
