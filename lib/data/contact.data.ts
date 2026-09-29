export const contactData = {
  name: "Craftorus",
  number: "919076464507",
  displayNumber: "+91 90764 64507",
  telNumber: "+919076464507",
  mail: "craftorus@gmail.com",
  address: "Mumbai, Maharashtra, India",
  /**
   * Where we physically work. On-site services (computers, cameras, networks)
   * depend on this being stated plainly — it is the first question a local
   * buyer asks and it is currently buried in the footer.
   */
  serviceArea: "Mumbai Metropolitan Region",
  serviceAreaDetail:
    "On-site survey, installation and maintenance across Mumbai and the surrounding region. For projects further afield, tell us the location when you enquire and we will confirm travel and timing before quoting.",
  /** Commitment shown near the primary CTA, not just on the contact page. */
  responseTime: "Enquiries answered within 24 hours",
  siteVisit: "Free site visit across Mumbai",
  hours: "Monday – Sunday: 9 AM – 6 PM IST",
  hoursNote: "Archived support monitored 24/7",
  defaultWhatsAppMessage:
    "Hi Craftorus, I'm interested in starting a project. Could you share more details about your services?",
}

export const getWhatsAppUrl = (serviceName?: string, clientName?: string) => {
  const baseNumber = contactData.number
  let message = contactData.defaultWhatsAppMessage

  if (serviceName && clientName) {
    message = `Hi Craftorus, I'm interested in ${serviceName}. My name is ${clientName}.`
  } else if (serviceName) {
    message = `Hi Craftorus, I'm interested in ${serviceName}.`
  } else if (clientName) {
    message = `Hi Craftorus, my name is ${clientName}. I'm interested in discussing a project.`
  }

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`
}

export type ContactDataType = typeof contactData