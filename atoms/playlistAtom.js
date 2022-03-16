import { atom } from 'recoil'

const playlistState = atom({
  key: 'playlistState',
  default: 'null',
})

const playlistIdState = atom({
  key: 'playlistIdState',
  default: '4bSGPL2nZ05KI3Cgz2Yq7u',
})

export default playlistIdState

export { playlistState }
