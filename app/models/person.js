import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    gender: DS.attr('string'),
    age: DS.attr('number'),
    date: DS.attr('string'),    //date for join us
    grade: DS.attr('string'), //grade
    major: DS.attr('string'),  //major
});
