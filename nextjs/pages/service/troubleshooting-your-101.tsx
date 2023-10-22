import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";

const pages = [
  { name: "Service", href: "/service", current: false },
  {
    name: "Troubleshooting your 101",
    href: "/service/troubleshooting-your-101",
    current: true,
  },
];

const troubleshooting = [
  {
    case: "TS1",
    symptom: "1. Meter indicates low battery",
    causes: [
      {
        id: 1,
        name: "a. Blown fuse (Fuse Fl, 2A, 5-3)",
        action:
          "Check fuse. If blown, check for evidence of shorts in wiring, then replace fuse.",
      },
      {
        id: 2,
        name: "b. Bad connections",
        action: "Check wiring connections. Resolder poor or bad connections.",
      },
      {
        id: 3,
        name: "c. Broken meter",
        action:
          "Tip instrument rapidly movement from side to side. Meter needle should move freely, and return to zero. If faulty, replace with new meter.",
      },
      {
        id: 4,
        name: "d. Battery dead",
        action:
          "Disconnect battery and check with volt ohmmeter. Replace if dead.",
      },
      {
        id: 5,
        name: "e. Battery charge low",
        action:
          "Recharge battery, check meter with function switch in BATT position to ensure the charger is operating properly.",
      },
    ],
  },
  {
    case: "TS2",
    symptom: "2. Low battery",
    causes: [
      {
        id: 1,
        name: "a. Flower supply",
        action:
          "Check power supply defective voltages (see Table 6-2 and Figure 6-1). If in error, replace power supply assembly.",
      },
    ],
  },
  {
    case: "TS3",
    symptom: "3. UV lamp not ON",
    causes: [
      {
        id: 1,
        name: "a. High Voltage interlock (Micro-switch S2) cable connector on readout assembly not operating",
        action:
          "Check by applying pressure to switch plunger with at probe cable in place. Adjust the screw on side of cable connector, if required, to increase throw of switch plunger",
      },
      {
        id: 2,
        name: "b. High voltage supply out or faulty",
        action:
          "Check high voltage output on power supply board (pad 22). If voltage not correct, (see Table 6-2) replace power supply board.",
      },
      {
        id: 3,
        name: "c. Lamp not making proper connection with high voltage contacts.",
        action: "Remove lamp, clean and tighten contacts, reinstall lamp.",
      },
      {
        id: 4,
        name: "d. Lamp faulty",
        action: "Replace lamp.",
      },
      {
        id: 5,
        name: "e. Short in high voltage lines",
        action:
          "Check wiring from power supply board to probe cable connector (J3 pin D) to UV lamp contacts (Dl).",
      },
    ],
  },
  {
    case: "TS4",
    symptom: "4. Fan not running",
    causes: [
      {
        id: 1,
        name: "a. Fan stuck",
        action:
          "Disassemble probe and clean passages and fan by blowing out dust. To remove larger particles use cotton swab, Q-tip or equal. Use care not to damage propellor rotor or blades.",
      },
      {
        id: 2,
        name: "b. Fan connections faulty",
        action:
          "Check for wiring connections at fan motor and at probe cable connector (J3 pins A and C). Repair as required.",
      },
      {
        id: 3,
        name: "c. Low or dead battery",
        action:
          "Check output battery (power supply board, pad 9). Recharge or replace battery as required.",
      },
      {
        id: 4,
        name: "d. Fan voltage not correct",
        action:
          "Check fan voltage (power supply board pads 19 and 21, probe cable pins A and C). If not correct, replace power supply board.",
      },
    ],
  },
  {
    case: "TS5",
    symptom: "5. Meter does not respond",
    causes: [
      {
        id: 1,
        name: "a. Dirty or open probe connection",
        action: "Clean and tighten or resolder connections in probe.",
      },
      {
        id: 2,
        name: "b. Broken meter",
        action: "See 1-c-I above.",
      },
      {
        id: 3,
        name: "c. Dirty or open connections to meter",
        action: "Clean and tighten connections at meter.",
      },
      {
        id: 4,
        name: "d. Low or dead battery",
        action: "See 4-c-I above.",
      },
      {
        id: 5,
        name: "e. Blown fuse",
        action: "See I-a-I above.",
      },
    ],
  },
  {
    case: "TS6",
    symptom: "6. Meter does not return to zero in STANDBY",
    causes: [
      {
        id: 1,
        name: "a. Broken meter movement",
        action: "See 1-c-I above.",
      },
      {
        id: 2,
        name: "b. Dirty or open connections to meter",
        action: "See 5-c-I above.",
      },
      {
        id: 3,
        name: "c. Dirty or open connections in probe",
        action: "5-a-I above.",
      },
      {
        id: 4,
        name: "d. Zero adjust faulty",
        action:
          "Rotate zero adjust pat (see Fig. 2-1) (R50, Fig. k.6). Check pot output at meter probe connector (J3 pins B and L). If voltage does not vary, replace zero adjust pot.",
      },
      {
        id: 5,
        name: "e. Amplifier faulty",
        action:
          "Rotate zero adjust pot. Check amplifier output at probe connector (J3 pin H) or observe meter. if voltage level on meter does not respond, replace amplifier board",
      },
      {
        id: 6,
        name: "f. Ion chamber shorted",
        action:
          "1) Clean ion chamber. (see Section 5.2). Recheck for return to zero in STANDBY.\n\r2) Replace ion chamber.",
      },
    ],
  },
  {
    case: "TS7",
    symptom: "7. Meter readings, high or low",
    causes: [
      {
        id: 1,
        name: "a. Incorrect calibration",
        action: "Recalibrate (see Section 3).",
      },
      {
        id: 2,
        name: "b. Lamp dirty",
        action: "Clean lamp (see Section 5.2)",
      },
      {
        id: 3,
        name: "c. Contamination in ion chamber",
        action: "Clean ion chamber. (see Section 5.2)",
      },
      {
        id: 4,
        name: "d. Power supply board faulty",
        action:
          "Check power supply board- outputs (pads 17, 20 and 22 (Table 6-2). If voltages not correct, replace power supply board.",
      },
      {
        id: 5,
        name: "e. Dirty or loose connections",
        action:
          "Clean or tighten connections at amplifier board, probe cable, and meter.",
      },
      {
        id: 6,
        name: "f. Battery charge low",
        action:
          "Recharge battery, check meter with function switch in BATT position to ensure the charger is operating properly.",
      },
    ],
  },
  {
    case: "TS8",
    symptom: "8. Meter erratic, unstable, or non-repeatable",
    causes: [
      {
        id: 1,
        name: "a. Loose cable or connection",
        action:
          "Check cable connection at control panel. Observe meter. Tighten cable as required.",
      },
      {
        id: 2,
        name: "b. Dirty or loose meter connections",
        action: "Check meter connections. Clean and tighten as required.",
      },
      {
        id: 3,
        name: "c. Contamination in ion chamber",
        action: "Clean ion chamber. (see Section 5.2)",
      },
      {
        id: 4,
        name: "d. Power supply board faulty",
        action: "See 7-d-I above.",
      },
      {
        id: 5,
        name: "e. Unstable or noisy lamp",
        action:
          "Observe lamp. (Important- see WARNING in Section 6.1). If operation not steady, replace lamp.",
      },
      {
        id: 6,
        name: "f. Function switch in high gain, most",
        action:
          "Unstable meter operation is common with function sensitive position switch in most sensitive position. Turn switch to less sensitive position if desirable.",
      },
      {
        id: 7,
        name: "g. Fan not operating properly",
        action: "Replace fan.",
      },
      {
        id: 8,
        name: "h. Gas flow slow or stopped",
        action: "See 4-a-I above.",
      },
      {
        id: 9,
        name: "i. Meter, contacts dirty or loose",
        action: "Clean and tighten contacts.",
      },
    ],
  },
  {
    case: "TS9",
    symptom: "9. Drifting meter or sensitivity",
    causes: [
      {
        id: 1,
        name: "a. Ion chamber contaminated",
        action: "Clean ion chamber, apparent moisture (see Section 5.2).",
      },
    ],
  },
];

const TroubleshootingYour101Page: NextPage = () => {
  return (
    <Layout>
      <section className="relative px-4 py-6 pb-10 mx-auto shadow-md sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            System Service
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Troubleshooting your 101
          </h3>
          <Breadcrumbs pages={pages} />
        </div>
        <div className="prose text-gray-500 lg:prose-lg max-w-none">
          <p>
            The initial step of any troubleshooting is a thorough visual
            inspection to look for possible loose or open connections, shorts,
            dust or other obvious conditions.
          </p>
          <p>
            Detailed troubleshooting for fault location and correction is
            accomplished by steps outlined in the following (please note that
            these are located in the 101 manual available from Process
            Analyzers):
          </p>
          <ul>
            <li>Troubleshooting Data Table 6-1</li>
            <li>Pad Data, Power Supply PCB Table 6-2</li>
            <li>Pad Location, Power Supply PCB Figure 6-1.</li>
            <li>Pin Data, Amplifier PCB, P2/J2 Table 6-3</li>
            <li>Pin Data, Probe Cable, P3/J3 Table 6-4</li>
            <li>Pin Data, Alarm Cable, P6/J6 Table 6-5</li>
          </ul>
          <p>
            Disassembly and reassembly as may be required for checking the
            equipment or replacing parts are described in Chapter 6 of the
            manual available in the 101 manual from Process Analyzers.
          </p>
          <p className="font-bold">
            <span className="pr-1 text-red-700 uppercase">Warning</span>
            Turn the function switch on the control panel to the OFF position
            before disassembly. Otherwise high voltage of 1200 V DC will be
            present.
          </p>
          <p className="font-bold">
            <span className="pr-1 text-red-700 uppercase">Warning</span>
            Do not observe the light source closer than 6 inches with
            unprotected eyes. When necessary, observe only briefly. Continued
            exposure to ultraviolet energy generated by the light source can be
            harmful to eyesight.
          </p>
          <p className="font-bold">
            <span className="pr-1 text-red-700 uppercase">Warning</span>
            Use great care when operating the analyzer with the readout assembly
            outside its case due to the presence of 1200 V DC. If, after
            following the steps cited in this section, the analyzer is not
            functioning properly,{" "}
            <Link
              href="/contact"
              className="font-bold text-red-600 no-underline hover:underline"
              legacyBehavior
            >
              Contact PID Analyzers
            </Link>{" "}
            Service Dept. for assistance.
          </p>
        </div>

        <div className="relative grid grid-cols-12 my-8 rounded">
          {/* Header */}
          <div className="col-span-2 pr-4 pl-4 py-3.5 lg:pl-6 bg-neutral-100 border-b border-neutral-300 hidden md:block">
            <h4 className="font-semibold text-gray-900 text-md">Symptom</h4>
          </div>
          <div className="col-span-4 md:col-span-3 py-3.5 pl-4 pr-4 lg:pl-6 bg-neutral-100 border-b border-neutral-300">
            <h4 className="font-semibold text-gray-900 text-md">
              Probable Cause
            </h4>
          </div>
          <div className="col-span-8 md:col-span-7 py-3.5 pl-4 pr-4 lg:pl-6 bg-neutral-100 border-b border-neutral-300">
            <h4 className="font-semibold text-gray-900 text-md">
              Corrective Action
            </h4>
          </div>
          {/* Body */}
          {troubleshooting.map((item) => (
            <React.Fragment key={item.case}>
              <div className="col-span-12 pr-4 pl-4 py-3.5 lg:pl-6 bg-neutral-50 border-y border-neutral-100">
                <h5 className="font-semibold font-md text-neutral-800">
                  <span className="md:hidden">Symptom - </span>
                  {item.symptom}
                </h5>
              </div>
              {item.causes.map((cause) => (
                <React.Fragment key={cause.id}>
                  <div className="hidden col-span-2 bg-neutral-50 md:block" />
                  <div className="col-span-4 md:col-span-3 px-4 py-3.5 sm:pl-6 border-b border-neutral-100">
                    <p className="text-neutral-700">{cause.name}</p>
                  </div>
                  <div className="col-span-8 md:col-span-7 px-4 py-3.5 sm:pl-6 border-b border-neutral-100">
                    <p className="whitespace-pre-line text-neutral-700 ">
                      {cause.action}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default TroubleshootingYour101Page;
