import { type SchemaTypeDefinition } from "sanity";

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'
import { author } from "./newsPost";
import { startup } from "./startup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};

// import { type SchemaTypeDefinition } from "sanity";

// // Import all schema types
// import { blockContentType } from "./blockContentType";
// import { newsPost } from "./newsPostType";
// import { author } from "./authorType";
// import { category } from "./categoryType";

// // Additional types for news verification
// import { verificationStatus } from "./verificationStatusType";
// import { sourceType } from "./sourceType";

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
