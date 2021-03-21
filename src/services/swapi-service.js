export default class SwapiService {
  _baseLink = 'https://swapi.dev/api/'

  async getResource(url) {
    const res = await fetch(`${this._baseLink + url}`)

    if (!res.ok) {
      throw new Error(`Couldn't new fetch ${url}, received ${res.status}`)
    }
    return res.json()
  }

  async getAllStarships() {
    return await this.getResource('starships/')
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/?results=${id}`)
    return this._transformStarship(starship)
  }

  async getAllPlanets() {
    return await this.getResource('planets/')
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`)
    return this._transformPlanet(planet)
  }

  async getAllPeople() {
    return await this.getResource('people/')
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}`)
    return this._transformPerson(person)
  }

  _extractId(str) {
    const idRegExp = /\/(\d+)\/$/
    return str.url.match(idRegExp)[1]
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
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

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}