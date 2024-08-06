import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/footer-illustration.svg'
import Logo from '@/public/images/logo-white.png'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-orange-400 -z-10"
        aria-hidden="true"
      />

      {/* Illustration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Illustration}
          alt="Footer illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-transparent">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">
              Essentials
            </h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Budgeting and analytics
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Open banking
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Pockets
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Lifestyle</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  International products
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Currency exchange
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Lounge & Smart delay
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-bold mb-3">Company</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Send us an email
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-white text-end">
            made with &#x2665; by{" "}
            <a
              className="font-medium underline hover:text-slate-200 transition duration-150 ease-in-out"
              href="https://rssi.dev"
            >
              metastash
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
