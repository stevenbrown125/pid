import Image from "next/image";

export default function LogoCloud(): JSX.Element {
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
            <Image
              width={75}
              height={75}
              className="object-contain w-auto h-12 hover:opacity-60"
              src="/images/social/fb.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://twitter.com/pidgirl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={75}
              height={75}
              className="object-contain w-auto h-12 hover:opacity-60"
              src="/images/social/x.png"
              alt="X"
            />
          </a>
          <a
            href="https://www.instagram.com/hnu_pid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={75}
              height={75}
              className="object-contain w-auto h-12 hover:opacity-60"
              src="/images/social/IG.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://analyzersource.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={75}
              height={75}
              className="object-contain w-auto h-12 hover:opacity-60"
              src="/images/social/blogger-logo-icon-png-6.png"
              alt="Blogger"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/pid-analyzers-llc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={75}
              height={75}
              className="object-contain w-auto h-12 hover:opacity-60"
              alt="Linkedin"
              src="/images/social/LI.png"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
