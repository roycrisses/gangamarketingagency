Backend Schema & API Architecture

Given that your site relies on Netlify hosting and direct WhatsApp routing, the backend architecture is designed as a serverless, low-latency API system. This eliminates unnecessary database maintenance costs while giving you the option to log leads via Netlify Functions or lightweight NoSQL storage.

1. Data Model Schemas
A. Lead Submission Schema (JSON / NoSQL)
Used if you decide to store lead submissions in a serverless database (e.g., MongoDB Atlas or Supabase) alongside WhatsApp redirection.

JSON
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "LeadSubmission",
  "type": "object",
  "properties": {
    "lead_id": {
      "type": "string",
      "format": "uuid"
    },
    "full_name": {
      "type": "string",
      "minLength": 2,
      "maxLength": 80
    },
    "phone_number": {
      "type": "string",
      "pattern": "^\\+?[0-9]{7,15}$"
    },
    "selected_service": {
      "type": "string",
      "enum": [
        "Meta Ads",
        "SEO",
        "Social Media Handling",
        "Website Creation",
        "Video Ads",
        "Other"
      ]
    },
    "budget_range": {
      "type": "string"
    },
    "message": {
      "type": "string",
      "maxLength": 1000
    },
    "meta": {
      "type": "object",
      "properties": {
        "source_ip": { "type": "string" },
        "user_agent": { "type": "string" },
        "created_at": { "type": "string", "format": "date-time" }
      }
    }
  },
  "required": ["full_name", "phone_number", "selected_service", "message"]
}
2. API Endpoint Specification
Endpoint: Process Lead & Generate WhatsApp URL
Route: POST /api/leads

Handler: Netlify Serverless Function (/netlify/functions/submit-lead.js)

Headers: Content-Type: application/json

Request Payload:

JSON
{
  "name": "Aarav Sharma",
  "phone": "+9779800000000",
  "service": "Meta Ads",
  "budget": "NPR 30,000 - 50,000",
  "message": "Looking for Facebook and Instagram ad campaigns for our ecommerce store."
}
Response Payload (200 OK):

JSON
{
  "status": "success",
  "message": "Lead processed successfully",
  "data": {
    "whatsapp_url": "https://wa.me/9779700804395?text=Hello%20Ganga%20Marketing%20Agency!%0A%0ANew%20Inquiry:%0A%E2%80%A2%20Name:%20Aarav%20Sharma%0A%E2%80%A2%20Contact:%20%2B9779800000000%0A%E2%80%A2%20Service:%20Meta%20Ads%0A%E2%80%A2%20Budget:%20NPR%2030,000%20-%2050,000%0A%0AMessage:%0A%22Looking%20for%20Facebook%20and%20Instagram%20ad%20campaigns%20for%20our%20ecommerce%20store.%22"
  }
}
3. Serverless Integration Logic (Netlify Function)
Here is the serverless backend function that validates lead input, logs metadata, and constructs the target WhatsApp redirect string:

JavaScript
// netlify/functions/submit-lead.js

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, phone, service, budget, message } = JSON.parse(event.body);

    // Basic Server-Side Validation
    if (!name || !phone || !service || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const agencyPhone = "9779700804395";
    
    // Format dynamic text message
    const formattedText = 
`Hello Ganga Marketing Agency!

New Website Inquiry:
• Name: ${name.trim()}
• Contact: ${phone.trim()}
• Requested Service: ${service}
• Budget: ${budget || "Not Specified"}

Message:
"${message.trim()}"`;

    const encodedMessage = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${agencyPhone}?text=${encodedMessage}`;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "success",
        whatsapp_url: whatsappUrl,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};