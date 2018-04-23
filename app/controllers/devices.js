import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByName(param) {
            if (param !== '') {
                return this.get('store').query('device', { name: param }).then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        };
                    }
                )
            } else {
                return this.get('store').findAll('device').then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        };
                    }
                )
            }
        }
    }
})