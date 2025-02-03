var xhr = new XMLHttpRequest();
var url = './health_article.json';
//'GET': Specifies the HTTP method used for the request (in this case, a GET request).
//URL: Represents the URL from where you will fetch the data.
//True: Indicates if the request is asynchronous (true) or synchronous (false). 
//In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.
xhr.open('GET', url, true);
//expected response from the server should be in JSON format.
xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');
}