import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
};

export const SEO = ({ title, description, canonical }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link
      rel="canonical"
      href={
        canonical ?? (typeof window !== "undefined" ? window.location.href : "")
      }
    />
  </Helmet>
);

export default SEO;
