const blogpost = {
    title: 'Best blogpost ever',
    body: `Here's proof`,
    author: 'Rovsky Slava',
    views: 13,
    comments: [
        {author: 'Anonymous',
        body: 'Some quality comment'},
        {author: 'Man',
        body: 'Nice'}
    ],
    isLive(){
        return true;
    }
}
console.log(blogpost);
