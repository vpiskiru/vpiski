import React from 'react'

const Map = React.createClass({
  render:function(){
    alert("render");
    var styler={
      height:"100%"
    }
    return (<div id="map" style={styler}>hello</div>);
  },

  componentDidMount:function(){
	alert(213);
	/*ymaps.ready(init);*/
        init();

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
            balloonContent: '<strong>серобуромалиновый</strong> цвет'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            balloonContent: 'цвет <strong>детской неожиданности</strong>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            balloonContent: 'цвет <strong>красный</strong>'
        }, {
            preset: 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            balloonContent: 'цвет <strong>фэйсбука</strong>'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent: 'цвет <strong>носика Гены</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: 'цвет <strong>голубой</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
  }
})

export default Map;