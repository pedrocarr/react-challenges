import { useState } from 'react'
import './PublicHolidays.css'
import useFetch from '../custom-hooks/useFetch'

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
  const [selectedCountry, setSelectedCountry] = useState<string>('NL')
  const { data } = useFetch<Country[]>(COUNTRIES_URL)
  const { data: holidaysList } = useFetch<Holiday[]>(getPubicHolidays(selectedCountry))

  const countries = data || []

  const holidays = holidaysList || []


  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value)
  }

  return (
    <div className='publicHolidaysContainer'>
      <div className='selectWrapper'>
        <select onChange={handleCountryChange} value={selectedCountry}>
          {countries.map((country) =>
            <option key={country.isoCode} value={country.isoCode}>
              {country.name[0].text}
            </option>
          )}
        </select>
      </div>
      {selectedCountry && holidays.map((holiday) =>
        <span className='publicHolidaysSpan' key={holiday.id}><strong>{new Date(holiday.startDate).toDateString()}</strong> - {holiday.name[0].text} </span>
      )}
    </div>
  )
}

export default PublicHolidays
