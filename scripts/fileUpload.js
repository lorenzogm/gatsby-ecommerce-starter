const stripe = require('stripe')('sk_test_558JZshYB9voUZRf4u51NRJB00TnEWkTQC')
const animals = require('./products/animals')
const fs = require('fs')

const fileUpload = async ({ path, fileName }) => {
  const fp = await fs.readFileSync(path)
  const r = await stripe.files.create({
    file: {
      data: fp,
      name: fileName,
      type: 'application.octet-stream',
    },
    purpose: 'dispute_evidence',
    file_link_data: {
      create: true,
    },
  })

  console.log(r)
}

fileUpload()
