import React, { useEffect } from 'react'
import '../App.css'

const currentYear = new Date().getFullYear()

const COUNTRIES_URL = 'https://openholidaysapi.org/Countries'

const getPubicHolidays = (countryIsoCode: string) =>
  `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&languageIsoCode=EN&validFrom=${currentYear}-01-01&validTo=${currentYear}-12-31`

interface Country {
  isoCode: string;
  name: CountryName[]
}

interface CountryName {
  text: string;
  language: string;
}

interface Holiday {
  id: string;
  name: HolidayName[]
  nationwide: boolean;
  startDate: string;
}

interface HolidayName {
  text: string;
  language: string;

}
const PublicHolidays = () => {
  const [countries, setCountries] = React.useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = React.useState<string>('NL')
  const [holidays, setHolidays] = React.useState<Holiday[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRIES_URL)
        const countries = await response.json()
        console.log(countries)
        setCountries(countries)
      } catch (error: unknown) {
        console.error('Error fetching countries:', error)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch(getPubicHolidays(selectedCountry))
        const holidays = await response.json()
        setHolidays(holidays)
      } catch (error: unknown) {
        console.error('Error fetching holidays', error)
      }
    }
    if (selectedCountry) fetchHolidays()
  }, [selectedCountry])

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value)
  }

  return (
    <div className='publicHolidays'>
      <select onChange={handleCountryChange} value={selectedCountry}>
        {countries.map((country) =>
          <option key={country.isoCode} value={country.isoCode}>
            {country.name[0].text}
          </option>
        )}
      </select>
      <ul>
        {holidays.map((holiday) =>
          <li key={holiday.id}><strong>{holiday.startDate}</strong> - {holiday.name[0].text} </li>
        )}
      </ul>
    </div>
  )
}

export default PublicHolidays
