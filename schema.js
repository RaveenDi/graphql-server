export const typeDefs = `#graphql
type TableOfContents {
    id: ID!,
    title: String,
    chapters: [Chapter]
}

type Chapter {
    id: ID!,
    title: String,
    sections: [Section]
}

type Section {
    id: ID!,
    title: String,
    assets: [Asset]
}

type Asset {
    id: ID!,
    title: String
}

type Query {
    tableOfContent(id: ID!): TableOfContents
    chapters: [Chapter]
    chapter(id: ID!): Chapter
    sections: [Section]
    section(id: ID!): Section
    assets: [Asset]
    asset(id: ID!): Asset
}

type Mutation {
    addTableOfContent(toc: addTableOfContentsInput): TableOfContents
    deleteTableOfContent(id: ID!): [TableOfContents]
}

input addTableOfContentsInput {
    title: String
}
`;