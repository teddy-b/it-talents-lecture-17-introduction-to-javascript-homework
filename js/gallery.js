// Задача 9:
// Направете страница, в която има албум с малки снимки и при слагане
// на мишка върху някоя снимка да се показва по-голяма снимка на
// малката. При махане на мишката от снимката да се скрива голямата
// снимка.
(function(){
	var pics = document.getElementsByClassName('zoom'),
		i,
		len = pics.length;
	
	for (i = 0; i < len; i++) {
		pics[i].addEventListener('mouseover', zoomin);
		pics[i].addEventListener('mouseout', zoomout);
	}
	
	function zoomin() {
		this.style.position="absolute";
		this.style.left="250px";
		this.style.top="10px";
		this.style.width="640px";
	}
	
	function zoomout() {
		this.style.position="static";
		this.style.width="100%";
	}
}());