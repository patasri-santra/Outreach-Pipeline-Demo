# Automated Cold Outreach Pipeline

## Overview

This project is a Node.js-based automated cold outreach pipeline that streamlines prospect discovery and email outreach. Starting with a seed company domain, the system identifies target companies, finds decision-makers, generates personalized outreach emails, and sends them through Brevo.

## Features

* Accepts a seed company domain as input
* Finds similar target companies
* Discovers decision-makers using Prospeo API
* Generates personalized outreach emails
* Sends emails using Brevo API
* Fully automated command-line workflow

## Tech Stack

* Node.js
* Prospeo API
* Brevo API
* JavaScript

## Project Structure

```text
brevo.js             -> Email sending module
companyFinder.js     -> Similar company discovery
generateEmail.js     -> Outreach email generation
index.js             -> Main pipeline orchestrator
prospeo.js           -> Contact discovery using Prospeo
```

## Setup

1. Clone the repository

```bash
git clone https://github.com/patasri-santra/Outreach-Pipeline-Demo.git
cd outreach-pipeline
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PROSPEO_API_KEY=your_prospeo_api_key
BREVO_API_KEY=your_brevo_api_key
```

## Run

```bash
node index.js hubspot.com
```

## Workflow

```text
Seed Company Domain
        ↓
Find Similar Companies
        ↓
Discover Decision Makers
        ↓
Generate Personalized Email
        ↓
Send Email via Brevo
```

## Example Output

* Similar companies identified
* Decision-makers discovered
* Personalized outreach email generated
* Email successfully sent through Brevo

## Author

Patasri Santra
