'use client'

import { useEffect, useState } from 'react'
import './styles.css'

type GithubDataProps = {
  name: string
  bio: string
  blog: string
  avatar_url: string
  location: string
  hireable: boolean
  company?: string
}

export function AboutMe() {
  const [ghData, setGhData] = useState<null | GithubDataProps>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielcasag')
      .then((res) => res.json())
      .then((data) => setGhData(data))
  }, [])

  return (
    <main>
      <div>
        {ghData && (
          <>
            <div id="image__container">
              <img src={ghData.avatar_url} alt="avatar from github" />
            </div>
            <h2> {`Hi, i'm ${ghData.name} ✌️`}</h2>
            <p>{ghData.bio}</p>
          </>
        )}
      </div>

      <div>geo location</div>
    </main>
  )
}
