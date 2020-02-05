const stripe = require('stripe')('sk_test_558JZshYB9voUZRf4u51NRJB00TnEWkTQC')

const deleteAllSkus = require('./deleteAllSkus')
const deleteAllProducts = require('./deleteAllProducts')
const createProduct = require('./createProduct')

// animals
const dogAndCatBabyBody = require('./products/animals/dog-and-cat-baby-body')
const dogAndCatTShirt = require('./products/animals/dog-and-cat-kids-t-shirt')
const foxBabyBody = require('./products/animals/fox-baby-body')
const foxTShirt = require('./products/animals/fox-kids-t-shirt')
const roarrrWomenTShirt = require('./products/animals/roarrr-women-t-shirt')

const seed = async () => {
  console.log('Starting...')
  console.log('')

  try {
    await deleteAllSkus({ stripe })
    await deleteAllProducts({ stripe })

    // animals
    await createProduct({ stripe, product: dogAndCatBabyBody })
    await createProduct({ stripe, product: dogAndCatTShirt })
    await createProduct({ stripe, product: foxBabyBody })
    await createProduct({ stripe, product: foxTShirt })
    await createProduct({ stripe, product: roarrrWomenTShirt })

    // dinos
  } catch (error) {
    console.error(error)
  }

  console.log('')
  console.log('DONE')
}

seed()
