/* eslint-disable no-console */
const stripe = require('stripe')('sk_test_558JZshYB9voUZRf4u51NRJB00TnEWkTQC')

stripe.setMaxNetworkRetries(2)

const deleteAllSkus = require('./deleteAllSkus')
const deleteAllProducts = require('./deleteAllProducts')
const createProduct = require('./createProduct')

// animals

// animals-baby-bodies
const dogAndCatBabyBody = require('./products/animals/animals-baby-bodies/dog-and-cat-baby-body')
const foxBabyBody = require('./products/animals/animals-baby-bodies/fox-baby-body')
const lionBabyBody = require('./products/animals/animals-baby-bodies/lion-baby-body')
const myFriendsBabyBody = require('./products/animals/animals-baby-bodies/my-friends-baby-body')
const owlBabyBody = require('./products/animals/animals-baby-bodies/owl-baby-body')
const pigBabyBody = require('./products/animals/animals-baby-bodies/pig-baby-body')
const wildAnimalsBabyBody = require('./products/animals/animals-baby-bodies/wild-animals-baby-body')

// animals-baby-t-shirts
const dogAndCatBabyTShirt = require('./products/animals/animals-baby-t-shirts/dog-and-cat-baby-t-shirt')
const foxBabyTShirt = require('./products/animals/animals-baby-t-shirts/fox-baby-t-shirt')
const lionBabyTShirt = require('./products/animals/animals-baby-t-shirts/lion-baby-t-shirt')
const myFriendsBabyTShirt = require('./products/animals/animals-baby-t-shirts/my-friends-baby-t-shirt')
const owlBabyTShirt = require('./products/animals/animals-baby-t-shirts/owl-baby-t-shirt')
const pigBabyTShirt = require('./products/animals/animals-baby-t-shirts/pig-baby-t-shirt')

// animals-kid-t-shirts
const dogAndCatKidTShirt = require('./products/animals/animals-kid-t-shirts/dog-and-cat-kid-t-shirt')
const foxKidTShirt = require('./products/animals/animals-kid-t-shirts/fox-kid-t-shirt')
const lionKidTShirt = require('./products/animals/animals-kid-t-shirts/lion-kid-t-shirt')
const myFriendsKidTShirt = require('./products/animals/animals-kid-t-shirts/my-friends-kid-t-shirt')
const owlKidTShirt = require('./products/animals/animals-kid-t-shirts/owl-kid-t-shirt')
const pigKidTShirt = require('./products/animals/animals-kid-t-shirts/pig-kid-t-shirt')

// animals-unisex-t-shirts
const saveAnimalsUnisexTShirt = require('./products/animals/animals-unisex-t-shirts/save-animals-unisex-t-shirt')

// animals-women-t-shirts
const saveAnimalsWomenTShirt = require('./products/animals/animals-women-t-shirts/save-animals-women-t-shirt')

// dinos

// dinos-baby-bodies
const roarrrBabyBody = require('./products/dinos/dinos-baby-bodies/roarrr-baby-body')
const roarrrShapeBabyBody = require('./products/dinos/dinos-baby-bodies/roarrr-shape-baby-body')
const wildDinosBabyBody = require('./products/dinos/dinos-baby-bodies/wild-dinos-baby-body')
const wildDinosShapeBabyBody = require('./products/dinos/dinos-baby-bodies/wild-dinos-shape-baby-body')

// dinos-baby-t-shirts
const roarrrBabyTShirt = require('./products/dinos/dinos-baby-t-shirts/roarrr-baby-t-shirt')
const roarrrShapeBabyTShirt = require('./products/dinos/dinos-baby-t-shirts/wild-dinos-baby-t-shirt')

// dinos-kid-t-shirts
const roarrrKidTShirt = require('./products/dinos/dinos-kid-t-shirts/roarrr-kid-t-shirt')
const roarrrShapeKidTShirt = require('./products/dinos/dinos-kid-t-shirts/roarrr-shape-kid-t-shirt')
const wildDinosKidTShirt = require('./products/dinos/dinos-kid-t-shirts/wild-dinos-kid-t-shirt')

// dinos-kid-t-shirts
const roarrrShapeUnisexTShirt = require('./products/dinos/dinos-unisex-t-shirts/roarrr-shape-unisex-t-shirt')

// dinos-kid-t-shirts
const roarrrShapeWomenTShirt = require('./products/dinos/dinos-women-t-shirts/roarrr-shape-women-t-shirt')

const seed = async () => {
  console.log('Starting...')
  console.log('')

  try {
    await deleteAllSkus({ stripe })
    await deleteAllProducts({ stripe })

    // animals

    // animals-baby-bodies
    await createProduct({ stripe, product: dogAndCatBabyBody })
    await createProduct({ stripe, product: foxBabyBody })
    await createProduct({ stripe, product: lionBabyBody })
    await createProduct({ stripe, product: myFriendsBabyBody })
    await createProduct({ stripe, product: owlBabyBody })
    await createProduct({ stripe, product: pigBabyBody })
    await createProduct({ stripe, product: wildAnimalsBabyBody })

    // animals-baby-t-shirts
    await createProduct({ stripe, product: dogAndCatBabyTShirt })
    await createProduct({ stripe, product: foxBabyTShirt })
    await createProduct({ stripe, product: lionBabyTShirt })
    await createProduct({ stripe, product: myFriendsBabyTShirt })
    await createProduct({ stripe, product: owlBabyTShirt })
    await createProduct({ stripe, product: pigBabyTShirt })

    // animals-kid-t-shirts
    await createProduct({ stripe, product: dogAndCatKidTShirt })
    await createProduct({ stripe, product: foxKidTShirt })
    await createProduct({ stripe, product: lionKidTShirt })
    await createProduct({ stripe, product: myFriendsKidTShirt })
    await createProduct({ stripe, product: owlKidTShirt })
    await createProduct({ stripe, product: pigKidTShirt })

    // animals-unisex-t-shirts
    await createProduct({ stripe, product: saveAnimalsUnisexTShirt })

    // animals-women-t-shirts
    await createProduct({ stripe, product: saveAnimalsWomenTShirt })

    // dinos

    // dinos-baby-bodies
    await createProduct({ stripe, product: roarrrBabyBody })
    await createProduct({ stripe, product: roarrrShapeBabyBody })
    await createProduct({ stripe, product: wildDinosBabyBody })
    await createProduct({ stripe, product: wildDinosShapeBabyBody })

    // dinos-baby-t-shirts
    await createProduct({ stripe, product: roarrrBabyTShirt })
    await createProduct({ stripe, product: roarrrShapeBabyTShirt })

    // dinos-kid-t-shirts
    await createProduct({ stripe, product: roarrrKidTShirt })
    await createProduct({ stripe, product: roarrrShapeKidTShirt })
    await createProduct({ stripe, product: wildDinosKidTShirt })

    // dinos-unisex-t-shirts
    await createProduct({ stripe, product: roarrrShapeUnisexTShirt })

    // dinos-women-t-shirts
    await createProduct({ stripe, product: roarrrShapeWomenTShirt })
  } catch (error) {
    console.error(error)
  }

  console.log('')
  console.log('DONE')
}

seed()
