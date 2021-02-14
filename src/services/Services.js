const Services = {

    /**
     * Базовый url
     */
    _baseUrl: 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e',

    /**
     * Все данные
     */
    getResource: async function () {
        const res = await fetch(this._baseUrl);

        return await res.json();
    }

}

export default Services;