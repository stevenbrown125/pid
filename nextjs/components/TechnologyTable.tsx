export default function TechnologyTable() {
  return (
    <table className="mb-8 border border-collapse border-gray-300 table-auto">
      <thead>
        <tr className="bg-red-100">
          <th className="w-1/5 px-4 py-2 border border-gray-300">Technology</th>
          <th className="w-1/6 px-4 py-2 border border-gray-300">Industry</th>
          <th className="px-4 py-2 border border-gray-300">Application</th>
          <th className="w-1/6 px-4 py-2 border border-gray-300">
            Measurement
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-300">
            PID (Photoionization)
            <br /> & FID (Flame ionization)
          </td>
          <td className="px-4 py-2 border border-gray-300">
            Portable, Continuous, Lab
          </td>
          <td className="px-4 py-2 border border-gray-300">
            Volatile Organic Compounds (VOC'S) in Air
            <br />
            <span className="italic">For PID only:</span> H
            <sub className="sub">2</sub>S, NH<sub className="sub">3</sub>, PH
            <sub className="sub">3</sub>, AsH<sub className="sub">3</sub>, Hg
          </td>
          <td className="px-4 py-2 border border-gray-300">ppb, ppm, %</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">PID</td>
          <td className="px-4 py-2 border border-gray-300">Continuous, Lab</td>
          <td className="px-4 py-2 border border-gray-300">VOC’s in Water</td>
          <td className="px-4 py-2 border border-gray-300">ppb, ppm</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Infrared</td>
          <td className="px-4 py-2 border border-gray-300">
            Portable, Continuous
          </td>
          <td className="px-4 py-2 border border-gray-300">
            CH<sub className="sub">4</sub>, THC, CO<sub className="sub">2</sub>,
            N<sub className="sub">2</sub>O, CO
          </td>
          <td className="px-4 py-2 border border-gray-300">ppm to %</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Electrochemistry</td>
          <td className="px-4 py-2 border border-gray-300">
            Portable, Continuous
          </td>
          <td className="px-4 py-2 border border-gray-300">
            NO, NO<sub className="sub">2</sub>, NH<sub className="sub">3</sub>,
            H<sub className="sub">2</sub>S, CO, O<sub className="sub">3</sub>,
            SO<sub className="sub">2</sub>, HCl, Cl<sub className="sub">2</sub>,
            CH<sub className="sub">2</sub>O, N<sub className="sub">2</sub>H
            <sub className="sub">4</sub>, PH<sub className="sub">3</sub>, O
            <sub className="sub">2</sub>
          </td>
          <td className="px-4 py-2 border border-gray-300">
            ppb to ppm
            <br />% (O
            <sub className="sub">2</sub>)
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">
            Gas Chromatography
          </td>
          <td className="px-4 py-2 border border-gray-300">
            Portable, Continuous
          </td>
          <td className="px-4 py-2 border border-gray-300">
            Benzene, BTEX, ETO, H<sub className="sub">2</sub>S, VOC's, PH
            <sub className="sub">3</sub>, AsH<sub className="sub">3</sub>
          </td>
          <td className="px-4 py-2 border border-gray-300"></td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">
            GC Detectors
            <br />
            PID, FID, TCD, Data Systems for GC
          </td>
          <td className="px-4 py-2 border border-gray-300">Lab</td>
          <td className="px-4 py-2 border border-gray-300">
            <span className="italic">Add on to any GC System:</span> VOC's,
            Fixed Gases, Noble Gases
          </td>
          <td className="px-4 py-2 border border-gray-300"></td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">CG & TCD</td>
          <td className="px-4 py-2 border border-gray-300">
            Portable & Continuous
          </td>
          <td className="px-4 py-2 border border-gray-300">
            CG (Combustible Gases), TCD- H<sub className="sub">2</sub>, He
            (Universal Detector)
          </td>
          <td className="px-4 py-2 border border-gray-300">
            % LEL (CG), ppm to 100% (TCD)
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">
            Gas Flow Meters (cc/min)
          </td>
          <td className="px-4 py-2 border border-gray-300"></td>
          <td className="px-4 py-2 border border-gray-300">
            Air, He, H<sub className="sub">2</sub>, Ar, …
          </td>
          <td className="px-4 py-2 border border-gray-300">
            MEMS Type 0-500, 0-1,000, 0-5 L/min
          </td>
        </tr>
      </tbody>
    </table>
  );
}
