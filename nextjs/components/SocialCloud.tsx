import {
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
  FaBlogger,
  FaFacebook,
} from "react-icons/fa6";
export default function SocialCloud(): JSX.Element {
  return (
    <section className="bg-red-800 border-b shadow-inner border-neutral-500">
      <h2 className="sr-only">Social Networks</h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-neutral-100 md:grid-cols-5">
          <a
            href="https://www.facebook.com/pidanalyzers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={75} className="h-12 hover:opacity-60" />
          </a>
          <a
            href="https://twitter.com/pidgirl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={75} className="h-12 hover:opacity-60" />
          </a>
          <a
            href="https://www.instagram.com/hnu_pid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={75} className="h-12 hover:opacity-60" />
          </a>
          <a
            href="https://analyzersource.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlogger size={75} className="h-12 hover:opacity-60" />
          </a>
          <a
            href="https://www.linkedin.com/company/pid-analyzers-llc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={75} className="h-12 hover:opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
