import { useState, Fragment } from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navigation = {
  support: [
    { name: "Service", href: "/service" },
    { name: "Technical Papers", href: "/technical-papers" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ],

  products: [
    { name: "Catalog", href: "/products" },
    { name: "Industries", href: "/products/industry" },
    { name: "Gases", href: "/products/gas" },
    { name: "Applications", href: "/products/application" },
    { name: "Request a Quote", href: "/request-a-quote" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/pidanalyzers",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/user/pidgirl/videos",
      icon: (props: any) => (
        <svg
          fill="currentColor"
          {...props}
          x="0px"
          y="0px"
          viewBox="0 0 461.001 461.001"
          xmlSpace="preserve"
        >
          <path
            fillRule="evenodd"
            d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: "Blogger",
      href: "https://analyzersource.blogspot.com/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
          <path
            fill="#fff"
            d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pidgirl",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default function Footer({ setOpen }: any) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleInput = ({ target }: any) => {
    setEmail(target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Check if robot filled in value
    console.log(e);
    if (e.target[2].value === "") {
      console.log(email);

      setSubscribed(true);
      setOpen(true);
    }
    // const result = await addToMailchimp(email);
    // console.log(result);
    // I recommend setting `result` to React state
    // but you can do whatever you want

    /*
  if (Object.keys(isErrors).length > 0) return;
  setQuote({
    payload: { product: selectedProduct.title, privacy: privacyChecked },

  });

  console.log(quote);
  handleForm(e);
  if (state.succeeded) {
    console.log('success');
  }
  */
  };

  return (
    <footer
      className="relative z-0 bg-red-900 lg:inner-shadow"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <Image
                src="/images/pid-logo-white.png"
                alt="PID Analyzers Logo"
                height={79}
                width={175}
                className="w-auto h-20"
              />
            </Link>
            <p className="text-lg text-neutral-100">
              PID Analyzers is a global leader in developing sensors &amp;
              analyzers for air, water and process applications and distributes
              these products worldwide.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-white hover:text-red-200"
                  rel="noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 gap-8 pb-6">
              <div>
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg text-neutral-100 hover:text-neutral-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg text-neutral-100 hover:text-neutral-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-y-8 items-top">
              <div>
                <h3 className="text-lg font-semibold tracking-wider text-white uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-lg text-neutral-100">
                  The latest news, articles, and resources, sent to your inbox
                  monthly.
                </p>
                <form onSubmit={handleSubmit}>
                  <fieldset
                    className="mt-4 sm:flex sm:max-w-2xl"
                    disabled={subscribed}
                  >
                    <label htmlFor="email-address" className="w-full">
                      <span className="sr-only">Email address</span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        required
                        className="w-full min-w-0 px-4 py-2 text-base bg-white border border-transparent rounded-md appearance-none text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-primary focus:border-primary-dark focus:placeholder-neutral-400"
                        placeholder="Enter your email"
                      />
                    </label>
                    <div className="hidden">
                      <label htmlFor="field">
                        Don&apos;t fill this out if you&apos;re human:
                        <input name="field" id="field" />
                      </label>
                    </div>
                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className={`${
                          subscribed
                            ? "bg-green-100"
                            : "hover:bg-neutral-300 bg-white "
                        } flex items-center justify-center w-full px-4 py-2 text-base font-medium text-black border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-primary`}
                      >
                        {subscribed ? (
                          <FaCheck
                            className="w-6 h-6 mr-1 text-green-600"
                            aria-hidden="true"
                          />
                        ) : (
                          ""
                        )}
                        Subscribe
                        {subscribed ? "d" : ""}
                      </button>
                    </div>
                  </fieldset>
                </form>
                <div>
                  <p className="py-2 pl-1 text-xs text-white">
                    By submitting this form you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:opacity-90"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-neutral-100">
          <p className="text-base text-center text-neutral-100 sm:text-left xl:text-center">
            &copy; {new Date().getFullYear()} PID Analyzers, LLC. All rights
            reserved. View our{" "}
            <Link
              href="/privacy-policy"
              className="hover:text-red-200 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
