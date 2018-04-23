import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        searchByName(param) {
            if (param !== '') {
               return this.get('store').query('acti',{ name : param }).then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        }
                    }
                )
            } else {
                return this.get('store').findAll('acti').then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        }
                    }
                )
            }
        }
    }
});
