import { beforeAll, afterAll, describe, it } from "@jest/globals"
import { Connection } from "mysql2/promise"
import Helper from "@test/Helper"
import PersonSql from '@sql/PersonSql.ts'
import { PersonObjects } from "@test/TestObjects.ts"

let db: Connection

beforeAll(async() => {
    db = await Helper.getConnexion()
})

afterAll(async () => {
    if(db) await db.end()
})

describe('PersonSql', () => {
    describe('when PERSON are loaded with keys', () => {
        describe('and the keys are: 2', () => {
            it('should return: minimal', async() => {
                const personSql = new PersonSql(db)
                const persons = await personSql.findByIds([2])

                Helper.expectArraySql(persons, [PersonObjects.minimal])
            })
        })
    })
})
