export default function Footer() {
    return (
      <footer className="w-full bg-honey-red text-white py-24 px-4 md:px-12 flex flex-col justify-between min-h-[50vh]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <h3 className="tex-xl font-mono uppercase tracking-widest">Contact</h3>
            <a href="mailto:hello@example.com" className="text-2xl md:text-4xl font-light hover:underline underline-offset-4 decoration-1">
              hello@example.com
            </a>
          </div>
          
          <div className="flex flex-col gap-2 font-mono text-sm text-right">
             <p>© 2024</p>
             <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
  
        <div className="mt-20">
          <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-center md:text-left">
            HONEY—
          </h1>
        </div>
      </footer>
    );
  }
