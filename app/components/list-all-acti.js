import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.get('filter')('').then(
            (allResults) => {
                this.set('results',allResults.results)
            }
        )
    },

    actions:{
        InputAction(param) {
            let value = this.get('value');
            let action = this.get('filter');
            action(value).then(
                (allResults) => {
                    this.set('results',allResults.results)
                }
            )
        }
    }
});
