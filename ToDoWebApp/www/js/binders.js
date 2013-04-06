kendo.data.binders.dateValue = kendo.data.Binder.extend({
    init: function(element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this;
        //listen for the change event of the element
        $(that.element).on("change", function() {
            that.change(); //call the change function
        });
    },
    refresh: function() {
        var that = this,
            value = that.bindings["dateValue"].get(), //get the value from the View-Model
            formatedValue = kendo.toString(value, "yyyy-MM-dd"); //format

        $(that.element).val(formatedValue); //update the HTML input element
    },
    change: function() {
        var formatedValue = this.element.value,
            value = kendo.parseDate(formatedValue); //parse

        if (value) {
            this.bindings["dateValue"].set(value); //update the View-Model
        }
    }
});