import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Privacy = () => {
  const [isModalOpen, setIsModalOpen] = useState(new Array(8).fill(false));

  const handleModalSelection = (id) => {
    const newModalState = [...isModalOpen];
    newModalState[id] = !newModalState[id];
    setIsModalOpen(newModalState);
  };
  console.log(isModalOpen);
  return (
    <div className="lg:mx-[20rem] md:mx-[10rem] sm:mx-[1rem] my-10 ">
      <h1 className="text-5xl font-thin">OUR PRIVACY POLICY</h1>
      <div className=" flex flex-col h-[40rem] overflow-y-auto mt-5">
        <button
          id="0"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          1. Introduction
          {isModalOpen[0] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className=" z-[-1]" />
          )}
        </button>
        {isModalOpen[0] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border px-10 py-5 md:text-base sm:text-sm text-start indent-5">
            Welcome to Recipe DIY! At Recipe DIY, we believe in sharing the joy
            of cooking and connecting with fellow food enthusiasts. This Privacy
            Policy outlines how we collect, use, and protect your personal
            information when you use our platform to share and discover recipes.
            Your privacy is important to us, and we are committed to maintaining
            the security and confidentiality of your information.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="1"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          2. Personal Data We Collect
          {isModalOpen[1] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className=" z-[-1]" />
          )}
        </button>

        {isModalOpen[1] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 md:text-base sm:text-sm text-start indent-5">
            {" "}
            When you use Recipe DIY, we may collect certain personal information
            to provide you with a personalized and engaging experience. This may
            include:
            <br />
            - Your name and profile information, which you provide when creating
            an account.
            <br />
            - Contact details, such as your email address, which we use to
            communicate with you and send notifications about your recipes and
            interactions.
            <br />
            - Profile picture and other media you choose to upload to your
            account.
            <br />
            - Information about your recipes, likes, and interactions on the
            platform.
            <br />
            - Technical and usage data, such as your IP address, device type,
            and browser information, which helps us improve our services.
            <br />
            We collect this data to enhance your experience on Recipe DIY,
            tailor content to your preferences, and improve our platform's
            functionality. By sharing this information, you allow us to create a
            vibrant community of food enthusiasts and provide you with the best
            possible service.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="2"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          3. Cookies
          {isModalOpen[2] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[2] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 md:text-base sm:text-sm text-start indent-5">
            {" "}
            Recipe DIY uses cookies and similar technologies to enhance your
            browsing experience and provide personalized features. Cookies are
            small text files that are stored on your device when you visit our
            platform. They help us remember your preferences, track your
            interactions, and analyze usage patterns to improve our services. We
            use both session and persistent cookies, which may be set by us or
            third-party services.
            <br />
            These cookies allow us to:
            <br />
            - Remember your login details for seamless access.
            <br />
            - Analyze usage and engagement to optimize content and user
            experience.
            <br />
            - Provide personalized recommendations and suggestions.
            <br />
            - Monitor and improve the security of our platform.
            <br />
            You can manage your cookie preferences through your browser
            settings. By using Recipe DIY, you consent to the use of cookies as
            described in this policy. Please note that disabling cookies may
            affect the functionality and features available to you on our
            platform.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="3"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          4. Retention and Detention
          {isModalOpen[3] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[3] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 md:text-base sm:text-sm text-start indent-5">
            {" "}
            Recipe DIY retains your personal data only for as long as necessary
            to fulfill the purposes outlined in this Privacy Policy. We maintain
            your account information, recipes, and interactions for the duration
            of your membership on our platform. If you choose to delete your
            account, we will promptly delete your personal data, including your
            profile information and uploaded content.
            <br />
            We may retain certain information for legal and regulatory purposes,
            to prevent fraud, or to resolve disputes. Aggregated and anonymous
            data that does not identify you personally may be retained for
            analytical purposes.
            <br />
            Please note that even after your account is deleted, residual copies
            of your information may remain in our backup systems for a limited
            period. We take appropriate measures to secure your data and ensure
            its confidentiality throughout its retention period.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="4"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          5. How We Keep Your Data Safe
          {isModalOpen[4] === true ? (
            <AiOutlineMinus className="z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[4] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 text-sm text-start indent-5">
            {" "}
            At Recipe DIY, the security of your personal data is a top priority.
            We employ a range of technical, administrative, and physical
            safeguards to protect your information from unauthorized access,
            disclosure, alteration, and destruction. Some of the measures we
            take include:
            <br />
            - Encryption: We use industry-standard encryption protocols to
            protect data transmitted between your device and our servers,
            ensuring that sensitive information remains confidential.
            <br />
            - Secure Infrastructure: Our platform is hosted on secure servers
            with regular security updates and patches to prevent
            vulnerabilities.
            <br />
            - Access Controls: We restrict access to your personal data to
            authorized personnel who need it to provide you with our services.
            Our employees and partners are bound by strict confidentiality
            agreements.
            <br />
            - Regular Audits: We conduct periodic security audits to identify
            and address potential security risks.
            <br />
            - User Responsibility: While we take every precaution to safeguard
            your data, it's important that you also play a role in maintaining
            the security of your account. Use strong and unique passwords,
            enable two-factor authentication, and be cautious of sharing your
            account details.
            <br />
            Despite our efforts, no online platform can guarantee absolute
            security. In the event of a data breach, we will promptly notify
            affected users and take appropriate steps to mitigate any potential
            harm.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}
        <button
          id="5"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          6. Your Rights For Your Personal Data
          {isModalOpen[5] === true ? (
            <AiOutlineMinus className=" z-[-1]" />
          ) : (
            <AiOutlinePlus className=" z-[-1]" />
          )}
        </button>
        {isModalOpen[5] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10 py-5 text-sm text-start indent-5">
            {" "}
            As a user of Recipe DIY, you have certain rights over the personal
            data we collect about you. These rights include:
            <br />
            - Access: You have the right to request access to the personal data
            we hold about you, including information about how and why it's
            processed.
            <br />
            - Correction: If any of your personal data is inaccurate or
            incomplete, you can request to have it corrected or updated.
            <br />
            - Deletion: You have the right to request the deletion of your
            personal data from our systems, subject to legal obligations and
            legitimate interests.
            <br />
            - Restriction: You can request to restrict the processing of your
            personal data in certain circumstances, such as when its accuracy is
            disputed.
            <br />
            - Data Portability: You can request to receive a copy of your
            personal data in a structured, machine-readable format for transfer
            to another service.
            <br />
            - Objection: You can object to the processing of your personal data
            on grounds related to your particular situation.
            <br />
            Please note that while we strive to accommodate your rights, there
            may be situations where we are legally allowed or required to refuse
            your requests. If you are dissatisfied with our response, you have
            the right to lodge a complaint with the relevant data protection
            authority.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}

        <button
          id="6"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          7. Changes
          {isModalOpen[6] === true ? (
            <AiOutlineMinus className="z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>
        {isModalOpen[6] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 md:text-base sm:text-sm text-start indent-5">
            {" "}
            We may update this Privacy Policy from time to time to reflect
            changes in our practices and services. Any modifications will become
            effective upon posting on our platform, and we will notify you of
            significant changes through prominent announcements. We encourage
            you to review this Privacy Policy periodically to stay informed
            about how we collect, use, and protect your personal data.
            <br />
            By continuing to use Recipe DIY after any changes to this Privacy
            Policy, you acknowledge and consent to the updated practices. If you
            disagree with any of the changes, you may choose to discontinue
            using our services.
            <br />
            If you have any questions or concerns about our Privacy Policy or
            the changes made to it, please contact us at privacy@recipediy.com.
          </div>
        ) : (
          <div className="h-0  transition-height duration-300 "></div>
        )}

        <button
          id="7"
          onClick={(e) => handleModalSelection(e.target.id)}
          className="border relative w-full flex justify-between items-center p-5 text-xl"
        >
          8. Contact Us
          {isModalOpen[7] === true ? (
            <AiOutlineMinus className="z-[-1]" />
          ) : (
            <AiOutlinePlus className="z-[-1]" />
          )}
        </button>

        {isModalOpen[7] === true ? (
          <div className="h-full opacity-100 transition-height duration-300 border  px-10  py-5 md:text-base sm:text-sm text-start indent-5">
            {" "}
            If you have any questions, concerns, or requests related to your
            personal data, this Privacy Policy, or our practices, please don't
            hesitate to contact our Data Protection Officer at
            privacy@recipediy.com. We are committed to addressing your inquiries
            promptly and providing you with the information you need. You can
            also write to us at the following address:
            <br />
            Recipe DIY, Inc.
            <br />
            Attn: Data Protection Officer
            <br />
            Jacksonville, Florida 32246
            <br />
            United States
            <br />
            We value your privacy and are dedicated to ensuring that your
            personal data is handled with the utmost care and in accordance with
            applicable data protection laws.
          </div>
        ) : (
          <div className="h-0 opacity-0 transition-height duration-300 "></div>
        )}
      </div>
    </div>
  );
};

export default Privacy;
