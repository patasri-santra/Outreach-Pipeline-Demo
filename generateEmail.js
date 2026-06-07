function generateEmail(contact) {

  return `
Hi ${contact.name},

I noticed your work at ${contact.company}.

We're helping businesses streamline their outbound sales process and improve lead generation efficiency.

Would you be open to a quick conversation next week?

Best regards,
Test
`;
}

module.exports = generateEmail;