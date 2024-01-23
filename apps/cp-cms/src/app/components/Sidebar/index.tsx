'use client'

import { usePathname } from 'next/navigation'
import { SidebarLinkGroup } from './components'
import Link from 'next/link'

export const Sidebar: React.FC = () => {
  const pathname = usePathname()

  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary-color duration-300 ease-linear lg:static lg:translate-x-0">
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-color">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/admin/home"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-primary-contrast duration-300 ease-in-out hover:bg-primary-hover-color hover:text-primary-hover-contrast ${
                    pathname.includes('home') &&
                    'bg-primary-hover-color dark:bg-meta-4'
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/users"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-primary-contrast duration-300 ease-in-out hover:bg-primary-hover-color hover:text-primary-hover-contrast ${
                    pathname.includes('users') &&
                    'bg-primary-hover-color dark:bg-meta-4'
                  }`}
                >
                  Usuários
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}
