/** Все методы и свойства клиентского JS на сайте */
const APP = {
	/**
	 * Добавляет gul в APP
	 * @param {object} component
	 */
	addComponent: function(component) {
		this[component.name] = component.method;
	}
};
