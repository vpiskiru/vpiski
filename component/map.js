import React from 'react'

const About = React.createClass({
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

    // ������� ��������� � ����� ��������� "�����".
        myGeoObject = new ymaps.GeoObject({
            // �������� ���������.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // ��������.
            properties: {
                // ������� �����.
                iconContent: '� ������',
                hintContent: '�� ����� ��� ����'
            }
        }, {
            // �����.
            // ������ ����� ����� ������������� ��� ������ �� �����������.
            preset: 'islands#blackStretchyIcon',
            // ����� ����� ����������.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            balloonContent: '���� <strong>���� ����� �����</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
            balloonContent: '<strong>�����������������</strong> ����'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            balloonContent: '���� <strong>���������� ����</strong>'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            balloonContent: '���� <strong>������� �������������</strong>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            balloonContent: '���� <strong>�������</strong>'
        }, {
            preset: 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            balloonContent: '���� <strong>��������</strong>'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent: '���� <strong>������ ����</strong>',
            iconCaption: '����� ��������, �� ���������� ���������� �����'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: '���� <strong>�������</strong>',
            iconCaption: '����� ��������, �� ���������� ���������� �����'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
  }
})

export default About;