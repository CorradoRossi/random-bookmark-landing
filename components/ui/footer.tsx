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
            <Link className="block" href="/" aria-label="logo">
              <Image src={Logo} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-white font-bold mb-3">AI & Web3</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://metastash.xyz"
                  target="_blank"
                >
                  Metastash.xyz
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://0x1.ai"
                  target="_blank"
                >
                  0x1.ai
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://app.sponsio.life"
                  target="_blank"
                >
                  Sponsio.life
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://wenlambo.wtf"
                  target="_blank"
                >
                  Wenlambo.wtf
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-white font-bold mb-3">Work</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://pixelpunk.design"
                  target="_blank"
                >
                  PixelPunk Design
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://wgmi.fyi"
                  target="_blank"
                >
                  WGMI Capital
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://rssi.dev"
                  target="_blank"
                >
                  Rssi.dev
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://rossimeacham.com"
                  target="_blank"
                >
                  MotoRossi
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-white font-bold mb-3">Professional</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://github.com/corradorossi"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://linkedin.com/in/rossimeacham"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://linktr.ee/rssi"
                  target="_blank"
                >
                  LinkTree
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://metastash.unicornplatform.com/"
                  target="_blank"
                >
                  Unicorn Platform
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://metastash.substack.com"
                  target="_blank"
                >
                  Substack
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-white font-bold mb-3">Social</h6>
            <ul className="text-sm font-[450] space-y-2">
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="mailto:support@metastash.xyz"
                  target="_blank"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://facebook.com/metastash"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://twitter.com/metastash"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://instagram.com/metastash"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-slate-200 transition duration-150 ease-in-out"
                  href="https://tiktok.com/@metastash"
                  target="_blank"
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
