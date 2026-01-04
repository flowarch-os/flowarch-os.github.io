import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-black font-sans">
      <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Flow Arch Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold tracking-tight text-white">Flow Arch</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link>
            <Link href="#philosophy" className="hover:text-cyan-400 transition-colors">Philosophy</Link>
            <Link href="#download" className="hover:text-cyan-400 transition-colors">Download</Link>
          </nav>
          <Link
            href="#download"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-full transition-all transform hover:scale-105"
          >
            Get Flow Arch
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block mb-6 animate-fade-in-up">
              <Image
                src="/logo.png"
                alt="Flow Arch Squid"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Productivity-First</span><br />
              Operating System
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Arch-based. Hyprland-driven. Designed for the 1% who need absolute focus.
              Enforced Pomodoro, intention checks, and zero distractions.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="#download"
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Download ISO
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-bold rounded-lg transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Flow Arch?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Most operating systems are designed to keep you engaged. Flow Arch is designed to make you <span className="text-cyan-400 font-semibold">productive</span>.
            </p>
            <p className="text-slate-400">
              We believe urgency increases productivity. That's why Flow Arch can auto-shutdown when your timer runs out.
              We believe breaks are mandatory. That's why the OS locks you out during Pomodoro breaks.
              We believe in intention. That's why you set goals before you even enter the desktop.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enforced Pomodoro</h3>
                <p className="text-slate-400">
                  Timers that aren't just suggestions. The OS enforces breaks, locking your screen to ensure you recover and maintain peak performance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-teal-500/50 transition-colors group">
                <div className="w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intention Screens</h3>
                <p className="text-slate-400">
                  You can't just &quot;browse.&quot; Startup screens force you to declare your intention and goals for the session.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors group">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">OS-Level Adblock</h3>
                <p className="text-slate-400">
                  Ads and distractions blocked at the system level using `hosts_manager`. Keep your mind clear.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-colors group">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Auto-Shutdown</h3>
                <p className="text-slate-400">
                  Timer goes out? The OS turns off. This extreme measure creates real urgency for your tasks.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-orange-500/50 transition-colors group">
                <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hyprland Customization</h3>
                <p className="text-slate-400">
                  Built on the beautiful, fluid Hyprland compositor. Tiling window management that moves as fast as you think.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Filters</h3>
                <p className="text-slate-400">
                  Specify filters for specific goals. Block distracting sites dynamically based on your current intention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-slate-950 -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to reclaim your time?</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              Join the movement. Install Flow Arch and experience an operating system that respects your goals more than your engagement.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="/flow-arch/flow-arch-installer.iso" 
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xl rounded-xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Flow Arch v1.0
              </a>
              <span className="text-slate-500 text-sm">x86_64 ISO • 2.4 GB • MD5: 8f4a...</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© 2026 Flow Arch. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}