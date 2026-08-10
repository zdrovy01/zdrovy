import Toolbar from "../components/Toolbar";
import Banner2 from "../components/Banner2";

export const metadata = {
  title: "ZDROVY for Business",
};

export default function BusinessPage() {
  return (
    <>
      <Toolbar />
      <main>
        <Banner2 title="ZDROVY for Business" />
      </main>
    </>
  );
}
