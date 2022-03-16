import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'
const Songs = () => {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="pd-28 flex flex-col space-y-0 px-8 text-white">
      {playlist?.tracks?.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index} />
      ))}
    </div>
  )
}

export default Songs
