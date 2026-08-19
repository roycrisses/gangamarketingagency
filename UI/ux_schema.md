Technical Requirements Document (TRD)1. System Architecture & Tech StackFrontend Framework: Next.js (React) / Tailwind CSS for rapid server-side rendering and static site generation (SSG).Hosting Platform: Netlify Edge Infrastructure with continuous deployment linked to the primary branch.Version Control: GitHub (main branch protected, PR-based workflow for staging previews).Domain & DNS: Custom domain gangamarketingagency.com.np mapped via Netlify DNS with automatic SSL provisioning via Let's Encrypt.Third-Party Integrations: Direct WhatsApp Web API ([https://wa.me/](https://wa.me/)).2. Frontend Architecture & Design System IntegrationCore ComponentsHeader / Navigation (/components/Navbar.jsx): Sticky header with blur backdrop effect (backdrop-blur-md), branding logo, nav links, and CTA triggering WhatsApp/Call.Hero Component (/components/Hero.jsx): Low-contrast dark background (#0D0D0D), high-density white text header, subtext badge containers ([+]), and dual CTA action buttons.Proof Ticker (/components/ClientTicker.jsx): Seamless CSS keyframe loop displaying partner logos in monochromatic grey scale.Metrics Cards (/components/StatsGrid.jsx): 4-column responsive CSS grid with metric counters (1%, 30+, 100%, 8+).Services Grid (/components/Services.jsx): Bento-box style dark card layout highlighting Meta Ads, SEO, Social Media Handling, Website Creation, and Video Ads.Lead Form (/components/ContactForm.jsx): Native HTML5 form handling with direct JS execution for messaging generation.3. WhatsApp Automation LogicWorkflow ArchitectureUser fills in form fields (Name, Phone, Selected Service, Message).Client-side JS captures onSubmit, prevents default page reload via event.preventDefault().JS utility function parses and escapes data via encodeURIComponent().Browser opens WhatsApp deep link target directly in a new tab.Code Specification (/utils/whatsapp.js)JavaScriptexport const handleWhatsAppSubmit = (formData) => {
  const phoneNumber = "9779700804395";
  
  const rawMessage = 
`Hello Ganga Marketing Agency!

New Website Inquiry:
• Name: ${formData.name}
• Contact: ${formData.phone}
• Requested Service: ${formData.service}

Message:
"${formData.message}"`;

  const encodedMessage = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
4. Non-Functional RequirementsPerformance:First Contentful Paint (FCP) $< 1.2\text{s}$Cumulative Layout Shift (CLS) $< 0.05$Target Lighthouse score $\ge 95$ across Desktop and Mobile.Browser Compatibility: Support for all modern evergreen browsers (Chrome, Safari, Firefox, Edge, Brave).Responsiveness: Fluid breakpoint system for Mobile ($<640\text{px}$), Tablet ($640\text{px}-1024\text{px}$), and Desktop ($>1024\text{px}$).5. Security & Deployment ConfigurationsNetlify Deployment Configuration (netlify.toml)Ini, TOML[build]
  command = "npm run build"
  publish = ".next"

[[headers]]
  for = "/*"
    [headers.values]
      X-Frame-Options = "DENY"
      X-Content-Type-Options = "nosniff"
      Referrer-Policy = "strict-origin-when-cross-origin"
      Content-Security-Policy = "default-src 'self' https://wa.me; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
Git Pipeline & Version Control FlowBranch Structure: main (Production), staging (Netlify Preview deployment).Auto-triggers on commit: Pushing to main instantly executes static site compilation on Netlify Edge.