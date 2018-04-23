import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    date: DS.attr('string'),
    num: DS.attr('number'),  //number used
    note: DS.attr('string'),
});
