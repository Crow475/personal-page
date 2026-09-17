import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Info")
                .child(S.document().schemaType("info").documentId("info")),
            ...S.documentTypeListItems().filter(
                (listItem) => listItem.getId() !== "info",
            ),
        ]);
