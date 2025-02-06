import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import localFont from 'next/font/local'

const Gabarito = localFont({ src: '../../../fonts/Gabarito-Black.ttf' })
// import { Gabarito } from '../../../fonts/Gabarito-Black.ttf'
import { Poppins } from 'next/font/google'

// const gabarito = Gabarito({
//   weight: ['900'],
//   style: ['normal'],
//   subsets: ['latin']
// })
const poppins = Poppins({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FormLayout({ children }) {
  return (
    <div id="formBody">
      <div id="formSiding">
        <div className="relative">
        <h1 className="contestInfo evilInfo" aria-hidden="true">CONTEST INFO</h1>
        <h1 className="contestInfo ">CONTEST INFO</h1>
        
        </div>
        <div>
          <p className="paragraphText"> 1. Fill out the form with your details.</p>
          <p className="paragraphText"> 2. Spin the wheel and see if you're a winner!</p>
          <p className="paragraphText"> 3. Winners will be notified by email and must correctly answer a skill-testing question to claim their prize.</p> <br />
        </div> <br />
        <div>
          <p className="paragraphText"> Winners will be selected by random draw.
            [ *Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days]. BuyMore Dollars Inc. reserves the right to remove any entries at their discretion.  [*Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days] By entering, you agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and our sponsors.
          </p>
        </div>
      </div>
      <div id="formContent">
        {children}
      </div>
    </div>
  );
}
