import { Typography } from "@material-tailwind/react";
import FAQs from "./FAQs";
import ContactMod from './ContactMod'
import AboutUs from './AboutUs'
 
export default function FooterWithLogo() {
  return (
    <footer className="w-full bg-gray-900 mt-10 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-64 text-center">
        <b className="text-white">A2Z</b>
        <ul className="flex flex-col sm:flex-row flex-wrap items-center gap-y-2 gap-x-10">
          <li>
            <Typography
              as="a"
              color="white"
              className="transition duration-300 ease-in-out hover:text-blue-gray-400"
            >
              <AboutUs/>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="white"
              className="sm:ml-4 transition duration-300 ease-in-out hover:text-blue-gray-400"
            >
              <FAQs/>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="white"
              className="transition duration-300 ease-in-out hover:text-blue-gray-400"
            >
              <ContactMod/>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        Designed by Muhtadee Taron
      </Typography>
    </footer>
  );
}