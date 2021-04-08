import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Arrow, ArrowL } from "../../../components/Arrow";

function privacyPolicy() {
  return (
    <div className="flex justify-center bg-background">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="w-1/2 mt-20 mb-10 text-white ">
        <div className="flex justify-between mb-5">
          <Link href="/">
            <p className="text-blue-500 cursor-pointer text-sm btn-arrow flex hover:underline lg:text-md font-semibold items-center">
              <span className="transform rotate-180 mr-2">
                <ArrowL />
              </span>
              Home
            </p>
          </Link>
          <Link href="/legal/terms-and-conditions">
            <p className="text-blue-500 cursor-pointer text-sm btn-arrow flex hover:underline  lg:text-md font-semibold items-center">
              Terms and Conditions
              <Arrow />
            </p>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
        <p>
          Will Kelly ("I") operates will-kelly.co.uk (the "Site"). This page
          informs you of our policies regarding the collection, use and
          disclosure of Personal Information we receive from users of the Site.
          We use your Personal Information only for providing and improving the
          Site. By using the Site, you agree to the collection and use of
          information in accordance with this policy.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">
          Information Collection and Use
        </h2>
        <p>
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information , including but not
          limited to Name, Email.
        </p>
        <p>
          The site does use third party services that may collect information
          used to identify you.
        </p>
        <div>
          <p>
            Link to privacy policy of third party service providers used by the
            site
          </p>
          <ul></ul>
        </div>
        <h2 className="text-xl font-bold mt-5 mb-2">Log Data</h2>
        <p>
          Like many site operators, we collect information that your browser
          sends whenever you visit our Site ("Log Data"). This Log Data may
          include information such as your computer's Internet Protocol ("IP")
          address, browser type, browser version, the pages of our Site that you
          visit, the time and date of your visit, the time spent on those pages
          and other statistics. In addition, we may use third party services
          such as Google Analytics that collect, monitor and analyze this …
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Cookies</h2>
        <p>
          Cookies are files with small amount of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          web site and stored on your computer's hard drive. Like many sites, we
          use "cookies" to collect information. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent.
          However, if you do not accept cookies, you may not be able to use some
          portions of our Site.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Service Providers</h2>
        <p>
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
          I want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Security</h2>
        <p>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Links to Other Sites</h2>
        <p>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Users Rights</h2>
        <p>Under GDPR you have 8 main rights. These are:</p>
        <ul className="list-disc list-inside leading-snug pl-2">
          <li>The Right to be Informed</li>
          <li>The Right of Access</li>
          <li>The Right to Erasure</li>
          <li>The Right to Restrict Processing</li>
          <li>The Right to Data Portability</li>
          <li>The Right to Object</li>
          <li>The Right to Avoid Automated Decision-Making</li>
        </ul>
        <br />
        <p>
          If you wish to exercise any of these rights please fill out the
          contact form{" "}
          <Link href="/">
            <span className="text-blue-500">here</span>
          </Link>{" "}
          or email use at{" "}
          <a className="text-blue-500" href="mailto:contact@will-kelly.co.uk">
            contact@will-kelly.co.uk
          </a>
        </p>

        <h2 className="text-xl font-bold mt-5 mb-2">Children's Privacy</h2>
        <p>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. In the case I discover that a child under 13 has provided me
          with personal information, I immediately delete this from our servers.
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact me so that I
          will be able to do necessary actions.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </p>
        <h2 className="text-xl font-bold mt-5 mb-2">Contact Us</h2>
        <p>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me.
        </p>
        <br />
      </div>
    </div>
  );
}
export default privacyPolicy;
