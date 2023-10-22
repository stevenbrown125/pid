// We import object and document schemas
import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import product from "./product";
import productType from "./productType";
import postCategory from "./postCategory";
import industry from "./industry";
import specification from "./specification";
import feature from "./feature";
import PDF from "./PDF";
import techPaper from "./techPaper";
import paperType from "./paperType";
import gas from "./gas";
import addon from "./addon";

const schema = [
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
];

export default schema;
