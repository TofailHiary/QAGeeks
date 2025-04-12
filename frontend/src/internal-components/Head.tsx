import { Helmet } from "react-helmet-async";
import fonts from "../fonts.json";

interface HeadProps {
  title?: string;
  description?: string;
}

const defaultTitle = "QAGeeks - Your Guide to Software Quality Assurance (QA)";
const defaultDescription = "Comprehensive guide to Software Quality Assurance (QA). Learn SDLC, STLC, testing methods, tools, interview questions, and access templates.";

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  const pageTitle = title ? `${title} | QAGeeks` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {/* Keep existing font links */}
      {fonts.map((font) => (
        <link key={font} href={font} rel="stylesheet" />
      ))}
    </Helmet>
  );
};
