<!-- .slide: class="splash-page" -->

# Vim As A Language

## A Demonstration Of

## Efficient Editing

---

## What We'll Cover

<!-- .slide: class="incremental-list" -->

- What Vim Even Is.
- What's Special About Vim.
- Who Vim Is For.
- Getting Started With Vim.
- Practice Time!
- How To Actually Learn Vim.

---

## Getting The Most Out Of Today

- This talk will expose you to Vim and get you some practice. Don't expect to actually learn Vim today!
- You can code along, but if you fall behind, don't try to catch up. There are no assignments. Don't panic.
- We'll take breaks and switch exercises often, so you can start always start fresh with the next file.

---

## What's Special About Vim

_Nothing_. But Vim users eventually **all** become this guy:

![young man looking agitated at a school desk with the caption, "When it's been 10 minutes since you told somebody you use vim"](assets/images/vim.jpg)<!-- .element: class="fragment" -->

So that's me now.<!-- .element: class="fragment" -->

Sorry.<!-- .element: class="fragment" -->

---

<!-- ## What This Talk Is About -->

<!-- - Vim as an editing language that can run everywhere--including in VS Code! -->
<!-- - What makes it so goshdarned _fast_. -->
<!-- - Convincing you to give the Vim editing language a real shot. -->

<!-- ## What This Talk Isn't About -->

<!-- - Vim as a terminal app--though it's really great! -->
<!-- - Telling you that Vim is right for you. -->

<!-- ## So Why Use The Vim Editing Language? -->

<!-- ### It Makes You A Faster Solution Implementer. -->

<!-- - Developers' time: -->
<!--   - 90% researching and thinking about what change needs to happen -->
<!--   - 10% making that change -->
<!-- - Vim does nothing for your research and your thinking and your problem-solving skills. -->
<!-- - But it makes that time where you're making the change almost instantaneous--no friction between the change you want to make and it happening. -->
<!-- - A skilled Vim user effectively wishes a change to happen and it just... happens. -->

<!-- ### It's Everywhere -->

<!-- Once you know Vim, you can always use it. -->

<!-- - the terminal app is on almost all Linux, Unix, and Mac machines. -->
<!-- - you can use its editing language in VS Code and almost all other editors -->
<!-- - and in many online IDEs as well--REPL, Codewars, LeetCode, HackerRank, and more -->

<!-- ## How Is It So Fast? -->

<!-- ### Vim uses a **modal** editing system for its keybindings. -->

<!-- So we don't have to use Command-Shift-K to delete a line, just `dd`. We achieve this by having: -->

<!-- - a mode where typing things actually enters those letters onto the screen -->
<!-- - a mode where every letter and symbol on your keyboard is instead a one-key editing shortcut -->

<!-- ### A demo -->

<!-- ## Install The Vim Extension -->

<!-- - Don't worry that this makes any kind of permanent change -->
<!--   - It's easily toggleable on and off -->
<!--   - Or disabled. -->
<!--   - Or uninstalled. -->
<!--   - In fact, you should probably turn it off after this talk! -->
<!-- - Let's install it! -->

<!-- ## We'll Be Touring, Not Learning -->

<!-- I'm going to take you on a grand tour of the power of vim editing. -->

<!-- Do NOT try to memorize this lesson! -->

<!-- If/when you want to learn Vim, you should start with a SMALL subset of these commands -->
<!-- Then, when you have those down, add a couple more to your list. -->

<!-- You can get good with vim pretty quickly, but you'll have to be patient until you're great with vim. -->

<!-- Again, don't panic if you miss a few commands here. I'm just trying to give you a feel for what editing with vim is like! -->

<!-- ## Order Of Commands -->

<!-- ### Movement -->

<!-- - `hjkl` -->
<!--   - convenient but too small, tendency to spam -->
<!--   - `j`/`k` good with count--turn relative numbers on - VSCodeVim setting: "Smart Relative Line" -->
<!-- - `w` -->
<!-- - `b` -->
<!-- - `f`/`t` with `;`/`,` -->
<!-- - `/` with `n`/`N` -->
<!-- - `$`/`^` -->

<!-- ### Use movement with x/r -->

<!-- #### Exercise 1: Remove and replace characters. -->

<!-- Don't forget `u` to undo! -->

<!-- ### Use movement with d -->

<!-- Now we're combining a VERB, `d`, with a NOUN, saying what to do that verb TO. -->

<!-- So these can be read as -->

<!-- - `dj`: delete one line down (and the current line) -->
<!-- - `d3j`: delete 3 lines down (and the current line) -->
<!-- - `dtr`: delete to the `r` -->
<!-- - `d5w`: delete 5 words (technically, delete until you're at 5 `w` movements) -->
<!-- - `d/const` (and then hit return): delete until you hit the search term `const`. -->
<!-- - `d$`: delete until the end of the line -->
<!-- - `d^`: delete until the start of the line -->
<!-- - `dd`: delete the line - repeating a command almost always means "do this for the line" -->

<!-- #### Exercise 2: remove words and lines -->

<!-- Don't forget `u` to undo! -->

<!-- ### Repetition -->

<!-- `.` -->

<!-- #### Exercise 3: repeating yourself -->

<!-- - delete until the end of the line a few times... `=== false`? -->
<!-- - delete a couple lines up a few times to get rid of sets of console logs -->
<!-- - find and replace `!` with `=` -->

<!-- ### Making Changes -->

<!-- Don't forget `u` to undo! -->

<!-- #### Exercise 4: Refactoring -->

<!-- - Change variable names -->
<!-- - Change partial method names (`cfwtoggle` to change `show` to `toggle`) -->
<!-- - Change state: `dd` one state, `cc` another -->
<!-- - Change in `setState` - `ci{` -->

<!-- ### Normal mode vs. insert mode -->

<!-- We've been staying in what's called "normal mode", because for a coder the DEFAULT is to be editing text, not adding it. -->

<!-- But you'll definitely need to add text fairly often too. -->

<!-- And you'll be _changing_ text a lot too. -->

<!-- ### Entering insert mode -->

<!-- - `i`/`a` -->
<!-- - `I`/`A` -->
<!-- - `o`/`O` -->

<!-- #### Exercise 5: repeating additions -->

<!-- - adding semi-colons at the end of lines -->
<!-- - adding `let` at the beginning of lines -->
<!-- - adding `$` just before `{` to make interpolating values work -->
<!-- - add `return arr` in accumulator pattern const -->

<!-- ### Something Else -->
