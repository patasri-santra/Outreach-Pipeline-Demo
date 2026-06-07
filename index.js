const fs = require("fs");

const findSimilarCompanies = require("./companyFinder");
const getContacts = require("./prospeo");
const generateEmail = require("./generateEmail");
const sendEmail = require("./brevo");

async function main() {

  const seedDomain = process.argv[2] || "hubspot.com";

  console.log("Seed Company:", seedDomain);

  const companies = await findSimilarCompanies(seedDomain);

  console.log("\nSimilar Companies:");
  console.log(companies);

  const contacts = await getContacts();

  console.log("\nTop Contacts:");

  contacts.slice(0, 5).forEach(contact => {
    console.log(contact);
  });

  fs.writeFileSync(     //save contact
    "contacts.json",
    JSON.stringify(contacts, null, 2)
  );

  console.log("\nContacts saved to contacts.json");

  const email = generateEmail(contacts[0]);

  console.log("\nGenerated Email:");
  console.log(email);

  

  await sendEmail(
    "tempburn9@gmail.com",
    "Outreach Pipeline Test",
    `<pre>${email}</pre>`
  );

  console.log("Email sent successfully!");

}

main();