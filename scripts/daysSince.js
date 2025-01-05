window.onload=function() {
    const formatter = new Intl.RelativeTimeFormat('en');
    var dateIn = document.getElementById('dateDisplay').innerHTML;
    const diff = new Date() - new Date(dateIn);
    const daysSince = formatter.format(Math.round(-diff / (1000*60*60*24)), 'days');
    
    document.getElementById("days").innerHTML = daysSince;
}