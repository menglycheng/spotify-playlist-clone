import React from 'react'
import { useRecoilState } from 'recoil'
import useSpotify from '../hooks/useSpotify'
import millisToMinutesAndSeconds from '../lib/time'

const Song = ({ key, track, order }) => {
  const spotifyApi = useSpotify()
  return (
    <div
      className="mt-10 grid grid-cols-2 py-4 px-5 text-gray-500
     hover:bg-gray-500 hover:text-white"
    >
      <div className="flex cursor-pointer items-center space-x-5 rounded-lg">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36 truncate text-white lg:w-64">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between  md:ml-0">
        <p className="hidden w-40 truncate hover:bg-gray-500 md:inline">
          {track.track.album.name}
        </p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
