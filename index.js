import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs } from './schema.js'

import db from './_db.js'

const resolvers = {
    Query: {
        tableOfContent(_, args) {
            return db.tableOfContents.find((toc) => toc.id === args.id)
        },
        chapters() {
            return db.chapters
        },
        chapter(_, args) {
            return db.chapters.find((chapter) => chapter.id === args.id)
        },
        sections() {
            return db.sections
        },
        section(_, args) {
            return db.sections.find((section) => section.id === args.id)
        },
        assets() {
            return db.assets
        },
        asset(_, args) {
            return db.assets.find((asset) => asset.id === args.id)
        }
    },
    TableOfContents: {
        chapters(parent) {
            return db.chapters.filter((r) => r.toc_id === parent.id)
        }
    },
    Chapter: {
        sections(parent) {
            return db.sections.filter((r) => r.chapter_id === parent.id)
        }  
    },
    Section: {
        assets(parent) {
            return db.assets.filter((r) => r.section_id === parent.id)
        }  
    },
    Mutation: {
        deleteTableOfContent(_, args) {
            db.tableOfContents = db.tableOfContents.filter((toc) => toc.id !== args.id)
            return db.tableOfContents
        },
        addTableOfContent(_, args) {
            let toc = {
                ...args.toc,
                id: Math.floor(Math.random()*1000).toString()
            }

            db.tableOfContents.push(toc)
            return toc
        }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} =await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)