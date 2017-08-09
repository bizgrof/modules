"use strict";
var height = {
	/*
	 * Получает высоту всех элементов переданного класса
	 * @param (string) element, элемент которые передает в функцию, ex. ".product__item"
	 * @return (string) Возращает наибольшее значение из массива
	 */
	get: function(element) {
		var arr = []; //Создаем массив

		// Перебираем все элементы и записываем в массив высоту
	    $(element).each(function() {
	        arr.push($(this).outerHeight());
	    });

	    arr = Math.max.apply(null, arr); // Ищем наибольшую высоту
	    return arr + 'px';  // Склеиваем число с px и возращаем как строку
	},
	
	/*
	 * Устанавливает высоту всем элементам указанного класса
	 * @param (string) element, элемент которые передает в функцию, ex. ".product__item"
	 */
	set: function(element) {
		var el = height.get(element); // Получаем наибольшую высоту нашего элемента
		$(element).css('min-height', el); //Устанавливаем высоту по наибольшему значение
    	return console.log('Установлена высота для: ' + element); 
	}
};
