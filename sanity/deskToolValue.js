import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { deskTool } from "sanity/desk";

const deskToolValue = deskTool({
  // structure: (S, context) => {
  //   return S.list().title("Content").items([
  //     // Minimum required configuration
  //     ///orderableDocumentListDeskItem({ type: "papers", S, context }),
  //   ]);
  // },
});

export default deskToolValue;
