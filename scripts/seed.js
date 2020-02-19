/* eslint-disable no-console */
const stripe = require('stripe')('sk_test_558JZshYB9voUZRf4u51NRJB00TnEWkTQC')

stripe.setMaxNetworkRetries(2)

const deleteAllSkus = require('./deleteAllSkus')
const deleteAllProducts = require('./deleteAllProducts')
const createProduct = require('./createProduct')

// animals
const dogAndCatBabyBody = require('./products/animals/dog-and-cat-baby-body')
const dogAndCatBabyTShirt = require('./products/animals/dog-and-cat-baby-t-shirt')
// const dogAndCatTShirt = require('./products/animals/dog-and-cat-kids-t-shirt')

const foxBabyBody = require('./products/animals/fox-baby-body')
const foxBabyTShirt = require('./products/animals/fox-baby-t-shirt')
// const foxTShirt = require('./products/animals/fox-kids-t-shirt')

const lionBabyBody = require('./products/animals/lion-baby-body')
const lionBabyTShirt = require('./products/animals/lion-baby-t-shirt')

const myFriendsBabyBody = require('./products/animals/my-friends-baby-body')
const myFriendsBabyTShirt = require('./products/animals/my-friends-baby-t-shirt')

const owlBabyBody = require('./products/animals/owl-baby-body')
const owlBabyTShirt = require('./products/animals/owl-baby-t-shirt')

const pigBabyBody = require('./products/animals/pig-baby-body')
const pigBabyTShirt = require('./products/animals/pig-baby-t-shirt')

const saveAnimalsUnisexTShirt = require('./products/animals/save-animals-unisex-t-shirt')

const saveAnimalsWomenTShirt = require('./products/animals/save-animals-women-t-shirt')

const wildAnimalsBabyBody = require('./products/animals/wild-animals-baby-body')

const seed = async () => {
  console.log('Starting...')
  console.log('')

  try {
    await deleteAllSkus({ stripe })
    await deleteAllProducts({ stripe })

    // animals
    await createProduct({ stripe, product: dogAndCatBabyBody })
    await createProduct({ stripe, product: dogAndCatBabyTShirt })
    // await createProduct({ stripe, product: dogAndCatTShirt })

    await createProduct({ stripe, product: foxBabyBody })
    await createProduct({ stripe, product: foxBabyTShirt })
    // await createProduct({ stripe, product: foxTShirt })

    await createProduct({ stripe, product: lionBabyBody })
    await createProduct({ stripe, product: lionBabyTShirt })

    await createProduct({ stripe, product: myFriendsBabyBody })
    await createProduct({ stripe, product: myFriendsBabyTShirt })

    await createProduct({ stripe, product: owlBabyBody })
    await createProduct({ stripe, product: owlBabyTShirt })

    await createProduct({ stripe, product: pigBabyBody })
    await createProduct({ stripe, product: pigBabyTShirt })

    await createProduct({ stripe, product: saveAnimalsUnisexTShirt })

    await createProduct({ stripe, product: saveAnimalsWomenTShirt })

    await createProduct({ stripe, product: wildAnimalsBabyBody })

    // await createProduct({ stripe, product: roarrrWomenTShirt })

    // dinos
  } catch (error) {
    console.error(error)
  }

  console.log('')
  console.log('DONE')
}

seed()
