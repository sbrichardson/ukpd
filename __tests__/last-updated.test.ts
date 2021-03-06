/* eslint-env jest */

import * as chai from 'chai'

import * as UKPD from '../src'

import { LastUpdated } from '../src'

const expect = chai.expect

describe('Last updated', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the date in ISO 8601 format', function () {
    return UKPD.lastUpdated()
      .then((data: LastUpdated) => {
        expect(data).to.be.an('object')
        expect(data.date).to.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
      })
  })
})
