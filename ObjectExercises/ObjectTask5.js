function blog(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    function isLive(){
        return false;
    }
}

let post = new blog('a','b','c',);
console.log(blog);
