# Gatsby Starter Ecommerce

Gatsby starter to create an ecommerce website with netlify and stripe. Setup and release your shop in a few minutes.

Demo: https://dindim-production.netlify.com/

## Features

- 100% Free: No subscriptions, just pay a fee to Stripe when you sell a product.
- Home Page: list all your products.
- Category Page: list products by category.
- Product Detail Page: View products details. Define several colors and sizes for the same product
- Cart Page: Summary of your cart before checkout.
- Checkout Page: Powered by Stripe.
- Scripts to create/update/delete your products in Stripe.
- Analytics with Firebase

## Stack

- Gatsby
- Netlify
- Stripe
- Firebase
- Material UI

## Getting started

- Clone the repo: `git clone https://github.com/lorenzogm/gatsby-ecommerce-starter`
- Install the packages: `yarn install`
- Create a stripe account and get the API keys: `https://stripe.com/docs/keys`
- Create a firebase project: `https://firebase.google.com/docs/analytics/get-started`
- Create the development environment and add the development keys: `touch .env.development`
- Create the production environment and add the production keys: `touch .env.production`
- Create your catalog in stripe: `yarn catalog:create`
- Start the development server: `yarn start`

## Use your own products

- Update the categories at `src/constants/categories.js`
- Update the colors at `src/constants/colors.js`
- Update the sizes at `src/constants/sizes.js`
- Update the products in the `scripts/products/` folder. Use the folder structure that suits your needs. At the moment each product is defined in a different file.
- Run `yarn catalog:create` to create your catalog or `yarn catalog:update` to update it.
