import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '1d715g39',
    dataset: 'production',
    apiVersion: '2022-03-14',
    token: 'skpAlBCOobgcuWEMo8pm7nJ0dUzlUIq1JEpdkCifHr6vr7MODv8NVkWMyZLLdbwp96jmUV7t2Z2IgyjXoEDbBQsnm23BvSOSA1F1kWVDMOmOEMJQdO6OrHxzB1sF9ECqrMxcphAgUFqH3whVyzLFWZ8hI7oKimxqQoeQpbv9ggLyMX2IhaxB',
    useCdn: false,

})