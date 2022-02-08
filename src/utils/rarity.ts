// import nft from "./_metadata2.json";
// let nfts = nft as any[];

// const get_all_traits = (nft_arr) => {
//   let all_traits = {};
//   let attr_count = {}; //track attribute count of each nft
//   console.log(nft_arr.length);
//   for (let i = 0; i < nft_arr.length; i++) {
//     let nft = nft_arr[i];
//     if (nft) {
//       let { attributes } = nft;
//       attributes = attributes.filter(
//         (attribute) => attribute["trait_type"] && attribute["value"] !== "None"
//       );
//       if (attr_count[attributes.length]) {
//         attr_count[attributes.length] = attr_count[attributes.length] + 1;
//       } else {
//         attr_count[attributes.length] = 1;
//       }
//       for (let j = 0; j < attributes.length; j++) {
//         let attribute = attributes[j];
//         let { trait_type, value } = attribute;
//         if (trait_type && value) {
//           if (all_traits[trait_type]) {
//             // trait exists
//             all_traits[trait_type].sum++;
//             if (all_traits[trait_type][value]) {
//               // trait exists, value exists
//               all_traits[trait_type][value]++;
//             } else {
//               // trait exists, value doesn't
//               all_traits[trait_type][value] = 1;
//             }
//           } else {
//             // trait or value don't exist
//             all_traits[trait_type] = { [value]: 1, sum: 1 };
//           }
//         }
//       }
//     }
//   }
//   // console.log("----------------")
//   // console.log(all_traits)
//   // console.log("----------------")
//   return { all_traits, attr_count };
// };

// let { all_traits, attr_count } = get_all_traits(nfts);

// const get_trait_rarity_score = (trait_type, all_traits) => {
//   return all_traits[trait_type].sum;
// };

// const set_missing_traits = (nft, missing_traits, all_traits) => {
//   // How many traits don't have say Eyes, Mouth
//   // How many traits don't have say Eyes, Mouth
//   let totaltraits = all_traits["Space Suit Gear"].sum;
//   nft["missing_traits"] = [];
//   for (let i = 0; i < missing_traits.length; i++) {
//     let missing_trait = missing_traits[i];
//     let rarity_count = get_trait_rarity_score(missing_trait, all_traits);
//     let missing_count = totaltraits - rarity_count;
//     let percentile = missing_count / totaltraits;
//     let rarity_score = 1 / percentile;

//     nft["missing_traits"].push({
//       trait_type: missing_trait,
//       rarity_score,
//       count: missing_count,
//       percentile,
//     });
//   }
// };

// const set_trait_rarity = (nft, all_traits) => {
//   if (nft) {
//     let { attributes } = nft;
//     attributes = attributes.filter(
//       (attribute) => attribute["trait_type"] && attribute["value"] !== "None"
//     );
//     let missing_traits = Object.keys(all_traits);

//     for (let i = 0; i < attributes.length; i++) {
//       let attribute = attributes[i];
//       if (attribute) {
//         let { trait_type, value } = attribute;
//         if (trait_type && value) {
//           attribute["count"] = all_traits[trait_type][value];
//           missing_traits = missing_traits.filter(
//             (trait) => trait !== trait_type
//           );
//         }
//       }
//     }
//     set_missing_traits(nft, missing_traits, all_traits);
//   }
// };

// const set_nft_rarity = (nft, all_traits) => {
//   let sumoftraits = all_traits["Space Suit Gear"].sum; //All types humans, aliens
//   if (nft) {
//     let { attributes } = nft;
//     attributes = attributes.filter(
//       (attribute) => attribute["trait_type"] && attribute["value"] !== "None"
//     );
//     for (let i = 0; i < attributes.length; i++) {
//       let attribute = attributes[i];
//       attribute["percentile"] = attribute["count"] / sumoftraits;
//       attribute["rarity_score"] = 1 / (attribute["count"] / sumoftraits);
//     }
//   }
// };

// const calculate_attribute_rarity = (nft) => {
//   let { attributes } = nft;
//   attributes = attributes.filter(
//     (attribute) => attribute["trait_type"] && attribute["value"] !== "None"
//   );
//   let sumoftraits = all_traits["Space Suit Gear"].sum;

//   nft["trait_count"] = {
//     count: attributes.length,
//     percentile: attr_count[attributes.length] / sumoftraits,
//     rarity_score: 1 / (attr_count[attributes.length] / sumoftraits),
//   };
// };

// const calculate_nft_rarity = (nft) => {
//   let { attributes, missing_traits } = nft;
//   attributes = attributes.filter(
//     (attribute) => attribute["trait_type"] && attribute["value"]
//   );
//   nft["rarity_score"] = 0;
//   for (let i = 0; i < attributes.length; i++) {
//     nft["rarity_score"] += attributes[i]["rarity_score"];
//   }

//   // for (let i = 0; i < missing_traits.length; i++) {
//   //   nft["rarity_score"] += missing_traits[i]["rarity_score"];
//   // }

//   nft["rarity_score"] += nft["trait_count"]["rarity_score"];
// };

// const filter_nft_attributes = (nft) => {
//   nft["attributes"] = nft["attributes"].filter(
//     (attribute) => attribute["trait_type"] && attribute["value"] !== "None"
//   );
// };

// const getNFT = (name) => {
//   // Retrieve nft for id
//   // Precompute the frequency of each trait
//   // nfts = nfts.sort((x, y) => {
//   //   // console.log(x["name"] - y["name"])
//   //   return nfts
//   //   });
//   // console.log(nfts.find(x => x.name === "Winston #0"))
//   let nft = nfts.find((x) => x.name === name);
//   if (nft) {
//     filter_nft_attributes(nft);
//     set_trait_rarity(nft, all_traits);
//     set_nft_rarity(nft, all_traits);
//     calculate_attribute_rarity(nft);
//     calculate_nft_rarity(nft);
//     // console.log(nft)
//     return { ...nft };
//   }
// };

// const set_nft_rank = (nft, rank) => {
//   // console.log(nft, rank);
//   nft["rarity_rank"] = rank;
//   return { ...nft };
// };

// const set_nfts_rank = () => {
//   console.log("set nfts rank");
//   nfts = nfts
//     .map((nft) => getNFT(nft.name))
//     .map((nft, index) => set_nft_rank(nft, index));
// };

// set_nfts_rank();

// export const mainFun = (page_id, sort_by, order, traits, attr_count, query) => {
//   let nftdata = nfts.find((x) => x.name === page_id);
//   let pages = nfts.length / 54;
//   console.log("--------------");
//   console.log({ nfts: nftdata, pages });
//   console.log("--------------");
//   return { nfts: nftdata, pages };
// };
