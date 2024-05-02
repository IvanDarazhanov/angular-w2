import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public index = 0;

  public modelTitle='';
  public modelDescription='';
  public modelAuthor='';

  public element;

  public BookCollection = [
    {
      title: 'Art of War',
      description: 'The Art of War is a book of conflict knowledge and tactics revolving around several key concepts, including: Knowing when to fight and when not to fight. Knowing how to mislead the enemy. Knowing oneself and ones enemy.',
      author:'Sun Tzu',
      rating: 0,

      countRatings:0,
      sumRating:0
    },
    {
      title: 'The book of five rings',
      description: 'The Book of Five Rings by Miyamoto Musashi is a classical Japanese text on strategy and martial arts. It explains the principles of combat, with insights applicable to all areas of life.',
      author:'Miamoto Musashi',
      rating: 0,

      countRatings:0,
      sumRating:0
    },
    {
      title: 'The Great Gatsby',
      description: 'The Great Gatsby, novel by American author F. Scott Fitzgerald, published in 1925. It tells the story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth. Set in 1920s New York, the book is narrated by Nick Carraway.',
      author:'F.Scott Fitzgerald',
      rating: 0,

      countRatings:0,
      sumRating:0
    },
    {
      title: 'Harry Potter',
      description:'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as "small and skinny for his age" with "a thin face" and "knobbly knees", and he wears Windsor glasses.',
      author:'J.K. Rowling',
      rating:0,

      countRatings:0,
      sumRating:0
    },
    {
      title: 'Think and Grow Rich',
      description:'Think and Grow Rich is the result of Hills study of over five hundred self-made millionaires—a condensed, accessible explanation of his Law of Success philosophy, which includes thirteen steps to riches (financial, emotional, and spiritual).',
      author: 'Napoleon Hill',
      rating:0,

      countRatings:0,
      sumRating:0
    }
  ];



  public processNextBook() {

    this.index++;

    if (this.index >= this.BookCollection.length) {
      this.index = 0;
    }
  }

  public processPreviousBook() {

    this.index--;

    if (this.index < 0) {
      this.index = this.BookCollection.length - 1;
    }

  }

  processRating(input){

    this.BookCollection[this.index].sumRating+=input;
    this.BookCollection[this.index].countRatings++;

    this.BookCollection[this.index].rating=
    this.BookCollection[this.index].sumRating / this.BookCollection[this.index].countRatings;

    this.processNewData();

    this.processNextBook();
  }

  processNewData(){
    if(this.modelTitle!=='')
      this.BookCollection[this.index].title=this.modelTitle;
    
    if(this.modelDescription!=='')
      this.BookCollection[this.index].description=this.modelDescription;

    if(this.modelAuthor!=='')
      this.BookCollection[this.index].author=this.modelAuthor;

    this.modelTitle='';
    this.modelDescription='';
    this.modelAuthor='';
  }

  continueRating(){
    this.element = document.getElementById("book-wrapper");
    this.element.style.display=="none";
  }

}
