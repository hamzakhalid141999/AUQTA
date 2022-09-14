// import * as fs from "fs";
import { getAdminProjects } from "../components/utils/getAdminProjects";
import { getAdminProperties } from "../components/utils/getAdminProperties";
import { getAllDevelopers } from "../components/utils/getAllDevelopers";
import { getAllAgents } from "../components/utils/getAllAgents";
const Sitemap = () => {
  return null;
};
export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://www.auqta.com";

  // const staticPaths = fs
  //   .readdirSync("pages")
  //   .filter((staticPage) => {
  //     return ![
  //       "api",
  //       "_app.js",
  //       "_document.js",
  //       "404.js",
  //       "sitemap.xml.js",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${BASE_URL}/${staticPagePath}`;
  //   });

  const staticPaths = [
    "https://www.auqta.com/.DS_Store",
    "https://www.auqta.com/FAQ",
    "https://www.auqta.com/about",
    "https://www.auqta.com/agent",
    "https://www.auqta.com/all_agents",
    "https://www.auqta.com/all_developers",
    "https://www.auqta.com/blogs",
    "https://www.auqta.com/confirmUser",
    "https://www.auqta.com/contact",
    "https://www.auqta.com/dashboard",
    "https://www.auqta.com/developer",
    "https://www.auqta.com/forgotPassword",
    "https://www.auqta.com/index.js",
    "https://www.auqta.com/invest",
    "https://www.auqta.com/map",
    "https://www.auqta.com/project",
    "https://www.auqta.com/project_specific",
    "https://www.auqta.com/property",
    "https://www.auqta.com/rent",
    "https://www.auqta.com/services",
    "https://www.auqta.com/signUp",
    "https://www.auqta.com/terms_and_conditions",
  ];

  const projects = await getAdminProjects();
  const properties = await getAdminProperties();
  const developers = await getAllDevelopers();
  const agents = await getAllAgents();

  const dynamicPathsProjects = properties?.map((singleProperties) => {
    return `${BASE_URL}/property?propertyId=${singleProperties?.propertyListing?._id}`;
  });

  const dynamicPathsProperties = projects?.map((singleProject) => {
    return `${BASE_URL}/project?projectId=${singleProject?._id}`;
  });

  const dynamicPathsDevelopers = developers?.map((singleDeveloper) => {
    return `${BASE_URL}/developer?developerId=${singleDeveloper?.user?._id}`;
  });

  const dynamicPathsAgents = agents?.map((singleAgent) => {
    return `${BASE_URL}/agent?developerId=${singleAgent?.user?._id}`;
  });

  let allPaths = [...staticPaths, ...dynamicPathsProjects];
  const finalPaths = allPaths.concat(
    dynamicPathsProperties,
    dynamicPathsDevelopers,
    dynamicPathsAgents
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${finalPaths
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")} </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
