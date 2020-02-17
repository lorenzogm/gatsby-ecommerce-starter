const ADULT_SIZES = {
  SMALL: {
    slug: 'small',
    name: 'S',
  },
  MEDIUM: {
    slug: 'medium',
    name: 'M',
  },
  LARGE: {
    slug: 'large',
    name: 'L',
  },
  XLARGE: {
    slug: 'xlarge',
    name: 'XL',
  },
  XXLARGE: {
    slug: 'xxlarge',
    name: '2XL',
  },
}

const sizes = {
  UNISEX: ADULT_SIZES,
  WOMEN: ADULT_SIZES,
  MEN: ADULT_SIZES,
  KIDS: {
    YEARS_3_4: {
      slug: 'years-3-4',
      name: '3-4 Years',
    },
    YEARS_5_6: {
      slug: 'years-5-6',
      name: '5-6 years',
    },
    YEARS_7_8: {
      slug: 'years-7-8',
      name: '7-8 years',
    },
    YEARS_9_10: {
      slug: 'years-9-10',
      name: '9-10 years',
    },
    YEARS_11_12: {
      slug: 'years-11-12',
      name: '11-12 years',
    },
  },
  BABIES: {
    MONTHS_0_3: {
      slug: 'months-0-3',
      name: '0-3 Months',
    },
    MONTHS_3_6: {
      slug: 'months-3-6',
      name: '3-6 Months',
    },
    MONTHS_6_12: {
      slug: 'months-6-12',
      name: '6-12 Months',
    },
    MONTHS_12_18: {
      slug: 'months-12-18',
      name: '12-18 Months',
    },
  },
}

module.exports = sizes
