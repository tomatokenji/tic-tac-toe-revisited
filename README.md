# Tic Tac Toe Revisited

## Introduction

In the [first part of our Tic Tac Toe Mini Project](https://github.com/wdi-sg/tic-tac-tester), you created the logic for a Tic Tac Toe game using TDD. 

Now it's time to add a GUI (Graphical User Interface) using HTML, CSS and JavaScript DOM Manipulation.

## Exercise

#### Requirements

- A user should be able to click on different squares to make a move
- Every click will alternate between marking an `X` and `O`
- Upon marking of an individual cell, use JavaScript to add a class to
  each cell to display separate colors
- A cell should not be able to be replayed once marked
- Add a restart button that will clear the contents of the board
- Display a message to indicate which turn is about to be played
- After Game Over, display the player who has won

---

 - In your html, you'll need to construct a
 game board. The game board should include the 3x3 grid and at
 minimum, a restart button. Using `id` and `class` on clickable
 elements will help you wire this up in JavaScript afterwards.

 - JavaScript DOM portion will be next:

   * Locate the element first to use it within your app. Think about
      using `document.getElementById`, `document.getElementsByClassName` or something similar to locate your target elements. Try this in your console to make sure your selection works.

   * After finding the elements, start writing logic to listen for
      `click` events on those elements

   * You will need to link these clicks upto your exisiting variables to keep track of moves. You can then use these variables later to indicate whether or not to draw an `X` or an `O`.

**Bonus:**
Once you've got the basics, add the following:


#### Starter code

There is no starter code provided for this lab.

#### Deliverable

Please find some screenshots of what you'll be creating.  Feel free to get creative with how you style your interface.

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)
![Screen-shot](https://i.imgur.com/Jw6hhcA.png)

#### Additional Resources

- [CSS-Tricks "What Is The DOM"](https://css-tricks.com/dom/)
- [More on events with Eloquent JavaScript](http://eloquentjavascript.net/14_event.html)

