const mapLoaders = {
  "ibadan-land-cover-change": () => import("../assets/maps/map-01-ibadan.png"),
  "abuja-urban-growth": () => import("../assets/maps/map-02-abuja.png"),
  "lokoja-flood-risk-assessment": () => import("../assets/maps/map-03-lokoja.png"),
  "lagos-public-transport-accessibility": () => import("../assets/maps/map-04-lagos.png"),
  "kano-healthcare-accessibility": () => import("../assets/maps/map-05-kano.png"),
  "northern-nigeria-drought-vegetation-stress": () => import("../assets/maps/map-06-northern nigeria.png"),
  "enugu-land-suitability": () => import("../assets/maps/map-07-enugu.png"),
  "enugu-near-urban-expansion-suitability": () => import("../assets/maps/map-07-enugu.png"),
  "borno-settlement-abandonment-detection": () => import("../assets/maps/map-08-borno.png"),
  "borno-settlement-change": () => import("../assets/maps/map-08-borno.png"),
  "tartu-green-infrastructure": () => import("../assets/maps/map-09-tartu.png"),
  "tartu-ugi-ecosystem-service-deficit": () => import("../assets/maps/map-09-tartu.png"),
  "ayetoro-coastal-vulnerability": () => import("../assets/maps/map-10-ayetoro.png"),
};

const documentLoaders = {
  "ibadan-land-cover-change": () => import("../assets/documents/Project_01_Ibadan_LULC_report.pdf"),
  "abuja-urban-growth": () => import("../assets/documents/Project_02_Abuja_Urban_Growth_report.pdf"),
  "lokoja-flood-risk-assessment": () => import("../assets/documents/Project_03_Lokoja_Flood_Risk_report.pdf"),
  "lagos-public-transport-accessibility": () => import("../assets/documents/Project_04_Lagos_Public_Transport_Accessibility_report.pdf"),
  "kano-healthcare-accessibility": () => import("../assets/documents/Project_05_Kano_PHC_Accessibility_report.pdf"),
  "northern-nigeria-drought-vegetation-stress": () => import("../assets/documents/Project_06_Northern_Nigeria_Drought_Vegetation_Stress_report.pdf"),
  "enugu-land-suitability": () => import("../assets/documents/Project_07_Enugu_Near_Urban_Expansion_Suitability_report_.pdf"),
  "borno-settlement-abandonment-detection": () => import("../assets/documents/Project_08_Borno_Settlement_Change_report.pdf"),
  "tartu-green-infrastructure": () => import("../assets/documents/Project_09_Tartu_UGI_Ecosystem_Service_Deficit_report_.pdf"),
  "ayetoro-coastal-vulnerability": () => import("../assets/documents/Project_10_Ayetoro_Coastal_Vulnerability_report.pdf"),
};

function resolveAsset(module) {
  if (!module) return null;
  return typeof module === "string" ? module : module.default ?? module;
}

export async function loadProjectMap(project) {
  const loader = project?.slug ? mapLoaders[project.slug] : null;
  if (!loader) return null;

  const module = await loader();
  return resolveAsset(module);
}

export async function loadProjectDocument(project) {
  const loader = project?.slug ? documentLoaders[project.slug] : null;
  if (!loader) return null;

  const module = await loader();
  return resolveAsset(module);
}
