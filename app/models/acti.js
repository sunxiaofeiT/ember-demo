import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    date: DS.attr('string'),
    class: DS.attr('string'),
    people: DS.attr('string'),
    note: DS.attr('string')
});
