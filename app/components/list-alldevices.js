import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-alldevices'],
    value: '',

    init() {
        this._super(...arguments);
        this.get('filter')('').then(
            (allResults) => {
                console.log(allResults.results)
                this.set('results', allResults.results)
            }
        );
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then(
                (allResults) => {
                    this.set('results', allResults.results)
                }
            );
        }
    },
});
