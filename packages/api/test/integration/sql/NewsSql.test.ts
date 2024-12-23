import { beforeAll, afterAll, describe, it } from "@jest/globals"
import { Connection } from "mysql2/promise"
import Helper from "@test/Helper"
import NewsSql from '@sql/NewsSql.ts'
import { NewsObjects } from "@test/TestObjects.ts"

let db: Connection

beforeAll(async() => {
    db = await Helper.getConnexion()
})

afterAll(async() => {
    if (db) await db.end()
})

describe('NewsSql', () => {
    describe('when all NEWS are loaded', () => {
        it('sould return: all', async() => {
            const newsSql = new NewsSql(db)
            const news = await newsSql.findAll()

            Helper.expectArraySql(news, NewsObjects.all)
        })
    })
})
