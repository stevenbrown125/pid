import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import Layout from '../../components/Layout'
import Seo from '../../components/SEO'

const pages = [
  { name: 'Service', href: '/service', current: false },
  {
    name: 'Lapping (Cleaning) Compound MSDS',
    href: '/service/lapping-compound-msds',
    current: true
  }
]

function LappingCompoundMSDSPage() {
  return (
    <Layout>
      <Seo title="Lapping Compound MSDS" />
      <section>
        {/* Main Content */}
        <div className="relative px-4 pt-4 mx-auto bg-white shadow-md sm:px-12 lg:px-16 lg:max-w-7xl">
          <Breadcrumbs pages={pages} />
          <div className="text-base">
            <h2 className="font-semibold leading-6 tracking-wide uppercase text-primary">
              System Service
            </h2>
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              Material Safety Data Sheet
            </h3>
            <h4 className="mb-6 text-2xl font-bold text-red-700 text-md ">
              WS Lapping (Cleaning) Compoud - Water Soluble
            </h4>
          </div>
          <div className="prose text-gray-500 lg:prose-lg max-w-none">
            <ul className="list-none">
              <li>
                <span className="font-semibold">Product Name:</span> Cleaning
                Compund MSDS
              </li>

              <li>
                <span className="font-semibold">Version:</span> 5.0
              </li>
              <li>
                <span className="font-semibold">Date:</span> March 2006
              </li>
              <li>
                <span className="font-semibold">Version:</span> 5.0
              </li>
              <li>
                <span className="font-semibold">Product Part Number:</span>{' '}
                81-101-500
              </li>
            </ul>
            {/* 1) Chemical Product and Company Identification */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                1) Chemical Product and Company Identification
              </h5>
            </div>
            <dl className="pt-6">
              <dt className="font-medium">PID ANALYZERS, LLC</dt>
              <dd className="pl-4">
                2 Washington Circle, Unit 4
                <br />
                Sandwich, MA 02563
                <br />
                Telephone Number: (774) 413-5281
                <br />
                <span className="font-medium text-red-700 uppercase">
                  24-Hour Emergency Number: 1-617-699-4307
                </span>
                <br />
                Email:{' '}
                <a
                  href="mailto:sales@hnu.com"
                  className="text-red-700 hover:underline"
                >
                  sales@hnu.com
                </a>
              </dd>
            </dl>
            <p>
              <span className="font-semibold">Product Name:</span> Cleaning
              Compound
            </p>
            <p>
              <span className="font-semibold">Chemical Name:</span> Aluminum
              Oxide
            </p>
            <p>
              <span className="font-semibold">Common Names / Synonyms:</span>{' '}
              Cleaning Compound for PID Lamps
            </p>
            <p>
              <span className="font-semibold">Classification:</span> #1344-28-1
            </p>

            {/* 2) Composition / Information on Ingredients */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                2) Composition / Information on Ingredients
              </h5>
            </div>
            <p>
              <span className="font-semibold">Ingredient Percentage:</span>{' '}
              Off-White Aluminum Oxide in complex mixture of glycols, water and
              flowers of sulphur
            </p>
            <p>
              <span className="font-semibold">Volume</span> 5 grams
            </p>
            <p>
              <span className="font-semibold">PEL-OSHA:</span> N/A
            </p>
            <p>
              <span className="font-semibold">TLV-ACGIH:</span> N/A
            </p>
            <p>
              <span className="font-semibold">
                LD50 or LC50Route / Species:
              </span>{' '}
              N/A
            </p>
            {/* 3. Hazards Identifiation Emergency Overview */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                3) Hazards Identifiation Emergency Overview
              </h5>
            </div>
            <p>
              Release of this product may produce a mild odor (especially in
              confined spaces or other poorly ventilated environments);
              individuals in such atmospheres have no real chance of
              asphyxiation.
            </p>
            <h6 className="font-medium">Route of Entry</h6>
            <ul>
              <li>
                <span className="font-semibold">Skin:</span> No
              </li>
              <li>
                <span className="font-semibold">Contact Skin:</span> Yes
              </li>
              <li>
                <span className="font-semibold">Absorption:</span> No
              </li>
              <li>
                <span className="font-semibold">Eye Contact:</span> No
              </li>
              <li>
                <span className="font-semibold">Inhalation:</span> No
              </li>
              <li>
                <span className="font-semibold">Ingestion:</span> Yes
              </li>
            </ul>
            <h6 className="font-medium">Health Effects</h6>
            <ul>
              <li>
                <span className="font-semibold">Exposure Limits:</span> Yes
              </li>
              <li>
                <span className="font-semibold">Irritant:</span> No
              </li>
              <li>
                <span className="font-semibold">Sensitization:</span> No
              </li>
              <li>
                <span className="font-semibold">Reproductive Hazard:</span> No
              </li>
              <li>
                <span className="font-semibold">Mutagen:</span> No
              </li>
              <li>
                <span className="font-semibold">Carcinogenicity:</span> No
              </li>
              <li>
                <span className="font-semibold">NTP:</span> No
              </li>
              <li>
                <span className="font-semibold">IARC:</span> No
              </li>
              <li>
                <span className="font-semibold">OSHA:</span> No
              </li>
            </ul>
            <p className="uppercase">
              <span className="font-semibold">Eye Effects:</span> Will Irritate
              Eyes
            </p>
            <p className="uppercase">
              <span className="font-semibold">Skin Effects:</span> May cause
              dermatitis after prolonged use
            </p>
            <h6 className="font-medium">Material Safety Data Sheet</h6>
            <p>
              <span className="font-semibold uppercase">Ingestion Effects</span>{' '}
              Ingestion unlikely, CALL DOCTOR IMMEDIATELY. Do not induce
              vomiting.
            </p>
            <p>
              <span className="font-semibold uppercase">
                Inhalation Effectsd:
              </span>{' '}
              Due to the small size of this container, no unusual health effects
              from over-exposure are anticipated under normal routine use. Mild
              odor.
            </p>

            <h6 className="font-medium">
              NFPA HAZARD CODES HMIS HAZARD CODES RATING SYSTEM
            </h6>
            <ul>
              <li>
                Health: <span className="font-semibold">1</span>
              </li>
              <li>
                Flammability: <span className="font-semibold">0</span>
              </li>
              <li>
                Flammability: <span className="font-semibold">0</span>
              </li>
              <li>
                Reactivity: <span className="font-semibold">0</span>
              </li>
            </ul>
            <p className="font-semibold">
              *0= No Hazard, 1= Slight Hazard, 2= Moderate Hazard, 3= Serious
              Hazard, 4= Severe Hazard
            </p>
            {/* 4. First Aid Measures */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                4) First Aid Measures
              </h5>
            </div>
            <p>
              <span className="font-semibold uppercase">Eyes:</span> WASH EYES
              IN EYEWASH FOR 30 MINUTES LET DRIP DRY. DO NOT RUB EYES
            </p>
            <p>
              <span className="font-semibold uppercase">Ingestion:</span> DO NOT
              INGEST. PROMPT MEDICAL ATTENTION IS MANDATORY IN ALL CASED OF
              OVEREXPOSURE. RESCUE PERSONNEL SHOULD BE EQUIPPED WITH POISON
              KITS. Victims should be assisted to an uncontaminated area and
              inhale fresh air. Quick removal from the contaminated area is most
              important. If breathing has stopped administer artificial
              resuscitation and supplemental oxygen. Further treatment should be
              symptomatic and supportive. DO NOT INDUCE VOMITING
            </p>
            <p>
              <span className="font-semibold uppercase">Inhalation:</span> None
            </p>
            {/* 5. Fire-Fighting Measures */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                5. Fire-Fighting Measures
              </h5>
            </div>
            <p>This substance in not flammable.</p>
            {/* 6. Accidental Release Measures */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                6. Accidental Release Measures
              </h5>
            </div>
            <p>
              n terms of weight, these containers hold very little contents,
              such that any accidental release by puncturing etc. will be of no
              practical concern.
            </p>
            {/* 7. Handling and Storage */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                7. Handling and Storage
              </h5>
            </div>
            <p>
              Suck back of water into the container must be prevented. Do not
              allow backfeed into the container. Use only properly specified
              equipment which is suitable for this product, its supply pressure
              and temperature. Use only in well-ventilated areas. Do not heat
              cylinder by any means to increase rate of product from the
              cylinder. Do not allow the temperature where syringes are stored
              to exceed 130oF (54oC).
            </p>
            {/* 8. Exposure Controls / Personal Protection */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                8. Exposure Controls / Personal Protection
              </h5>
            </div>
            <p>
              Use adequate ventilation and protective gloves for extended use of
              cleaning compound.
            </p>
            <p>
              <span className="font-semibold uppercase">
                MATERIAL SAFETY DATA SHEET - LAPPING COMPOUND PRODUCT NAME:
              </span>{' '}
              Cleaning Compound
            </p>
            {/* 9. Physical and Chemical Properties Parameter Value */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                9. Physical and Chemical Properties Parameter Value
              </h5>
            </div>
            <ul>
              <li>Physical state : solid</li>
              <li>Evaporation point : N/A</li>
              <li>pH : N/A</li>
              <li>Odor and appearance : Colorless, mild odor</li>
            </ul>
            {/* 10. Stability and Reactivity */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                10. Stability and Reactivity
              </h5>
            </div>
            <p>
              Stable under normal conditions. Expected shelf life 24 months.
            </p>
            {/* 11. Toxiological Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                11. Toxiological Information
              </h5>
            </div>
            <p>No toxicological damage caused by this product.</p>
            {/* 12. Ecological Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                12. Ecological Information
              </h5>
            </div>
            <p>No ecological damage caused by this product.</p>
            {/* 13. Disposal Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                13. Disposal Information
              </h5>
            </div>
            <p>
              Do not discharge into any place where its accumulation could be
              dangerous. Used sryinges are acceptable for disposal in the normal
              waste stream as long as the cylinder is empty and valve removed or
              cylinder wall is punctured.
            </p>
            {/* 14. Transport Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                14. Transport Information
              </h5>
            </div>
            <ul>
              <li>
                United States DOT/Canada TDG PROPER SHIPPING NAME: Lapping
                (Cleaning) Compound
              </li>
              <li>HAZARD CLASS: N/A</li>
              <li>IDENTIFICATION NUMBER: UN1956</li>
              <li>SHIPPING LABEL: NONFLAMMABLE GAS</li>
            </ul>
            {/* 15. Regulatory Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                15. Regulatory Information
              </h5>
            </div>
            <p>
              Isobutylene is listed under the accident prevention provisions of
              section 112(r) of the Clean Air Act (CAA) with a threshold
              quantity (TQ) of 10,000 pounds.
            </p>
            {/* 16. Other Information */}
            <div className="border-b border-gray-200">
              <h5 className="text-lg font-medium leading-6 text-gray-900">
                16. Other Information
              </h5>
            </div>
            <p>
              This MSDS has been prepared in accordance with the Chemicals
              (Hazard Information and Packaging for Supply (Amendment)
              Regulation 1996. The information is based on the best knowledge of
              PID Analyzers, LLC , and its advisors and is given in good faith,
              but we cannot guarantee its accuracy, reliability or completeness
              and therefore disclaim any liability for loss or damage arising
              out of use of this data. Since conditions of use are outside the
              control of the Company and its advisors we disclaim any liability
              for loss or damage when the product is used for other purposes
              than it is intended. MSDS/81-101-500/March, 2006
            </p>
            <h4 className="text-2xl font-bold text-red-700 text-md">
              Want more information?
            </h4>
            <div className="flex justify-center pt-4 pb-20 mr-4 md:justify-start">
              <Link href="/contact">
                <a className="flex items-center justify-center px-5 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-primary hover:bg-primary-dark">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LappingCompoundMSDSPage
