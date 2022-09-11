import { SendTemplatedEmailCommand } from '@aws-sdk/client-ses'
import IContact from '../../types/IContact'

const toAddress = 'sbrown@bliztek.com'
const fromAddress =  'sbrown@bliztek.com'

export const createSendContactEmailTemplateCommand = (
  contact: IContact
) => {

  const templateName = "HNU_Contact"

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress]
    },

    TemplateData: JSON.stringify({ contact }),
    Template: templateName,
    Source: fromAddress
  })
}
