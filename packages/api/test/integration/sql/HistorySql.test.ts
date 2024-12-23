import { beforeAll, afterAll, it } from "@jest/globals";
import { Connection } from "mysql2/promise";
import Helper from "@test/Helper";
import { describe } from "@jest/globals";
import HistorySql from '@sql/HistorySql.ts'
import { HistoryObjects } from "@test/TestObjects.ts";

let db: Connection

beforeAll(async() => {
    db = await Helper.getConnexion()
})

afterAll(async() => {
    if (db) await db.end()
})

describe('HistorySql', () => {
    describe('when all HISTORY are loaded', () => {
        it('should return: all', async() => {
            const historySql = new HistorySql(db)
            const histories = await historySql.findAll()

            Helper.expectArraySql(histories, HistoryObjects.all)
        })
    })
})
