
export function parse(data) {
    const values = []
    const dates = []

    const result = []
    for (let i = 0; i < data.length; i++) {
        const obj = data[i]

        if (obj.value == -9999)
            continue

        let date = obj.date.substr().slice(0, -6);
        result.push([date, obj.value]);
    }

    return result;
}

// {
//     "Statewide": {
//         "SWV": "California Statewide Estimate"
//     },
//     "San Luis": {
//         "LUS": "San Luis Reservoir (State)",
//             "SLF": "San Luis Reservoir (Federal)",
//                 "SNL": "San Luis Reservoir",
//                     "Map": "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=San%20Luis%20Reservoir+(San%20Luis%20Reservoir)&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Stevens Creek": {
//         "SEC": "Stevens Creek Reservoir",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Stevens%20Creek%20Reservoir+(Stevens%20Creek%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Lexington": {
//         "LNG": "Lexington Reservoir",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lexington%20Reservoir+(Lexington%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Oroville": {
//         "ORO": "Lake Oroville",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Oroville+(Lake%20Oroville)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Berryessa": {
//         "BER": "Lake Berryessa",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Berryessa+(Lake%20Berryessa)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Coyote": {
//         "COY": "Coyote (Lake Mendocino)",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Mendocino%20Lake+(Mendocino%20Lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Folsom": {
//         "FOL": "Folsom Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Folsom%20Lake+(Folsom%20Lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Melones": {
//         "NML": "New Melones Reservoir",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Melones+(Lake%20Melones)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Tahoe": {
//         "THC": "Lake Tahoe",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20Tahoe+(Lake%20Tahoe)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Shasta": {
//         "SHA": "Shasta Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=shasta%20lake+(shasta%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Millerton": {
//         "MIL": "Millerton Lake (Friant Dam)",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=millerton%20lake+(millerton%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Isabella": {
//         "ISB": "Isabella Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Isabella%20Lake+(My%20Business%20Name)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Diamond": {
//         "DMV": "Diamond Valley Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Diamond%20Valley%20Lake+(My%20Business%20Name)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Cachuma": {
//         "CCH": "Lake Cachuma",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=lake%20cachuma+(havasu%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Havasu": {
//         "HVS": "Lake Havasu",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=havasu%20lake+(havasu%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Lopez": {
//         "LOP": "Lopez Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=lopez%20lake+(lopez%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Pine": {
//         "PNF": "Pine Flat Lake",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=pine%20flat%20lake+(pine%20flat%20lake)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Don Pedro": {
//         "DNP": "Don Pedro Reservoir",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=don%20pedro%20reservoir+(don%20pedro%20reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "Almanor": {
//         "ALM": "Lake Almanor",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lake%20almanor+(Lake%20almanor)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     },
//     "New Bullards": {
//         "BUL": "New Bullards Bar Reservoir",
//             "Map": "https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=New%20Bullards%20Bar%20Reservoir+(New%20Bullards%20Bar%20Reservoir)&amp;t=p&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//     }
// }