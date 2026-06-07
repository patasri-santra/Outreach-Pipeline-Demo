require("dotenv").config();
const axios = require("axios");

async function getContacts() {
  try {
    const response = await axios.post(
      "https://api.prospeo.io/search-person",
      {
        page: 1,
        filters: {
          person_seniority: {
            include: ["Founder/Owner"]
          }
        }
      },
      {
        headers: {
          "X-KEY": process.env.PROSPEO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.results.map(contact => ({
      name: contact.person.full_name,
      title: contact.person.current_job_title,
      company: contact.company.name,
      domain: contact.company.domain,
      linkedin: contact.person.linkedin_url,
      emailStatus: contact.person.email?.status
    }));

  } catch (err) {
    console.error(err.response?.data || err.message);
    return [];
  }
}

module.exports = getContacts;