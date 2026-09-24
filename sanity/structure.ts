import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Info")
                .child(S.document().schemaType("info").documentId("info")),
            S.listItem()
                .title("Location")
                .child(
                    S.document().schemaType("location").documentId("location"),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !["info", "location"].includes(listItem.getId() as string),
            ),
        ]);
