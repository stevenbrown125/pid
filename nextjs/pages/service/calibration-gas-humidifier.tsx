import { NextPage } from 'next';
import Image from "next/legacy/image";
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTA from '../../components/CTA';
import Layout from '../../components/Layout';
import Seo from '../../components/SEO';

const pages = [
  { name: 'Service', href: '/service', current: false },
  {
    name: 'Calibration Gas Humidifier',
    href: '/service/calibration-gas-humidifier',
    current: true,
  },
];

const catalog = [
  {
    number: '20-ME11012TT3-1',
    description:
      "Calibration Gas Humidifier Ideal for use with the Process Analyzers Calibration Kit. (Kits include two span gas cylinders, one regulator, a complete 'O' ring kit, a set of replacement fuses and a set of screwdrivers.",
  },
  {
    number: '81-101-352',
    description: 'PI Calibration Kit',
  },
  {
    number: '81-IS101-352',
    description: 'IS Calibration Kit',
  },
];
const CalibrationGasHumidifierPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="Calibration Gas Humidifier" />
      <section className="relative px-4 py-6 pb-10 mx-auto shadow-md sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            System Service
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Calibration Gas Humidifier
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        <div className="prose text-gray-500 md:prose-lg max-w-none">
          <figure className="float-left mr-6 ">
            <Image
              className="object-cover w-48 h-64 border shadow-md border-neutral-700"
              src="/images/cal_gasphoto.gif"
              alt="Calibration Gas Humidifier"
              width={300}
              height={300}
            />
            <figcaption className="text-xs md:text-right">
              Calibration Gas Humidifier
            </figcaption>
          </figure>
          <p>
            All photoionization (PID) analyzers, when calibrated with dry
            calibration gas, can be affected by changes in ambient humidity
            conditions (see graph below). A decrease in response with increasing
            humidity results from absorption of the light energy by the water
            (in the 125-105 nm region). The experienced user compensates for
            these effects by calibrating the unit with standards prepared at
            ambient humidity levels. While not particularly difficult this can
            become a cumbersome and time consuming procedure.
          </p>

          <h4 className="text-red-700 text-md">
            Here&rsquo;s a simple way to calibrate your Model 101 analyzer to
            ambient humidity conditions.
          </h4>
          <figure className="float-right ml-6 ">
            <Image
              width={300}
              height={300}
              className="object-cover aspect-1"
              src="/images/cal_gas_curve.gif"
              alt="Calibration Gas Humidifier Curve"
            />
            <figcaption className="text-xs md:text-right">
              Calibration Gas Humidifier
            </figcaption>
          </figure>
          <p>
            PID Analyzers now offers a unique, inexpensive and easy-to-use
            device for calibrating our photoionization based analyzers (PI, IS,
            102) at ambient humidity conditions. This simple is called a
            calibration gas humidifier. Consisting mainly of a permeable
            membrane, it is placed in-line between the calibration gas source
            and the probe of the PID analyzer. Once in place, the standard Model
            101 calibration procedure is follow (see below). The membrane
            “instantaneously” equilibrates the calibration gas to ambient
            humidity conditions. As a result, ambient humidity effects are
            eliminated. The calibration gas humidifier lets you read directly in
            ppm with virtually no inaccuracies-even in high humidity conditions.
          </p>
        </div>
        <h4 className="pt-6 text-2xl font-bold text-red-700 text-md">
          Instructions
        </h4>
        <h5 className="text-xl font-semibold text-red-700 uppercase text-md">
          CALIBRATION GAS HUMIDIFIER
        </h5>
        <p className="text-lg font-semibold text-gray-800 ">
          for the PID Analyzer Model 101
        </p>
        <div className="prose text-gray-500 border-t md:prose-lg max-w-none border-neutral-500">
          <p className="font-medium">To perform ambient humidity calibration</p>
          <ol>
            <li>Turn on the 101 and check the Zero in the Standby Mode.</li>
            <li>Turn the Range switch to 0-2000</li>
            <li>
              Connect the tygon tubing end of the humidifier to the span gas
              cylinder regulator.
            </li>
            <li>
              Connect the fitting and (white polypropylene) of the humidifier to
              the 101 probe extension.
            </li>
            <li>Open the valve on the span gas cylinder.</li>
            <li>
              When the reading stabilizes (15-30 seconds), adjust the Span Pot
              until the meter reads the correct value for the calibration gas in
              use. For a benzene-referred calibration using Process Analyzers
              span gas, adjust the meter to read the value on the cylinder label
              (normally about 55 oom).
            </li>
            <li>
              The 101 is now calibrated for direct reading on the calibration
              gas (e.g. benzene) at ambient humidity.
            </li>
            <li>
              The calibration can be adjusted for changes in humidity by
              repeating the process.
            </li>
            <li>
              The Gas Humidifier can be retained to analyze samples which have
              higher or lower humidity than ambient. Care should be taken to
              determine whether the compounds of interest are compatible with
              the humidifier.
            </li>
          </ol>
          <p>
            NOTE: These procedures must be followed using our membrane device to
            provide correlative data between PID and FID analyzers for soil
            sampling equivalency determinations (such as Florida DER 17.70
            regulations).
          </p>
        </div>

        <h4 className="py-6 text-2xl font-bold text-red-700 text-md">
          Order Info
        </h4>
        <table className="divide-y divide-gray-300 ">
          <thead className="break-normal bg-gray-50">
            <tr className="divide-x divide-gray-200">
              <th
                scope="col"
                className="py-3.5 pl-4 pr-4 text-left text-md font-semibold text-gray-900 sm:pl-6"
              >
                Catalog Number
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-md font-semibold text-gray-900"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {catalog.map((item) => (
              <tr key={item.number} className="divide-x divide-gray-200">
                <td className="py-4 pl-4 pr-4 font-medium text-gray-900 text-md whitespace-nowrap sm:pl-6">
                  {item.number}
                </td>
                <td className="p-4 text-gray-500 text-md ">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <CTA />
    </Layout>
  );
};

export default CalibrationGasHumidifierPage;
