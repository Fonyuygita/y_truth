import { type SchemaTypeDefinition } from "sanity";

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'
// import { author } from "./newsPost";
import { startup } from "./startup";
import { author } from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};

// import { type SchemaTypeDefinition } from "sanity";

// // Import all schema types
// import { blockContentType } from "./blockContentType";

// // Additional types for news verification
// import { verificationStatus } from "./verificationStatusType";
// import { sourceType } from "./sourceType";
// import { author, category, newsPost } from "./newsPost";

// // Export the compiled schema
// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [
//     // Core document types
//     newsPost,
//     author,
//     category,

//     // Supporting types
//     blockContentType,
//     verificationStatus,
//     sourceType,
//   ],
// };
