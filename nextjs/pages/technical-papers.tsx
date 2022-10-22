import CTA from '../components/CTA';
import client from '../client';
import { NextPage } from 'next';
import { allPapersQuery } from '../lib/sanity/allPapersQuery';
import Seo from '../components/SEO';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const data = await client.fetch(allPapersQuery);
  return {
    props: {
      data,
      appId: process.env.SQ_APP_ID,
      locationId: process.env.SQ_LOCATION_ID,
    },
  };
}

interface IPaper {
  id: string;
  author: string | null;
  pdf: string;
  title: string;
  type: string;
  year: number | null;
}

const TechnicalPapersPage: NextPage = (props: any) => {
  const portable = props.data.filter(
    (analyzer: IPaper) => analyzer.type === 'Portable'
  );
  const continuous = props.data.filter(
    (analyzer: IPaper) => analyzer.type === 'Continuous'
  );
  const laboratory = props.data.filter(
    (analyzer: IPaper) => analyzer.type === 'Laboratory'
  );
  const notes = props.data.filter(
    (analyzer: IPaper) => analyzer.type === 'Application Notes'
  );
  return (
    <Layout>
      <Seo
        title="Technical Papers"
        description="Our sensor technologies include photoionization, infrared, electrochemistry, catalytic combustion, flame ionization, capacitance, thermal conductivity, process gas chromatography. Many of our analyzers are multifunctional and include multiple technologies."
      />
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="mb-6 text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            PID Analyzers
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Technical Papers
          </h3>
        </div>
        <div className="pb-8 prose text-gray-500 lg:prose-lg max-w-none">
          <p>
            Check out our Techinical Papers and Application Notes for more in
            depth analysis on various topics.
          </p>
          <h4 className="mb-6 text-2xl font-bold text-red-700 text-md ">
            Portable Instruments
          </h4>
          <ul>
            {portable.map((item: IPaper) => (
              <li key={item.id}>
                {item.author} {item?.year} -{' '}
                <a
                  href={item.pdf}
                  target="_blank"
                  className="font-normal text-red-600 no-underline hover:underline"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="mb-6 text-2xl font-bold text-red-700 text-md ">
            Continuous Instruments
          </h4>
          <ul>
            {continuous.map((item: IPaper) => (
              <li key={item.id}>
                {item.author} {item?.year} -{' '}
                <a
                  href={item.pdf}
                  target="_blank"
                  className="font-normal text-red-600 no-underline hover:underline"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="mb-6 text-2xl font-bold text-red-700 text-md ">
            Laboratory Instruments
          </h4>
          <ul>
            {laboratory.map((item: IPaper) => (
              <li key={item.id}>
                {item.author} {item?.year} -{' '}
                <a
                  href={item.pdf}
                  target="_blank"
                  className="font-normal text-red-600 no-underline hover:underline"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="mb-6 text-2xl font-bold text-red-700 text-md ">
            Application Notes
          </h4>
          <ul>
            {notes.map((item: IPaper) => (
              <li key={item.id}>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="font-normal text-red-600 no-underline hover:underline"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default TechnicalPapersPage;
