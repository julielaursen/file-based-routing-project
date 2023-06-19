import { useRouter } from 'next/router'

function FilteredEventsPage() {
  const router = useRouter()
  const filteredData = router.query.slug

  if (!filteredData) {
    return <p className="center">Loading...</p>
  }
  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Adjust your search</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>
  }

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  )
}

export default FilteredEventsPage
