export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      <small className="block text-xs">
        &copy; 2023 Anuj Yadav. All rights reserved.
      </small>
      <a
        className="text-xs underline" target="_blank"
        href="https://github.com/yadavanuj44/portfolio-in-nextjs"
      >
        View Code
      </a>
      <p className="text-xs">
        Thid website is built with React & Next.js 14 (App Router & Server
        Actions), TypeScript, Tailwind CSS, Framer Motion & Resend.
      </p>
    </footer>
  );
}
