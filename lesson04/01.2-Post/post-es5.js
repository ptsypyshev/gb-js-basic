'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.show = function() {
    return `This post is written by ${this.author} at ${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}. Content is "${this.text}".\n`;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    console.log(`It makes this post highlighted.`)
};

AttachedPost.prototype.show = function() {
    return Post.prototype.show.call(this) + `Highlight status is ${this.highlighted}`;
};

let post1 = new AttachedPost("Pupkin", "Some text", new Date());
alert(post1.show())
post1.makeTextHighlighted()
alert(post1.show())
