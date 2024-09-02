var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>'
		},
	},
})

// maeking qustions tags
const swW = document.querySelector('.swiper-wrapper')
function makeQuestion() {
	for (let i = 0; i < mathQuestions.length; i++) {
		swW.innerHTML += `
			<div class="swiper-slide">
					<div class="question">${mathQuestions[i].question}</div>
					<div class="options">
							<div class="option">
									<input type="radio" name="opt${i}" id="q${i}a" value="${mathQuestions[i].options[0]}">
									<label for="q${i}a">A) ${mathQuestions[i].options[0]}</label>
							</div>
							<div class="option">
									<input type="radio" name="opt${i}" id="q${i}b" value="${mathQuestions[i].options[1]}">
									<label for="q${i}b">B) ${mathQuestions[i].options[1]}</label>
							</div>
							<div class="option">
									<input type="radio" name="opt${i}" id="q${i}c" value="${mathQuestions[i].options[2]}">
									<label for="q${i}c">C) ${mathQuestions[i].options[2]}</label>
							</div>
							<div class="option">
									<input type="radio" name="opt${i}" id="q${i}d" value="${mathQuestions[i].options[3]}">
									<label for="q${i}d">D) ${mathQuestions[i].options[3]}</label>
							</div>
					</div>
			</div>`
	}
}
makeQuestion()
