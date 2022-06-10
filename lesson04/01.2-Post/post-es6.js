'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    show() {
        return `This post is written by ${this.author} at ${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}. Content is "${this.text}".\n`;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    show() {
        return super.show() + `Highlight status is ${this.highlighted}`;
    }

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(`It makes this post highlighted.`)
    };
}

let post2 = new AttachedPost("Pupkin", "Some text", new Date());
alert(post2.show())
post2.makeTextHighlighted()
alert(post2.show())
