import Header from "./header/page";
import Footer from "./footer/page";
import Body from "./body/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Konten utama */}
      <Body></Body>

      {/* Footer tetap di bagian bawah */}
      <Footer />
    </div>
  );
}
