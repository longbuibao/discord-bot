/// <reference types="@types/google.maps" />

import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const divId: string = 'map'
const customMap = new CustomMap(divId)
customMap.addUserMarker(new User())
