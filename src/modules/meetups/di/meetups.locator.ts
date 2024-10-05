import { GetMeetupQuery } from '../application/get-meetup.query'
import { GetNextMeetupsQuery } from '../application/get-next-meetups.query'
import { GetPastMeetupsQuery } from '../application/get-past-meetups.query'
import type { MeetupsRepository } from '../domain/meetups.repository'
import { AstroDbMeetupsRepository } from '../infrastructure/astro-db-meetups.repository'

export class MeetupsLocator {
  static getNextMeetupsQuery = (): GetNextMeetupsQuery => {
    return new GetNextMeetupsQuery(MeetupsLocator.createMeetupsRepository())
  }

  static getPastMeetupsQuery = (): GetPastMeetupsQuery => {
    return new GetPastMeetupsQuery(MeetupsLocator.createMeetupsRepository())
  }

  static getMeetupQuery = (): GetMeetupQuery => {
    return new GetMeetupQuery(MeetupsLocator.createMeetupsRepository())
  }

  private static createMeetupsRepository(): MeetupsRepository {
    return new AstroDbMeetupsRepository()
  }
}
