import { User } from '../users/user.model'

export interface LoginUserPayload {
  username: User['username']
}
