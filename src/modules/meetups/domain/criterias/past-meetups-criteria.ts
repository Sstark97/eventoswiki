import { OrderDirection } from '@/modules/shared/domain/criteria/order-direction'
import { RelationalOperator } from '@/shared/domain/criteria/relational-operator'
import { Datetime } from '@/shared/domain/datetime/datetime'
import { MeetupsCriteria } from './meetups-criteria'

export class PastMeetupsCriteria extends MeetupsCriteria {
  static create(): PastMeetupsCriteria {
    return MeetupsCriteria.create({ endsAt: OrderDirection.DESC }).and({
      startsAt: { operator: RelationalOperator.LOWER_THAN, value: Datetime.now() },
    })
  }
}
