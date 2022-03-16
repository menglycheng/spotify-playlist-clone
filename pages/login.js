import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.id}
          className="flex h-screen flex-col items-center justify-center bg-black"
        >
          <button
            className="rounded-full bg-[#18D860] p-3 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
