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
            S.listItem()
                .title("Pages")
                .child(
                    S.list()
                        .title("Pages")
                        .items([
                            S.listItem()
                                .title("Home Page Content")
                                .child(
                                    S.document()
                                        .schemaType("homePageContent")
                                        .documentId("homePageContent"),
                                ),
                        ]),
                ),
            S.listItem().title("Projects").child(S.documentTypeList("project")),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        "info",
                        "location",
                        "project",
                        "homePageContent",
                    ].includes(listItem.getId() as string),
            ),
        ]);
