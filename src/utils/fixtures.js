// (C) 2007-2019 GoodData Corporation

const demoProject = {
    "https://secure.gooddata.com": "k26dtejorcqlqf11crn6imbeevp2q4kg",
    "https://staging3.intgdc.com": "ht3owbpk6h0yfjtkcsgva3osu3z7paol",
    "https://staging2.intgdc.com": "exveshu0intwbr4nk6ao8ft6vesjiqus",
    "https://staging.intgdc.com": "xskxypodp5s4p2t6x99b2szivf8qi3st",
    "https://developer.na.gooddata.com": "xms7ga4tf3g3nzucd8380o2bev8oeknp",
};

const backendUrl = "https://staging2.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}

console.log("The /gdc proxy is connected to: ", backendUrl, " with projectId: ", demoProjectId); // eslint-disable-line no-console

// your projectId would be probably static (you may ignore the code above)

export const backendUrlForInfo = backendUrl;
 //export const projectId = 'ht3owbpk6h0yfjtkcsgva3osu3z7paol';
export const projectId=demoProjectId;
 
export const averageCheckSizeByServer = "afewRzGAersh";
export const averageDailyTotalSales = "aagJGHg1bxap";
export const barVisualizationIdentifier = "aajHYF4ZeLaD";
export const barVisualizationUri = `/gdc/md/${projectId}/obj/9177`;
export const lineVisualizationIdentifier = "aabwukUifTTA";
export const lineVisualizationUri = `/gdc/md/${projectId}/obj/9180`;
export const areaVisualizationIdentifier = "aabFLlHkaoLN";
export const areaVisualizationUri = `/gdc/md/${projectId}/obj/9112`;
export const headlineVisualizationIdentifier = "aaiGABZchOLd";
export const headlineVisualizationUri = `/gdc/md/${projectId}/obj/9173`;
export const scatterVisualizationIdentifier = "ab4aHg6lej5e";
export const scatterVisualizationUri = `/gdc/md/${projectId}/obj/9149`;
export const bubbleVisualizationIdentifier = "aag2RRTdcZm1";
export const bubbleVisualizationUri = `/gdc/md/${projectId}/obj/9150`;
export const pieVisualizationIdentifier = "aad15Q8JdPT9";
export const pieVisualizationUri = `/gdc/md/${projectId}/obj/9144`;
export const donutVisualizationIdentifier = "aae2LfNhbXke";
export const donutVisualizationUri = `/gdc/md/${projectId}/obj/9148`;
export const treemapVisualizationIdentifier = "aal2RFW6dOp5";
export const treemapVisualizationUri = `/gdc/md/${projectId}/obj/9151`;
export const heatmapVisualizationIdentifier = "aabIbOtXhCs1";
export const heatmapVisualizationUri = `/gdc/md/${projectId}/obj/9182`;
export const columnVisualizationIdentifier = "aacH1EalfaIs";
export const columnVisualizationIdentifierExport = "acFJltTsifSQ";
export const columnVisualizationUri = `/gdc/md/${projectId}/obj/9183`;
export const dateDatasetIdentifier = "date.dataset.dt";
export const dateDataSetUri = `/gdc/md/${projectId}/obj/2180`;
export const employeeNameIdentifier = "label.employee.employeename";
export const franchiseFeesAdRoyaltyIdentifier = "aabHeqImaK0d";
export const franchiseFeesIdentifier = "aaEGaXAEgB7U";
export const franchiseFeesIdentifierOngoingRoyalty = "aaWGcgnsfxIg";
export const franchiseFeesInitialFranchiseFeeIdentifier = "aaDHcv6wevkl";
export const franchiseFeesTag = "franchise_fees";
export const franchiseFeesVisualizationIdentifier = "aahnVeLugyFj";
export const franchisedSalesIdentifier = "aclF4oDIe5hP";
export const locationCityAttributeIdentifier = "attr.restaurantlocation.locationcity";
export const locationCityAttributeUri = `/gdc/md/${projectId}/obj/2208`;
export const locationCityDisplayFormIdentifier = "label.restaurantlocation.locationcity";
export const locationIdAttributeIdentifier = "attr.restaurantlocation.locationid";
export const locationNameAttributeUri = `/gdc/md/${projectId}/obj/2204`;
export const locationNameDisplayFormIdentifier = "label.restaurantlocation.locationname";
export const locationResortIdentifier = "label.restaurantlocation.locationresort";
export const locationResortUri = `/gdc/md/${demoProjectId}/obj/2206`;
export const employeeNameUri = `/gdc/md/${demoProjectId}/obj/2200`;
export const locationStateAttributeIdentifier = "attr.restaurantlocation.locationstate";
export const locationStateAttributeUri = `/gdc/md/${projectId}/obj/2210`;
export const locationStateAttributeCaliforniaUri = `/gdc/md/${projectId}/obj/2210/elements?id=6340116`;
export const locationStateDisplayFormIdentifier = "label.restaurantlocation.locationstate";
export const menuCategoryAttributeDFIdentifier = "label.menuitem.menucategory";
export const menuItemNameAttributeDFIdentifier = "label.menuitem.menuitemname";
export const yearDateDataSetAttributeIdentifier = "date.year";
export const monthDateDataSetAttributeIdentifier = "date.month";
export const quarterDateIdentifier = "date.aam81lMifn6q";
export const monthDateIdentifier = "date.abm81lMifn6q";
export const monthDateIdentifierJanuary = `/gdc/md/${projectId}/obj/2071/elements?id=1`;
export const numberOfChecksIdentifier = "aeOt50ngicOD";
export const tableVisualizationIdentifier = "aatFRvXBdilm";
export const tableVisualizationUri = `/gdc/md/${projectId}/obj/8702`;
export const totalSalesIdentifier = "aa7ulGyKhIE5";
export const numberOfRestaurantsIdentifier = "aawAq8YqhM3o";
export const averageRestaurantDailyCostsIdentifier = "aaQJzQzoeKwZ";
export const grossProfitIdentifier = "aa5JBkFDa7sJ";
export const totalCostsIdentifier = "aaQHncjzfrtR";
export const grossProfitUri = "/gdc/md/${projectId}/obj/6877";
export const pivotTableVisualizationIdentifier = "aahHSnOtdKuH";
export const pivotTableVisualizationUri = `/gdc/md/${projectId}/obj/9176`;
export const ProductUri = `/gdc/md/${demoProjectId}/obj/949`;
export const StageNameUri = `/gdc/md/${demoProjectId}/obj/1095`;
export const employeeNameDisplayFormUri = `/gdc/md/${projectId}/obj/2201`;
export const MonthYears = "date.act81lMifn6q";
export const bulletChartVisualizationByUri = `/gdc/md/${projectId}/obj/10943`;
export const bulletChartVisualizationByIdentifier = "aacCMlwkc9Wy";
export const ownedSalesIdentifier = "aaMF7AZGbALB";
export const dateYearIdentifier = "date.aag81lMifn6q";
export const sameStoreSalesIdentifier = "aaXAnw7hcbFY";
export const saveAsDashboard = `/gdc/md/${projectId}/obj/10255`;
export const monthOfYearDateIdentifier = "date.act81lMifn6q";
export const columnsVisualizationIdentifier = "aabOspdLbbvs";
export const dualAxisBarVisualizationIdentifier = "acSoPx4Mc7Rr";
export const totalCostsLocalIdentifier = "aaQHncjzfrtR";
export const totalSalesLocalIdentifier = "c11c27a0b0314a83bfe5b64ab9de7b89";


