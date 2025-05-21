import { useEffect, useState } from 'react'
interface Story {
  score: number;
  title: string;
  by: string;
  url: string;
}

const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json'

const Top10Articles = () => {
  const [stories, setStories] = useState<Story[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchTopStories = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(TOP_STORIES_URL)
        const allStories: number[] = await response.json()
        const top10Ids = allStories.slice(0, 10)

        const storyPromises = top10Ids.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
        )

        const storiesData: Story[] = await Promise.all(storyPromises)

        setStories(storiesData)
      } catch (error) {
        console.error('Error fetching top stories', error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTopStories()
  }, [])

  return (
    <>
      <h1>Top 10 Articles From Hacker News</h1>
      {isLoading && (
        <div>is loading ...</div>
      )}
      {error && (
        <div>Error happened</div>
      )}
      <ul>
        {stories.map((story, idx) =>
          <li key={idx}>
            <a href={story.url} target='_blank' rel='noopener noreferrer'>{story.title}</a>
            <p><strong>Score</strong>: {story.score} - by {story.by}</p>
          </li>
        )}
      </ul>
    </>
  )
}

export default Top10Articles