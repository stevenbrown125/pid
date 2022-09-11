import { NextPage } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import Layout from '../../components/Layout'
import Seo from '../../components/SEO'

const pages = [
  { name: 'Service', href: '/service', current: false },
  {
    name: 'DL-101 Win File Xfer',
    href: '/service/dl101-win-file-transfer-instructions',
    current: true
  }
]

const DL101WinFileXferInstructionsPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="DL101 Window File Transfer Instructions" />
      <section>
        {/* Main Content */}
        <div className="relative px-4 pt-4 mx-auto bg-white shadow-md sm:px-12 lg:px-16 lg:max-w-7xl">
          <Breadcrumbs pages={pages} />
          <div className="text-base">
            <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
              System Service
            </h2>
            <h3 className="mb-6 text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              DL-101 and Windows&reg; File Transfer Instructions
            </h3>
          </div>
          <div className="prose text-gray-500 lg:prose-lg max-w-none">
            <p>
              Prior to using Windows 95&reg;File Transfer, a connection must be
              established between the DL-101 and the PC. Select the telephone
              icon on the top of the HyperTerminal toolbar to establish a
              connection (indicated in the lower left of the screen
              (disconnected/connected)).
            </p>
            <h4 className="text-2xl font-bold text-red-700 text-md">
              PC Settings
            </h4>
            <p>
              Open HyperTerminal in Windows 95&reg; (found in the accessories
              folder) and start the hypertrm.exe program. The Connection
              Description dialog box will open, select{' '}
              <span className="font-bold underline">C</span>
              ancel.
            </p>
            <p>
              Under <span className="font-bold underline">F</span>
              ile, select <span className="font-bold underline">P</span>
              roperties and select the Phone Number tab and enter the following
              settings:
            </p>

            <h4 className="text-2xl font-bold text-red-700 text-md">
              Phone Number tab
            </h4>
            <ul>
              <li>
                Connect Using:{' '}
                <span className="font-bold">Direct to Com 1</span> (all other
                entry fields should be gray)
              </li>
              <li>
                Select <span className="font-bold underline">C</span>
                onfigure to enter the COM 1 Properties Post Settings dialog box:
              </li>
              <li>
                <span className="font-bold underline">B</span>
                its per second: 9600
              </li>
              <li>
                <span className="font-bold underline">D</span>
                ata bits: 8
              </li>
              <li>
                <span className="font-bold underline">P</span>
                arity: None
              </li>
              <li>
                <span className="font-bold underline">S</span>
                top bits: 1
              </li>
              <li>
                <span className="font-bold underline">F</span>
                low control: Xon/Xoff or{' '}
                <span className="font-bold ">Hardware</span>
              </li>
              <ul>
                <li>
                  Select <span className="font-bold underline">A</span>
                  dvanced:
                  <ul>
                    <li>
                      <span className="font-bold ">Use FIFO buffers</span> -
                      select this only if your PC utilizes a 16550 high speed
                      Universal Asynchronous Receiver Transmitter (UART) chip.
                    </li>
                    <li>
                      <span className="font-bold underline">R</span>
                      eceive Buffer: Set to mid-high settings
                    </li>

                    <li>
                      <span className="font-bold underline">T</span>
                      ransmit Buffers: Not used
                    </li>
                  </ul>
                </li>
                <li>
                  Select <span className="font-bold">OK</span> to exit the{' '}
                  <span className="font-bold">Advanced Port Settings</span>{' '}
                  screen
                </li>
              </ul>
              <li>
                Select <span className="font-bold">OK</span> to exit the COM 1
                Port Settings screen
              </li>
            </ul>
            <p>
              The PC should now display the{' '}
              <span className="font-bold underline">P</span>
              roperties/New Connection Properties dialog box again, select the
              Settings tab and enter the following:
            </p>
            <h4 className="text-2xl font-bold text-red-700 text-md">
              Settings tab
            </h4>
            <ul>
              <li>
                <span className="font-bold underline">F</span>
                unction, arrow and ctrl keys act as: Terminal keys
              </li>
              <li>
                <span className="font-bold underline">E</span>
                mulation: Auto detect
              </li>
              <li>
                <span className="font-bold underline">B</span>
                ackground buffer lines: 500
              </li>
              <li>
                <span className="font-bold underline">B</span>
                eep three times when connecting or disconnecting: Do NOT select.
                <ul>
                  <li>
                    Select the ASCII Setup button and enter the following:
                    <ul>
                      <li>
                        <span className="font-bold">ASCII Setup</span>
                        <ul>
                          <li>
                            The ASCII Sending is for transmitting data from the
                            PC and is not used for DL-101 communication; leave
                            all of these settings at their default values.
                          </li>
                          <li>
                            <span className="font-bold">ASCII Receiving</span>
                            <ul>
                              <li>
                                <span className="font-bold underline">A</span>
                                ccept line feeds….Do not select
                              </li>
                              <li>
                                <span className="font-bold underline">F</span>
                                orce incoming data…..Do not select
                              </li>
                              <li>
                                <span className="font-bold underline">W</span>
                                rap line feeds…..Select this box.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Select <span className="font-bold">OK</span> to exit
                            the ASCII Setup menu
                          </li>
                        </ul>
                      </li>
                      <li>
                        Select <span className="font-bold">OK</span> to exit the
                        Properties screen
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              The PC is now correctly configured to receive data from the
              DL-101. Now that the PC has been correctly configured, saving
              these settings will make it quick and easy to transfer data in the
              future. To save the settings, select File, Save As, and enter a
              file name that is easy to identify (i.e. dl_win95.ht). Refer to
              the DL-101 operating manual for additional information related to
              the DL-101.
            </p>
            <h4 className="text-2xl font-bold text-red-700 text-md">
              Want more info?
            </h4>
            <div className="flex justify-center pt-4 pb-20 mr-4 md:justify-start">
              <Link href="/contact">
                <a className="flex items-center justify-center px-5 py-3 text-base font-medium text-white no-underline bg-red-600 border border-transparent rounded-md hover:bg-red-600-dark">
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

export default DL101WinFileXferInstructionsPage
