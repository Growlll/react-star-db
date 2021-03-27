export default class SwapiService {
  _baseLink = 'https://swapi.dev/api/'
  _baseLinkImage = 'https://starwars-visualguide.com/assets/img/'

  async getResource(url) {
    const res = await fetch(`${this._baseLink + url}`)

    if (!res.ok) {
      throw new Error(`Couldn't new fetch ${url}, received ${res.status}`)
    }
    return res.json()
  }

  getAllStarships = async () => {
    const starships = await this.getResource('starships/')
    return starships.results.map(starship => this._transformStarship(starship))
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}`)
    return this._transformStarship(starship)
  }

  getAllPlanets = async () => {
    const planets = await this.getResource('planets/')
    return planets.results.map(planet => this._transformPlanet(planet))
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}`)
    return this._transformPlanet(planet)
  }

  getAllPeople = async () => {
    const people = await this.getResource('people/')
    return people.results.map(this._transformPerson)
  }

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}`)
    return this._transformPerson(person)
  }

  getPersonImage = ({ id }) => {
    return `${this._baseLinkImage}characters/${id}.jpg`
  }

  getStarshipImage = ({ id }) => {
    return `${this._baseLinkImage}starships/${id}.jpg`
  }

  getPlanetImage = ({ id }) => {
    return `${this._baseLinkImage}planets/${id}.jpg`
  }

  _extractId(str) {
    const idRegExp = /\/(\d+)\/$/
    return str.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}