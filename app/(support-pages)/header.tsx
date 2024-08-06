import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo-orange.png'

export default function SupportHeader() {
  return (
    <header className="fixed w-full bg-white border-b border-slate-200 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="flex items-center" href="/" aria-label="Cruip">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <span className="text-slate-400 font-[550] ml-4">Support Center</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <a className="btn-sm inline-flex items-center text-white bg-orange-custom hover:bg-slate-900 shadow-sm" href="/apply">
                  Get in touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>        
  )
}