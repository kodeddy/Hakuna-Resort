// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://fortune-cookie.p.rapidapi.com/api/1.0/get_fortune_cookie.php",
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"X-RapidAPI-Key": "aea61b92c0msh4c141e8311eeedbp163b61jsn135d13684320",
// 		"X-RapidAPI-Host": "fortune-cookie.p.rapidapi.com"
// 	},
// 	"data": {
// 		"api_key": "2387337ba1e0b0249ba90f55b2ba2521"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

(function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
})();