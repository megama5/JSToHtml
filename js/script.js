// сам пью сам гуляю :))))
function c(tagName, classes = ''){
	let e =  document.createElement(tagName);
	if(classes != ''){
		for( let cl of classes.split(' ')){
			addClass(e, cl);
		}
	}
	return e;
}

function addClass(_node,_class){
	try{
		_node.classList.add(_class);	
	}catch(e){
		console.log(_node);
		console.log(_class);
		console.log(e);
	}
	return _node;
}
function appendChild(_node1){
	for (i = 1; i < arguments.length; i++) {
  	_node1.appendChild(arguments[i]);      
  }
	
	return _node1;
}



;(function() {
	'use strict'; 

	let appElement = document.getElementById('app');

	addClass(appElement,"fb-block");

	let wr1 = c('div','fb-block__header-wraper');
	let img = c('img','fb-block__logo');
	img.src ="assets/img/logo.png";
	img.alt = 'logo';
	appendChild(
		wr1,appendChild(
			c('div','fb-block__logo-wraper'), img
			)
		);

	let a = c('a','fb-block__title-link');
	a.text = 'Beetroot Academy - Odessa';
	a.href = "https://www.facebook.com/BeetrootAcademyOdessa/?hc_ref=ARTDdpInnrAApTkLe8KOL2aWvZlnxT46uWKE_a1xRVQ4gViLtIujmwBXq8dxtWYn27s&fref=nf";
	let h = appendChild(c('h6', 'fb-block__title'),a);

	let p = c('p','fb-block__title-info post');
	a = c('a','post__time');
	a.text = '22 сентября в 8:00';
	a.href = "https://www.facebook.com/BeetrootAcademyOdessa/posts/341256059653547";
	let s = c('span','post__separator');	
	s.innerHTML = '.';
	appendChild( p, a ).appendChild(s);
	a = c('a','post__icon');
	a.href ='#';
	appendChild( p, a );
	s = c('span','fb-block__menu');

	appendChild( 
		wr1, 
		appendChild( 
			appendChild( 
				appendChild(
					c ('div','fb-block__title-wraper'),
					h),
				p),
			s)
		);

	appElement.append(wr1);

	// now we can use wr1, p, a, s, h, img
	let wr2 = c('div', 'fb-block__content-wraper');
	wr1 = c('div', 'fb-block__content-text');
	p = c('p');
	p.innerHTML = 'Выиграй стипендию на бесплатное обучение от Beetroot Academy!';
	appendChild(wr1, p);
	a = c('a');
	a.text = a.href = "https://docs.google.com/…/1FAIpQLSe6ntpTYt3C2ERH6z…/viewform";
	p = c('p');
	p.innerHTML = "Ответь на наш короткий опросник, чтобы принять участие в розыгрыше приза:)<br>";

	appendChild(
		wr2,
		appendChild(
			wr1,
			appendChild( 
				p,
				a
			)
		)
	);

	// now we can use wr1, p, a, s, h, img
	a = c('a','subpost__link');
	a.href = a.text = 'docs.google.com';
	p = c('p','subpost__text');
	p.innerHTML = 'Хочешь выиграть стипендию, которая полностью покроет стоимость обучения на одном из наших четырех курсов? В любом из городов, где мы присутствуем? Разыгрываем магический билет в твое...';
	h = c('h2', 'subpost__title');
	h.innerHTML = 'Опрос от Beetroot Academy';
	wr1 = c('div','fb-block__content-subwraper');
	img = c('img','fb-block__content-img');
	img.src = 'assets/img/safe_image.png';

	
	appendChild(
		wr2,
		appendChild(
			wr1,
			appendChild( c('div','fb-block__content-img-wraper'), img),
			appendChild( 
				c('div','fb-block__content-subtext subpost'),
				h,
				p,
				a				
			)
		),
	);

	// now we can use wr1, p, a, s, h, img

	let b = c('button', 'fb-block__social-like');
	let b1 = c('button', 'fb-block__social-comment');
	let b2 = c('button', 'fb-block__social-share');
	b.innerText = 'нравиться';
	b1.innerText = 'коментарий';
	b2.innerText = 'поделиться';
	wr1 = c('div','fb-block__social');
	appendChild(
		wr2,
		appendChild(
			wr1,
			b,
			b1,
			b2
		)
	);



	appElement.append(wr2);

})();

