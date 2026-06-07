async function findSimilarCompanies(seedDomain) {
  const companies = {
    "hubspot.com": [
      "airtable.com",
      "notion.so",
      "asana.com"
    ],
    "notion.so": [
      "airtable.com",
      "clickup.com",
      "asana.com"
    ]
  };

  return companies[seedDomain] || ["airtable.com"];
}

module.exports = findSimilarCompanies;