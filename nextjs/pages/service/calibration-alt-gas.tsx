import { NextPage } from 'next';
import Image from 'next/image';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTA from '../../components/CTA';
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';

const pages = [
  { name: 'Service', href: '/service', current: false },
  {
    name: 'Calibration with Alternate Gas',
    href: '/service/calibration-alt-gas',
    current: true,
  },
];

const CalibrationWithAltGasPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="Calibration with an Alternate Gas" />
      <section className="relative px-4 py-6 pb-10 mx-auto shadow-md sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            System Service
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Calibration with an Alternate Gas
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        <div className="text-gray-500 md:flex">
          <figure className="mb-4 mr-6">
            <Image
              className="object-cover w-64 border shadow-md border-neutral-700"
              src="/images/8-1_calillustration_service.jpg"
              alt="Calibration with an Alternate Gas"
              height={900}
              width={328}
            />
            <figcaption className="text-xs md:text-right">
              Calibration Checking Set-up
            </figcaption>
          </figure>
          <div className="prose md:prose-lg max-w-none">
            <p>
              If a calibration standard with the same trace gas as that to be
              measured is not available or is hazardous, it is possible to use
              an alternate calibration gas. (note: this techniquemay not be as
              accurate as calibration with the species of interest.)
            </p>
            <p>
              In this case, the expected reading for the calibration must be
              compensated for the difference between the two gases. In
              operation, the meter will then give a direct reading of the gas
              being measured.
            </p>
            <h4 className="text-red-700 text-md">
              This calibration is illustrated in the following examples:
            </h4>
            <p className="text-sm">
              (PS = Photoionization Sensitivity. See
              <a
                target="_blank"
                href="https://cdn.sanity.io/files/bg59ms84/production/5d9a6905fd197a21dd209dd42d421388514697b3.pdf"
                className="pl-1 text-red-600 cursor-pointer hover:underline"
                rel="noreferrer"
              >
                IP Chart
              </a>
              )
            </p>
            <h4 className="text-red-700 text-md">A. Given a case in which:</h4>
            <div className="ml-4">
              <ol className="relative list-decimal ">
                <li className="">
                  The trace gas to be measured is Vinyl Chloride (PS = 3.2)
                </li>
                <li className="">
                  The calibration gas used is Isobutylene (PS = 5.5) at 100 ppm
                </li>
              </ol>
              <p>
                What will the ppm reading be when calibrating to give a direct
                reading for Vinyl Chloride?
              </p>

              <p>The required reading for calibration will be:</p>
              <p>
                = Isobutylene ppm * [ PS (Isobutylene) / PS (Vinyl Chloride) ]
              </p>
              <p>= 100 * ( 5.5 / 3.2 )</p>
              <p>= 172 ppm</p>
              <p>
                In this example, using a calibration gas with 100 ppm of
                Isobutylene, adjust the SPAN control so the meter reads 172 ppm.
                In operation, the instrument will then give a direct reading of
                100 ppm of Vinyl Chloride.
              </p>
              <p>
                An alternate approach is to leave the instrument calibrated for
                isobutylene and multiply the readings by 5.5 over 3.2 = 1.72
              </p>
            </div>
            <h4 className="text-red-700 text-md">B. Given a case in which:</h4>
            <div className="ml-4">
              <ol className="relative list-decimal ">
                <li>The trace gas to be measured is Benzene (PS = 10.0)</li>
                <li>
                  The calibration gas to be measured is Isobutylene (PS = 5.5)
                  at 100 ppm
                </li>
              </ol>
              <p>
                What will the ppm reading be when calibrating to give a direct
                reading when measuring benzene?
              </p>
              <p>
                What will the ppm reading be when calibrating to give a direct
                reading when measuring benzene?
              </p>
              <p>The required reading for calibration will be:</p>
              <p>= Isobutylene ppm *[ PS (Isobutylene) / PS (Benzene) ]</p>
              <p>= 100 * ( 5.5 / 10.0)</p>
              <p>= 55 ppm</p>
              <p>
                In this example, using a calibration gas with 100 ppm of
                Isobutylene, adjust the SPAN control so the meter reads 55 ppm.
                In operation, the instrument will then give a direct reading of
                the ppm of Benzene.
              </p>
            </div>
            <h4 className="text-red-700 text-md">B. Given a case in which:</h4>
            <div className="ml-4">
              <ol className="relative list-decimal ">
                <li>
                  The trace gas to be measured is Hydrogen Sulfide (PS = 2.8)
                </li>
                <li>
                  The level of Hydrogen Sulfide which is to be calibrated is 60
                  ppm.
                </li>
                <li className="font-bold">
                  The calibration gas available is Isobutylene (PS = 5.5)
                </li>
              </ol>
              <p>
                What concentration of Isobutylene is required to permit direct
                reading of hydrogen sulfide, at 60 ppm?
              </p>
              <p>The required Isobutylene level for calibration will be:</p>
              <p>
                = H<sub>2</sub>S ppm * [ PS (H
                <sub>2</sub>
                S) / PS (Isobutylene) ]
              </p>
              <p>= 60 * (2.8 / 5.5)</p>
              <p>= 30.5 ppm</p>
              <p>
                In this example, using a calibration gas with 30.5 ppm of
                Isobutylene, adjust the SPAN control so the meter reads 60 ppm.
                In operation, the instrument will then give a direct reading of
                the ppm of Hydrogen Sulfide.
              </p>
              <p>
                It is extremely important to stay below the Lower Explosive
                Limit (LEL) when working with flammable gas samples and with
                hazardous or toxic gases to stay below the Threshold Limit Value
                (TLV) safe working level.
              </p>
              <p>
                If you are having difficulties when calibrating your instrument,
                the user should consult PID Analyzers&rsquo; service department.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default CalibrationWithAltGasPage;
