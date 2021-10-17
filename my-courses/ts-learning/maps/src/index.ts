/// <reference types="@types/google.maps" />

import { Company } from './Company'
import { User } from './User'
import { CustomMap } from './CustomMap'

const divId: string = 'map'
const customMap = new CustomMap(divId)

customMap.addMarker(new Company())
customMap.addMarker(new User())
