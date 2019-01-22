import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'
import { ICrime } from '../interfaces'

/**
 * Make a request for street level crimes based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @param {string} date - Optional. A date in the format YYYY-MM
 * @returns {promise}
 */
export default async (latitude: number, longitude: number, date?: string): Promise<ICrime[]> => {
  return fetchData(
    `${PATHS.STREET_LEVEL}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
