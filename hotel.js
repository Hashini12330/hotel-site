function showPage(pageId){
    document.getElementById('home').style.display='none';
    document.getElementById('services').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById(pageId).style.display='block';
}