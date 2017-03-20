import Ember from 'ember';

export default Ember.Component.extend({
  addRental: false,
  actions: {
    rentalFormShow() {
      this.set('addRental', true);
    },

    saveRental() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set('addRental', false);
      this.sendAction('saveRental', params);
    }
  }
});
