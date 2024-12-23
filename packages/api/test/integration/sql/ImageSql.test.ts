import { afterAll, beforeAll, describe, it } from '@jest/globals';
import { Connection } from 'mysql2/promise';
import Helper from '@test/Helper';
import ImageSql from '@sql/ImageSql.ts'
import { ImageObjects } from '@test/TestObjects.ts';

let db: Connection

beforeAll(async() => {
    db = await Helper.getConnexion()
})

afterAll(async () => {
    if(db) await db.end()
})

describe('ImageSql', () => { 
    describe('when IMAGE are loaded with keys', () => {
        describe('and the keys are: 2, 3', () => {
            it('sould return: minimal and simple', async() => {
                const imageSql = new ImageSql(db)
                const images = await imageSql.findByIds([2, 3])

                Helper.expectArraySql(images, [ImageObjects.minimal, ImageObjects.simple])
            })
        })
    })
 })
