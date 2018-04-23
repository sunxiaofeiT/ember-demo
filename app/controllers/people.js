import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    actions: {
        filterByName(param) {
            if (param !== '') {
                return this.get('store').query('person', { name: param }).then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        }
                    }
                )
            } else {
                return this.get('store').findAll('person').then(
                    (results) => {
                        return {
                            query: param,
                            results: results,
                        }
                    }
                )
            }
        },
        clickButton() {
            $.ajax({
                url: "http://localhost:3000/people", success: function (result) {
                    $("#div1").html(result);
                    console.log(result);
                }
            })
        }
    }
});