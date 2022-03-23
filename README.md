# Welcome to Rick and Morty Search!

## Description

Rick and Morty Search is a single page application that utilizes a public API 
in order to search for information pertaining to the hit animated science fiction
sitcom Rick and Morty. The show features an endless supply of characters, planets, 
universes, and dimensions across 5 seasons and 51 episodes.

Rick and Morty Search allows you to explore the Rick and Morty universe using three 
different search criteria: search by character, search by location, or search by episode.

## Usage

### Search by Character

The first of three search bars is the "Search by Character" approach. Using this, a user 
can type in any name of an existing character from the show and click "Search Characters". 
If the character exists, a character card will appear below the search bars at the bottom 
of the page. This character card will contain a handful of information about the individual 
including status (alive, dead, unknown), species, and information about their origin and last 
known locations. At the bottom of each card, the user can click on the "See Episodes" button 
to reveal a list of all episodes this specific character appeared in throughout the show.

Assuming the user doesnt know the full name of the character, but knows some portion of the 
name, such as knowing the desired character is a version of Rick but is unsure which one, 
the user may simply type in "rick" to reveal a list of character cards with the keyword 
existing in thier name.

### Search by Location

The second of the three search bars is the "Search by Location" approach. Using this, a user 
can type in the name of any known loation throughout the show and click "Search Locations". 
If the location exists, a location card will appear below the search bars at the bottom of the 
page. This card will show the full name, type, and diminsion of the location. Clicking the "See 
Residents" button at the bottom of each location card will expand a list of all characters known 
to have been at that location throughout the show.

Similar to the character search, a location search can also use key words. For example, a search 
for "park" will yield the location "Anatomy Park", or a search for "Earth" will yield a number of 
locations with earth in thier name.

### Search by Episode

The final search bar allows you to use the "Search by Episode" approach. In order to use this, the 
user must know which season and episode they desire to learn about as the search bar accepts only 
a specific format as a search entry: S##E##. The S stands for season, followed by a 2 digit season 
number, and the E stands for episode followed by a 2 digit episode number. Once enetered, if the 
format is correct and the season exists, an episode card will appear below the search bars at the 
bottom of the page. This card will show the season name, code, and air date. Clicking on the "See 
Characters" button at the bottom of the card will expand a drop down list of all charcaters that 
appeared in that episode.

For Example, if you wanted to search for Season 2 Episode 8, you would enter: S02E08. You would 
then see the card at the bottom of the page for "Interdimensional Cable 2: Tempting Fate" along 
with its appropriate information.

## Video Walkthrough

A video Walkthrough for the project can be found [Here](https://youtu.be/G_TwaBVWqMw).

## Project History

This project was completed by David Drummer in March/2022 as a Phase-1 final project via the Flatiron 
School's Software Engineering program. 

## Acknowledgements

A special thanks to the creators of the [Rick and Morty API](https://rickandmortyapi.com/), Axel 
Fuhrmann and Talita.



