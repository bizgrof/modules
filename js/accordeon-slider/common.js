jQuery(function($){
	'use strict';
	var slider = $('.slider'); // Получаем объекты всех слайдеров
	
	var App = {
		init: function(){	 
			slider.each(function(slider){
				var slide = $(this).find('.slide').not('[data-slider=0]'),
					margin = 25;
				
				slide.each(function(slide){
					$(this).css('transform', 'translateX(' + margin + '%)'); // Рапределяем изображения
					margin = margin + 25; // Множим процент
				});
			});

			this.events(); // Инициализируем события

		}, // END init;

		events: function(){
			
			$('.slide').on({
				
				click: function() {
					
					var currentSlider = ($(this).closest('.slider')), // Поиск родителя - слайда
						currentSlide = $(this).attr('data-slider'), // Узнаем текущий ID слайда
						href = $(this).attr('data-href'); // Узнаем текущий URL для Magnific
					
					// Начинаем цикл с текущего слайда
					for (let i = currentSlide; i < currentSlider.find('.slide').length; i++) {
						$(currentSlider.find('.slide')[i]).css('transform', 'translateX(100%)'); //Отодвигаем все то что слева
					}

					$(this).css('transform', ''); // Двигаем выбранный слайд налево
					$(this).find('.slide__title').show(); // Показываем заголовок
					currentSlider.find('.slide__toolbar, .slide__overlay').show(); // Тулбар и оверлей
					currentSlider.find('.slide__fullscreen > a').attr('href', '' + href);
					$(this).find('.slide__hover').css('z-index', '-1'); // Прячем наведение

					// Кнопка закрыть
					$('.slide__close').on('click', function(){
						App.close(currentSlider); // Передаем в функцию наш слайдер
					});
				},

				// Показываем наведение
				mouseenter: function(){
					$(this).find('.slide__hover').css('opacity', '1'); 
				},

				// Скрываем наведение
				mouseleave: function(){
					$(this).find('.slide__hover').css('opacity', '0'); 
				}
			}); // Конец событий
		
		}, // END events;

		close: function(slider) {
			var slide = $(slider).find('.slide'), // Ищем слайды
				margin = 25; // Какой начальный процент

			$(slider).find('.slide__title').hide();
			slider.find('.slide__toolbar, .slide__overlay').hide();
			$(slider).find('.slide__hover').css('z-index', '5');

			
			
			// Перебираем слайды текущего слайдера и устанавливаем распределение
			for (let i = 1; i < slide.length; i++) {
				$(slide[i]).css('transform', 'translateX(' + margin + '%)'); // Рапределяем изображения
				margin = margin + 25; // Множим процент
			}
		} // END close;

	};
	App.init()
});


