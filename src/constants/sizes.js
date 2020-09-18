const SIZES_ADULTS = {
  SMALL: { id: 'SMALL', slug: 'small', name: 'S' },
  MEDIUM: { id: 'MEDIUM', slug: 'medium', name: 'M' },
  LARGE: { id: 'LARGE', slug: 'large', name: 'L' },
  XLARGE: { id: 'XLARGE', slug: 'xlarge', name: 'XL' },
  XXLARGE: { id: 'XXLARGE', slug: 'xxlarge', name: '2XL' },
}

module.exports = {
  UNISEX: SIZES_ADULTS,
  WOMEN: SIZES_ADULTS,
  MEN: SIZES_ADULTS,
  KIDS: {
    YEARS_3_4: { id: 'YEARS_3_4', slug: 'years-3-4', name: '3-4 Years' },
    YEARS_5_6: { id: 'YEARS_5_6', slug: 'years-5-6', name: '5-6 years' },
    YEARS_7_8: { id: 'YEARS_7_8', slug: 'years-7-8', name: '7-8 years' },
    YEARS_9_10: { id: 'YEARS_9_10', slug: 'years-9-10', name: '9-10 years' },
    YEARS_11_12: { id: 'YEARS_11_12', slug: 'years-11-12', name: '11-12 years' },
  },
  BABIES: {
    MONTHS_0_3: { id: 'MONTHS_0_3', slug: 'months-0-3', name: '0-3 Months' },
    MONTHS_3_6: { id: 'MONTHS_3_6', slug: 'months-3-6', name: '3-6 Months' },
    MONTHS_6_12: { id: 'MONTHS_6_12', slug: 'months-6-12', name: '6-12 Months' },
    MONTHS_12_18: { id: 'MONTHS_12_18', slug: 'months-12-18', name: '12-18 Months' },
  },
}
