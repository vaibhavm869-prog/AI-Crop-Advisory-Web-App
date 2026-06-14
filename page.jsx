import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6 min-h-[70vh]">
        <h1 className="text-4xl font-bold">About</h1>

        <p className="mt-4">
          Learn more about our AI Crop Advisory platform.
        </p>
      </main>

      <Footer />
    </>
  );
}