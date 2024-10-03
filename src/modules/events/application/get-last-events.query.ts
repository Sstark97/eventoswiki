import { Query } from '@/modules/shared/application/use-case/query'
import { PastEventsCriteria } from '../domain/criterias/last-events-criteria'
import type { Event } from '../domain/event'
import type { EventsRepository } from '../domain/events.repository'

interface GetLastEventsRequest {
  count: number
}

export class GetLastEventsQuery extends Query<Array<Event>, GetLastEventsRequest> {
  constructor(private readonly eventRepository: EventsRepository) {
    super()
  }

  execute({ count }: GetLastEventsRequest): Promise<Array<Event>> {
    const criteria = PastEventsCriteria.withCount(count)
    return this.eventRepository.match(criteria)
  }
}