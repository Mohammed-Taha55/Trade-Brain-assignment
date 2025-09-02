import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "#fff", // small tweak, shorter hex
          backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(173, 109, 244, 0.5),
            transparent 70%
          )
        `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Container>
        <Ticker />
        <SearchBar />
      </Container>
    </main>
  );
}
