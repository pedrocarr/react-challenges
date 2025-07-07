import { useQuery } from '@tanstack/react-query';
interface Story {
  score: number;
  title: string;
  by: string;
  url: string;
}

const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json'

const fetchTopStories = async (): Promise<Story[]> => {
  const response = await fetch(TOP_STORIES_URL)
  const allStories: number[] = await response.json()
  const top10Ids = allStories.slice(0, 10)
  const storyPromises = top10Ids.map(id =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
  )

  return Promise.all(storyPromises)
}

const Top10Articles = () => {
  const { data: stories, isLoading, isError, error } = useQuery<Story[], Error>({
    queryKey: ['top-10-stories'],
    queryFn: fetchTopStories,
    staleTime: 1000 * 60,
  })

  return (
    <>
      <h1>Top 10 Articles From Hacker News</h1>
      {isLoading && (
        <div>is loading ...</div>
      )}
      {isError && (
        <div>Error: {error.message}</div>
      )}
      <ul>
        {stories?.map((story, idx) =>
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