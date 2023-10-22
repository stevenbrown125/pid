import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";
import { toPlainText } from "@portabletext/react";

const Highlighted = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

const submitQuery = async (query: any) => {
  const res = await fetch("/api/search", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const results = await res.json();
  return results.results;
};

const SearchContainer = ({ show, setSearchOpen }: any): any => {
  /* Pull Search Data from GraphQL */

  const [query, setQuery] = useState("");
  const [renderResults, setRenderResults] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const handleClose = () => {
    /* Uses setTimeout to avoid issues with clicking the search icon to close */
    setTimeout(() => setSearchOpen(false), 2);
    setQuery("");
    setIsTyping(true);
    setRenderResults([]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const results: any = await submitQuery(query);
    console.log(results);
    let renderResultsArr: any = [];

    results.forEach((r: any) => {
      renderResultsArr.push({
        ...r,
      });
    });
    setRenderResults(renderResultsArr);
    setIsTyping(false);
  };

  /* Pulls an example of the query word being used in the result */
  const pullContent = (query: string, description: PortableTextBlock) => {
    let content = "";

    const plainText = toPlainText(description);
    content = plainText.slice(
      0,
      plainText.length > 128 ? 128 : plainText.length
    );

    return content;
  };

  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 w-screen "
          onClose={handleClose}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="inset-0 flex items-start justify-center pt-24 md:mt-2">
              <div className="flex-col items-center justify-center w-full shadow-xl bg-[#ffe4e4]">
                {/* Search Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center justify-center mx-auto mt-3 md:my-6 max-w-7xl"
                >
                  <label
                    htmlFor="search"
                    className="flex items-center text-sm font-medium text-gray-700 sm:text-md"
                  >
                    <span className="sr-only">Quick search</span>
                    <div className="relative flex items-center mt-1">
                      <input
                        type="text"
                        name="query"
                        id="query"
                        aria-label="Search"
                        onChange={(e) => {
                          setQuery(e.target.value);
                        }}
                        value={query}
                        placeholder="Type to search"
                        className="block w-full py-3 pr-12 text-xs border-gray-300 rounded-md shadow-sm sm:text-sm sm:w-96 focus:ring-red-500 focus:border-red-500 sm:text-md"
                      />
                    </div>
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center p-2 m-4 font-medium text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none "
                  >
                    <FaSearch className="w-6 h-6" aria-hidden="true" />
                    <span className="sr-only md:not-sr-only">Search</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -m-2 text-black rounded-md hover:text-red-700 focus:outline-none "
                    onClick={() => handleClose()}
                  >
                    <span className="sr-only">Close menu</span>
                    <GrClose className="w-6 h-6" aria-hidden="true" />
                  </button>
                </form>

                {/* Search Result Listings */}
                {isTyping === true && renderResults.length === 0 ? (
                  ""
                ) : (
                  <div
                    className={`${
                      renderResults.length > 3 ? "pb-56" : "pb-4"
                    } w-screen max-h-screen px-4 pt-2  mx-auto overflow-auto h-fit sm:max-w-2xl xl:max-w-7xl bg-neutral-50`}
                  >
                    {renderResults.length > 0 ? (
                      renderResults.map((result: any) => (
                        <div key={result.id} className="px-4 py-2 lg:px-0">
                          <Link href={`/product/${result.slug}`} legacyBehavior>
                            <a
                              className="font-bold text-red-600 hover:text-red-900"
                              onClick={() => handleClose()}
                            >
                              <Highlighted
                                text={result.title}
                                highlight={query}
                              />
                            </a>
                          </Link>

                          {result.description && (
                            <div className="block text-xs md:text-base">
                              <Highlighted
                                text={pullContent(query, result.description)}
                                highlight={query}
                              />
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 lg:px-0">
                        <p className="font-bold text-red-600">No results</p>
                        <div className="block text-xs md:text-base">
                          Your search query produced no results. Try a different
                          search term or browse our{" "}
                          <Link href="/products/" legacyBehavior>
                            <a
                              onClick={() => handleClose()}
                              className="text-red-600 hover:text-red-900"
                            >
                              products
                            </a>
                          </Link>
                          .
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SearchContainer;
