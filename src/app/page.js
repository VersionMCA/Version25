import CyberButton from "@/components/ui/CyberButton";

export default async function LandingPage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-3/4 h-full bg-[#1a2e35] opacity-30 blur-[100px] transform -rotate-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-[#3fff00] opacity-20 blur-[120px]" />
      </div>

      {/* Corner decorations */}
      {/* <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#3fff00]/30" /> */}
      {/* <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#3fff00]/30" /> */}

      {/* Dot pattern */}
      <div className="absolute bottom-12 left-12 grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#3fff00]/30" />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Navigation */}

        <main className="max-w-5xl mx-auto text-center mt-32">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wider leading-tight mb-8 font-mono">
            <span className="text-[#e2e4d9]">VELOCIUM</span>
            <br />
            <span className="text-[#e2e4d9] text-2xl">
              EMPOWER IDEAS MINIMIZE CODE
            </span>
          </h1>

          <CyberButton text="ENTER" />
        </main>

        {/* Decorative elements */}
        {/* <div className="absolute top-12 left-12 w-8 h-8 border border-[#3fff00]/30 flex items-center justify-center">
          <div className="w-1 h-1 bg-[#3fff00]" />
        </div> */}
        <div className="absolute bottom-12 right-12 w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#3fff00]/30 rotate-45" />
        </div>
      </div>
    </div>
  );
}
