const newYears = 'Jan 1 2024';

//hàm bên dưới cũng xài đc
function TimesToday() {
    //tạo ngày giờ mặc định của hôm nay
    const currentDate = new Date();
    
    //tạo giây
    var timer = document.querySelector('#seconds').innerHTML = currentDate.getSeconds();

    //tạo phút
    var timer = document.querySelector('#minutes').innerHTML = currentDate.getMinutes();

    //tạo giờ
    var timer = document.querySelector('#hours').innerHTML = currentDate.getHours();

    //tạo ngày trong tháng
    var timer = document.querySelector('#days').innerHTML = currentDate.getDate();
};

const countDays = document.querySelector('#days');
const countHours = document.querySelector('#hours');
const countMinutes = document.querySelector('#minutes');
const countSeconds = document.querySelector('#seconds');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    //Lấy tổng giây trong 1 năm còn lại
    const Totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 24 / 3600)
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds % 60);

    // console.log(days, hours, minutes, seconds); 
    countSeconds.textContent = formatTime(seconds);
    countMinutes.textContent = formatTime(minutes);
    countHours.textContent = formatTime(hours);
    countDays.textContent = days;

}

function formatTime(time) {
    return time < 10 ? `0${time }` : time;
}

countDown();

setInterval(countDown, 1000);
