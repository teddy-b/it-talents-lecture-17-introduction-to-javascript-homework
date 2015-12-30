// Lecture 17: Introduction to JavaScript

// Задача 1:
// Напишете JavaScript програма, която по даден array да показва най-
// често срещания символ.
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Резултат: a ( 5 times )
(function(){
	document.getElementById('example1')
		.addEventListener('click', mostCommonCharExample);
	
	document.getElementById('submit1')
		.addEventListener('click', mostCommonChar);
	
	function mostCommonCharExample() {
		document.getElementById('input1').value
			= "3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3";
		mostCommonChar();
	}
	
	function mostCommonChar() {
		var chars,
			i,
			j,
			len,
			count = 1,
			maxCount = 1,
			mostRepeatingChar;
		
		chars = document.getElementById('input1')
			.value
			.split(',')
			.map(function(item) {
				return item.trim();
			});
		
		len = chars.length;
		
		for (i = 0; i < len; i += 1) {
			for (j = i; j > 0; j -=1) {
				if (chars[j] === chars[i]) {
					count += 1;
					
					if (count > maxCount) {
						maxCount = count;
						mostRepeatingChar = chars[j];
					}
				}
			}
			
			count = 1;
		}
		
		document.getElementById('output1').value = mostRepeatingChar;
	}
}());

// Задача 2:
// Напишете JavaScript, който да връща броя на anchors (<а>) в HTML
// документ.
(function(){
	document.getElementById('submit2')
		.addEventListener('click', countAnchors);
	
	function countAnchors() {
		var anchors = document.getElementsByTagName('a');
		document.getElementById('output2').value = anchors.length;
	}
}());

// Задача 3:
// Напишете JavaScript, който да изкарава popup с innerHTML на елемент
// по дадено id.
(function(){
	document.getElementById('example3')
		.addEventListener('click', popupInnerHtmlExample);
	document.getElementById('submit3')
		.addEventListener('click', popupInnerHtml);
	
	function popupInnerHtmlExample() {
		document.getElementById('input3').value = "main";
		popupInnerHtml();
	}
	
	function popupInnerHtml() {
		var id,
			innerHtml;
		
		id = document.getElementById('input3').value;
		innerHtml = document.getElementById(id).innerHTML;
		alert(innerHtml);
	}
}());

// Задача 4:
// Напишете JavaScript, който да връща innerHTML на първия anchor в
// HTML документ
(function(){
	document.getElementById('submit4')
		.addEventListener('click', firstAnchorInnerHtml);
	
	function firstAnchorInnerHtml() {
		var firstAnchor = document.getElementsByTagName('a')[0];
		document.getElementById('output4').value = firstAnchor.innerHTML;
	}
}());

// Задача 5:
// Напишете JavaScript функция, която смята обема на сфера по подаден
// радиус.
(function(){
	document.getElementById('submit5')
		.addEventListener('click', calculateSphereVolume);
	
	function calculateSphereVolume() {
		var radius,
			volume;
		
		radius = document.getElementById('input5').value;
		volume = (4 / 3) * Math.PI * radius * radius * radius;
		document.getElementById('output5').value = volume;
	}
}());

// Задача 6:
// Напишете JavaScript функция, която показва случайна снимка при
// всяко едно отваряне на страницата.
(function getRandomImg() {
	var pics,
		randPic;
	
	pics = [
		'images/alpes.jpg',
		'images/atlantic-city.jpg',
		'images/atlantic-ocean.jpg',
		'images/belogradchik-rocks.jpg',
		'images/black-sea.jpg',
		'images/boyana-waterfall.jpg',
		'images/grand-canyon.jpg',
		'images/krushuna-waterfalls.jpg',
		'images/las-vegas.jpg',
		'images/london.jpg',
		'images/mediterranean-sea.jpg',
		'images/new-york.jpg',
		'images/niagara-falls.jpg',
		'images/paris.jpg',
		'images/philadelphia.jpg',
		'images/vitosha-mountain.jpg',
		'images/vraca-balcan.jpg',
		'images/washington-dc.jpg',
		'images/zurich.jpg'
	];
	
	randPic = pics[Math.round(pics.length * Math.random())];
	document.getElementById('randomImg').innerHTML 
		= '<img src="' + randPic + '" alt="Random picture" />';
}());

// Задача 7:
// Напише JavaScript функционалност, която конвертира от kg в lb и
// обратно.
// 1kg = 2.20462262 lb
(function(){
	document.getElementById('example7')
		.addEventListener('click', convertExample);

	document.getElementById('submit7')
		.addEventListener('click', convert);
	
	function convertExample() {
		document.getElementById('input7').value = 12;
		convert();
	}
	
	function convert() {
		var amounth,
			unit,
			kgToLb = 2.20462262,
			lbToKg = 1 / kgToLb,
			result;
		
		amounth = document.getElementById('input7').value;
		unit = document.getElementById('unit').value;
		result = amounth * (unit == 'kg' ? kgToLb : lbToKg);
		document.getElementById('output7').value = result;
	}
}());

// Задача 8:
// Напишете JavaScript функция, която да добавя редове към
// таблица.Тествайте върху HTML документ.
(function(){
	document.getElementById('submit8')
		.addEventListener('click', addRows);
	
	function addRows() {
		var rows,
			num,
			technology,
			level;
		
		rows = document.getElementsByClassName('techRow');
		num = rows.length + 1;
		technology = document.getElementById('technology').value;
		level = document.getElementById('level').value;
		document.getElementById('techTbody').innerHTML
			+= '<tr class="techRow">'
			+ '<td>' + num + '</td>'
			+ '<td>' + technology + '</td>'
			+ '<td>' + level + '</td>'
			+ '</tr>';					
	}
}());

// Задача 10:
// Направете валидация на формата за регистрация. Ако потребителя не
// е въвел някое поле направете го червено и до него напишете
// съобщение. Когато потребителя въведе полето да се махна червеното.
// Когато потребителя избере държава other да му се показва още едно
// поле да изпише държавата, от която е.
(function(){
	document.getElementById('submit10')
		.addEventListener('click', validateForm);
	
	document.getElementById('country')
		.addEventListener('change', showCountryInput);
	
	function validateForm() {
		var username,
			validUsername,
			email,
			validEmail,
			oteherCountry,
			validOteherCountry,
			password,
			validPassword,
			repeatPass,
			validRepeatPass,
			errMsgField = 'Полето трябва да съдържа поне 6 символа.',
			errMsgCountry = 'Полето трябва да съдържа поне 3 символа.',
			errMsgPass = 'Паролата не съвпада.';
		
		username = document.getElementById('username');
		validUsername = validateLength(username.value, 6);
		validateField(username, validUsername, errMsgField);
		
		email = document.getElementById('email');
		validEmail = validateLength(email.value, 6);
		validateField(email, validEmail, errMsgField);
		
		oteherCountry = document.getElementById('other');
		validoteherCountry = validateLength(oteherCountry.value, 3);
		validateField(oteherCountry, validoteherCountry, errMsgCountry);
		
		password = document.getElementById('password');
		validPassword = validateLength(password.value, 6);
		validateField(password, validPassword, errMsgField);
		
		repeatPass = document.getElementById('repeat');
		validRepeatPass = (password.value == repeatPass.value);
		validateField(repeatPass, validRepeatPass, errMsgPass);
		
		if (validUsername && validEmail
				&& validPassword && validRepeatPass) {
			document.getElementById('regform').onsubmit = true;
			alert('Регистрацията е успешна!');
		}
	}
	
	function validateLength(input, minLen) {
		if (input.length < minLen) {
			return false;
		}
		
		return true;
	}
	
	function validateField(input, validInput, errMsg) {
		var errSpan,
			errSpanText;
		
		errSpan = document.createElement('span');
		errSpanText = document.createTextNode(errMsg);
		errSpan.appendChild(errSpanText);
		
		if (validInput) {
			input.style.backgroundColor = "#44FF44";

			if (input.parentNode.lastChild.innerHTML == errSpan.innerHTML) {
				input.parentNode.removeChild(input.parentNode.lastChild);
			}
		} else {
			input.style.backgroundColor = "#FF4444";
			
			if (input.parentNode.lastChild.innerHTML != errSpan.innerHTML) {
				input.parentNode.appendChild(errSpan);
			}
		}
	}
	
	function showCountryInput() {
		var country = document.getElementById('country');
		
		if (country.value == 'bg') {
			document.getElementById('other').style.visibility = "hidden" ;
		} else {
			document.getElementById('other').style.visibility = "visible" ;
		}
	}
}());