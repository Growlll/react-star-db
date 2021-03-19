export default class SwapiService {
  _baseLink = 'https://swapi.dev/api/'

  async getResource(url) {
    const res = await fetch(`${this._baseLink + url}`)

    if (!res.ok) {
      throw new Error(`Couldn't new fetch ${url}` + `, received ${res.status}`)
    }
    return res.json()
  }

  async getAllStarships() {
    return await this.getResource('starships/')
  }

  getStarship(id) {
    return this.getResource(`starships/?results=${id}`)
  }

  async getAllPlanets() {
    return await this.getResource('planets/')
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`)
  }

  async getAllPeople() {
    return await this.getResource('people/')
  }

  getPerson(id) {
    return this.getResource(`people/${id}`)
  }

}

const swapi = new SwapiService()

swapi.getAllStarships()
  .then((r) => {
    console.log(r)
  })
swapi.getStarship(1)
  .then(r => {
    console.log(r.results[1])
  })

swapi.getAllPlanets()
  .then((r) => {
    console.log(r)
  })
swapi.getPlanet(7)
  .then(r => {
    console.log(r)
  })


swapi.getAllPeople()
  .then((r) => {
    console.log(r)
  })
swapi.getPerson(7)
  .then(r => {
    console.log(r)
  })