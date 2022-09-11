// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import post from './post';
import author from './author';
import product from './product';
import productType from './productType';
import postCategory from './postCategory';
import industry from './industry';
import specification from './specification';
import feature from './feature';
import PDF from "./PDF";
import techPaper from "./techPaper";
import paperType from "./paperType";
import gas from './gas';
import addon from './addon';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    author,
    postCategory,
    industry,
    blockContent,
    product,
    productType,
    specification,
    feature,
    PDF,
    techPaper,
    paperType,
    gas,
    addon,
  ]),
});
