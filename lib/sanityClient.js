import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '1d715g39',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    token: 'sk1wIMTvox1PedxDUgzJ6nUXhhicqAfSnxOaMBhXMmRdsSmkEpLBDXy4XJLRuAlYmZyuraptNB29PnqbwdxPIDtKYQJejgJfG3sugilaLvT0zMADRIsZUXLNfBo8oNKsuDhXOIcFmFY5gxkB8KOJdQ02qgJlSq2jNIPgCQtk59UzhaJYeVnE',
    useCdn: false,

})