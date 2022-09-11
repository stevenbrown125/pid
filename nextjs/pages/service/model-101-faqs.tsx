import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import Breadcrumbs from '../../components/Breadcrumbs'
import { FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/SEO'

const faqs = [
  {
    question: 'How is the instrument calibrated?',
    answer:
      "The calibration of the 101's is to benzene but it is done using isobutylene span gas as a reference."
  },
  {
    question:
      'Is the Model 101 benzene referred or is it isobutylene referred?',
    answer: 'The Model 101 is benzene referred.'
  },
  {
    question: 'Can I use some other gas if I want?',
    answer:
      "You may calibrate the 101's directly to any gas using a high purity standard in the 100ppm concentration range. You may calibrate the instrument to the gas of your preference."
  },
  {
    question: 'Why do I use isobutylene if the calibration is for benzene?',
    answer:
      "Isobutylene is used because it has a non-toxic nature while closely mimicking the response of other volatiles to PID'S."
  },
  {
    question: 'What exactly does the span setting do?',
    answer:
      'The span setting is used as a quick reference calibration. A calibration using the span gas, and meter reading is more accurate.'
  },
  {
    question:
      'What does the multipoint calibration feature on the DL101 do and how does it help me?',
    answer:
      'At analyte concentrations above 700 ppm, instrument response ceases to be linear. A multipoint calibration enables a linear reading in the 700 to 2000 ppm range. This is done by forcing linearity at the high concentration range through extrapolation of the calibration curve.'
  },
  {
    question: 'What lamp do I need to see this (x) compound?',
    answer:
      'Refer to the Ionization Potential (IP) of compound (x) as found in this trainin the Ep of the compound is below the lamp emission energy, then it will be ionized and detected, Keep in mind that our 10.2eV lamp is actually emitting up to 10.6eV and will therefore ionize compounds with this higher IP.'
  },
  {
    question: 'Is the instrument very sensitive to this?',
    answer:
      'HNU has compiled a significant list of compounds with their Ionization Iotentials. Use this first to determine the delectability of the compound.'
  },
  {
    question: 'What is the sensitivity?',
    answer:
      'The sensitivity of the compound is dependent upon a number of factors and although there are trends in sensitivities within categories of compounds (alkanes, alkenes, alcohols, etc.) the best way to determine sensitivity is a direct test.'
  },
  {
    question: 'What precautions must be taken with the charging system?',
    answer:
      'A final note on charging: When charging the PI-101 and NW-101, the probe assembly must be connected to the readout module. When charging the IS-101 the probe assembly must be disconnected from the readout module. The DL-101 will charge either way.'
  },
  {
    question: 'Can I leave the instrument on the charger all the time?',
    answer:
      "The 101's can be left on their chargers continuously without endangering the instrument."
  },
  {
    question:
      'Can I let it run completely down and if so how long does it take to charge?',
    answer:
      'Unlike a nickel/cadmium battery, the lead acid battery does not have to run down completely after every use. As a matter of fact, if you do run the battery down completely it will lose its ability to charge!'
  },
  {
    question: 'What exactly does intrinsically safe mean?',
    answer:
      'By definition, intrinsically safe means that the instrument is third party certified per National Electric Code Standards for Class 11 Division I and Harmonized European standards. Thus, the IS-101 is designed to be incapable of causing an explosion even in the presence of explosive concentrations of flammable gases or vapors.'
  },
  {
    question:
      'Why would I need the instrument to be intrinsically safe and is it really necessary?',
    answer:
      "Typically an instrument certified as intrinsically safe is needed only in cases where strict safety guidelines are enforced, such as refineries and petrochemical plants. In most other cases, a general purpose/Division II instrument is more than adequate. The PI-101, and DL-101 are general purpose,'Division 11 instruments."
  },
  {
    question:
      'When using the DL-101, is it difficult to download information to a PC?',
    answer:
      'Downloading data from the DL-101 is an easy operation and does not require any special software. It can all be done with standard Windows™ Hyperterminal SoftWare. The data is transferred to a standard ASCII data file that can be accessed by most spreadsheet and word processing software packages.'
  },
  {
    question: 'What are the effects of humidity on the 101 instruments?',
    answer:
      'High levels of humidity absorb EMR emissions from the lamp and prevent analytes from being fully ionized. This interference is known as quenching and as dampening the UV signal.'
  },
  {
    question: 'At what level does humidity become a problem?',
    answer:
      'A relative humidity of 90% will decrease the instrument signal by approximately 40%. Relative humidity as low as 20% can have an effect on the PID.'
  },
  {
    question: 'What can be done to eliminate this problem?',
    answer:
      "To compensate for these effects calibrate the instrument with gas that is at ambient humidity conditions. This is easilly accomplished by using Hnu's Calibration Gas Humidifier. This moisture permeable membrane is placed between the calibration gas and probe of the instrument, instantaneously equilibrating the calibration gas to ambient humidity."
  },
  {
    question:
      'What are the general maintenance requirements of the instruments?',
    answer:
      "A primary maintenance concern is to keep the lamp and ion chamber clean. The ion chamber can be cleaned by soaking it in methanol and then thoroughly drying the chamber. Ue MstW window of the 9 SeV and 10.2eV lamps are cleaned with HNU's lamp cleaning compound. The 11.7eV lamp must be cleaned with a non-aqueous solvent, typically carbon tetrachloride, NOT METHANOL!"
  },
  {
    question: 'How often do you need to change the lamps?',
    answer:
      'The 9.5eV and 10.2eV lamps are rated for 2000 - 5000 operating hours and the 11.7eV lamps, rated for 500-700 operating hours.'
  },
  {
    question: 'Does HNU rent or lease these instruments?',
    answer:
      'HNU does not rent instruments. However, we do sell to a number of rental companies throughout the country.'
  },
  {
    question: 'What about trade-ins for old instruments?',
    answer: 'This depends on the year and condition, call us to find out.'
  }
]
const pages = [
  { name: 'Service', href: '/service', current: false },
  { name: 'Model 101 FAQ', href: '/service/model-101-faq', current: true }
]
interface IFAQ {
  question: string
  answer: string
}

function Model101FAQPage() {
  const emptyQuery = ''
  const filterData: IFAQ[] = []
  const [state, setState] = useState({
    filteredData: filterData,
    query: emptyQuery
  })

  const handleInputChange = (event: any) => {
    const query = event.target.value

    // return all filtered posts
    const filteredData = faqs.filter((faq) => {
      // destructure data from post frontmatter
      const { question, answer } = faq
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        question.toLowerCase().includes(query.toLowerCase()) ||
        answer.toLowerCase().includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const renderFaq = hasSearchResults ? filteredData : faqs
  return (
    <Layout>
      <Seo title="Model 101 FAQs" />
      <section>
        <div className="relative px-4 pt-4 mx-auto bg-white shadow-md sm:px-12 lg:px-16 lg:max-w-7xl">
          <Breadcrumbs pages={pages} />
          <h2 className="font-semibold leading-6 tracking-wide uppercase text-primary">
            System Service
          </h2>
          <h3
            className="mb-6 text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl"
            id="faqs"
          >
            Model 101 FAQs
          </h3>
          <div className="max-w-5xl mx-auto my-6 md:my-10">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 sm:text-md"
            >
              Quick search
              <div className="relative flex items-center mt-1">
                <input
                  type="text"
                  name="search"
                  id="search"
                  aria-label="Search"
                  placeholder="Type to filter faq..."
                  onChange={handleInputChange}
                  className="block w-full pr-12 text-sm border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-md"
                />
              </div>
            </label>
          </div>
          <div className="w-full px-4 pb-20">
            <div className="w-full max-w-5xl p-2 mx-auto bg-white rounded-2xl">
              {renderFaq.length === 0 ? (
                <div>
                  <p>
                    Sorry! That search produced no results. Try entering
                    something else or
                    <Link href="/contact">
                      <a className="ml-1 text-red-600 hover:text-red-800">
                        contact us
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                renderFaq.map((faq) => (
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-900 bg-red-100 rounded-lg sm:text-md md:text-lg focus:outline-none hover:bg-red-200 focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                          <span>{faq.question}</span>
                          <FaChevronUp
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-red-800`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 sm:text-md md:text-lg">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Model101FAQPage
