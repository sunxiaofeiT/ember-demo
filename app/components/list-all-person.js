import Component from '@ember/component';

export default Component.extend({
    init () {
        this._super(...arguments);
        this.get('filter')('').then(
            (allResults) => {
                this.set('results', allResults.results)
            }
        );
    },

    actions: {
        handleFilterEntry() {
            let inputValue = this.get('value');
            let inputAction = this.get('filter');
            inputAction(inputValue).then(
                (allRequests) => {
                    this.set('results', allRequests.results);
                    console.log(allRequests.results)
                }
            )
        }
    },
});
