import { Box, Link, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Box m="20px 60px">
      <Typography variant="h3" paddingTop="20px">
        {" "}
        PRIVACY POLICY
      </Typography>
      <Typography marginTop="20px">
        This is the privacy policy ("Privacy Policy") of BioSphere-Italia.com website, the BioSphere-Italia Network
        Member websites, and describes how BioSphere-Italia.com ("BioSphere-Italia," "We," "Us" or "Our") handles
        Personal Information (as defined below) that users ("You," "Your” or "User") provide to Us, or that We collect
        from You through the use of Our Website, which is located at{" "}
        <Link href="www.biosphere-italia.com">www.biosphere-italia.com</Link>) and through the BioSphere-Italia Network
        Member websites (collectively, the "Websites"). Each country has different laws and rights relating to Personal
        Information of their residents. If You are a resident located outside Italy, in addition to this Privacy Policy,
        please also see Your country specific disclosures. This Privacy Policy is subject to Our Terms of Use
        at https://www.biosphere-italia.com/terms. We may update this Privacy Policy from time to time, as specified in
        the “Privacy Policy Changes” section below.
      </Typography>
      <Typography variant="h4" marginTop="20px">
        Your Consent
      </Typography>
      <Typography>
        You should read this entire Privacy Policy before submitting information to Us or using Our Platform. Whenever
        You submit personal and non-personal information via Our Platform or otherwise to Us, whether online or offline,
        You consent to the collection, use disclosure, transfer, and storage of that information in accordance with this
        Privacy Policy.
      </Typography>
      <Typography variant="h4" marginTop="20px">
        Types of Information We Collect
      </Typography>
      <Typography>
        "Personal Information" means information such as Your first/middle initial or name, last name, e-mail address,
        street address, mailing address if different, town or city, state, zip code, telephone number, profile
        photograph, Internet Protocol (IP) addresses, credit card information and any other information that could allow
        someone to identify You or contact You, including information collected through cookies and other technology.
        BioSphere-Italia does not collects Personal Information of the sort that web browsers, hardware, software and
        servers typically make available, such as the IP address, device ID, browser type, language preference,
        referring site, pages viewed, one or more cookies that may uniquely identify your browser, and the date and time
        of each visitor request.
      </Typography>
      <Typography variant="h4" marginTop="20px">
        Cookies
      </Typography>
      <Typography>
        Automated technology collects information from Your computer or mobile device and includes cookies, web beacons,
        local shared objects, or other similar technology. A cookie is a string of information that a website stores on
        a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. A
        "web beacon" is a small object or image that is embedded into a web page, application, or email and is used to
        track activity. They are also sometimes referred to as pixels and tags. As You access or use Our Website, We
        and/or third parties may collect information using cookies, web beacons, pixels, navigational and location data
        collection (clickstream, log files, server logs) and other similar technologies for the purposes described in
        this Policy. BioSphere-Italia uses cookies to help BioSphere-Italia identify and track visitors, their usage of
        the BioSphere-Italia Websites and their Website access preferences. BioSphere-Italia visitors who do not wish to
        have cookies placed on their computers should set their browsers to refuse cookies before using
        BioSphere-Italia's Websites. Certain features of BioSphere-Italia's Websites, such as the ability to post
        Observations, may not function properly without the aid of cookies. To find more information about cookies
        please visit <Link href="www.allaboutcookies.org">www.allaboutcookies.org</Link>. Most browsers are initially
        set to allow cookies, but also offer the option to restrict cookies or warn You of their use.
      </Typography>
      <Typography variant="h4" marginTop="20px">
        Privacy Policy Changes
      </Typography>
      <Typography>
        Although most changes are likely to be minor, BioSphere-Italia may change its Privacy Policy from time to time,
        and at BioSphere-Italia's sole discretion. We will post an updated and revised version of this Privacy Policy on
        the BioSphere-Italia Platform when any material changes have been made, and BioSphere-Italia encourages visitors
        to check this Privacy Policy often so You are aware of the most current terms and conditions that apply to You.
        The revisions are effective immediately upon posting. Your continued use of this site after any change in this
        Privacy Policy will constitute Your acceptance of such change.
      </Typography>
      <Typography variant="h4" marginTop="20px">
        All Users
      </Typography>
      <Typography>
        If any User of Our Platform, or any Subscriber has any questions about this Privacy Policy, please contact the
        BioSphere-Italia Data Protection Officer{" "}
        <Link href="privacy@biosphere-italia.com">privacy@biosphere-italia.com</Link>
      </Typography>
      <Typography fontStyle="italic" marginTop="20px">
        This Privacy Policy was last modified on June 18, 2023.
      </Typography>
      <Typography marginTop="20px">© Copyright 2023 BioSphere-Italia. All Rights Reserved.</Typography>
    </Box>
  );
};

export default PrivacyPolicy;
