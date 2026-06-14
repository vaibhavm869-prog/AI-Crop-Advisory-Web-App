import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Crops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Wheat"
            description="Suitable for winter cultivation."
          />

          <Card
            title="Rice"
            description="Requires warm climate and water."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

