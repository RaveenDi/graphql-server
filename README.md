Example queries:

Relation => 

TableOfContents
    - Chapter
        - Section
            - Asset

-----------------------------------------------
QUERY => query chapterQuery($id: ID!) {
    chapter(id: $id) {
        id,
        title
    }
}

GRAPHQL VARIABLES
{
    "id":"1"
}

------------------------------------------------

query tableOfContentQuery($id: ID!) {
    tableOfContent(id: $id) {
        id,
        title,
        chapters {
                    id,
        title,
        sections {
            id,
            title,
            assets {
                id,
                title
            }
        }
        }
    }
}

{
    "id":"1"
}

------------------------------------------------

mutation DeleteMutation($id: ID!) {
    deleteTableOfContent(id: $id) {
        id,
        title,
        chapters {
                    id,
        title,
        sections {
            id,
            title,
            assets {
                id,
                title
            }
        }
        }
    }
}

{
    "id":"1"
}


------------------------------------------------

mutation addTableOfContent($toc: addTableOfContentsInput!) {
    addTableOfContent(toc: $toc) {
        id,
        title,
        chapters {
                    id,
        title,
        sections {
            id,
            title,
            assets {
                id,
                title
            }
        }
        }
    }
}

{
    "id":"1"
}
