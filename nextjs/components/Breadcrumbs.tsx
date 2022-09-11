import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function Breadcrumbs({ pages }: any): JSX.Element {
  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <span className="hidden mr-8 text-sm font-medium text-gray-400 md:block">
        Navigation
      </span>
      <ol className="flex items-center space-x-2 md:space-x-4">
        <li>
          <div>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <FaHome className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </div>
        </li>
        {pages.map((page: any) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link href={page.href}>
                <a
                  className={`ml-2 md:ml-4 text-sm font-medium ${
                    page.current
                      ? 'text-red-700'
                      : 'text-gray-500 hover:text-gray-700'
                  } `}
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
