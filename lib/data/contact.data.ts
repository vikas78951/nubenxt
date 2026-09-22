export const contactData = {
  name: "Craftorus",
  number: "919076464507",
  displayNumber: "+91 90764 64507",
  telNumber: "+919076464507",
  mail: "craftorus@gmail.com",
  address: "Mumbai, Maharashtra, India",
  defaultWhatsAppMessage: "Hi Craftorus, I'm interested in starting a project. Could you share more details about your services?",
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