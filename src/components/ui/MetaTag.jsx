
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
const MetaTag = ({pageKey}) => {

    const { t } = useTranslation();

    const title = t(`${pageKey}.meta.title`);
    const description = t(`${pageKey}.meta.description`);
    const keywords = t(`${pageKey}.meta.keywords`);
    const image = "public/assets/home.jpeg";
    const url = "/";

    return (
        <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Amlou Inou" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="fr_FR" /> 
        <meta property="og:site_name" content="Amlou Inou" /> 
      
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      

      </Helmet>
    )
}

export default MetaTag;
