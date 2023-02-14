# EEO1 Visualizer

This project is a capstone final project for Ada Developers Academy, it is deployed on [on github pages](https://deivisualizer.me). This is the front-end repo, which handles visualization and query creation. The back end repo can be found [here](https://github.com/theLP100/eeo1-report-backend).

##################################################

## Purpose

The purpose of this project is to allow lay people to visualize employment equal opportunity reports for private companies (EEO-1) that are put up by American companies. This project is mainly focused on large American technology companies as this is the field we are entering (and also a very appropriate topic to be posting on github). We want to help people see and understand the data in a way that informs them of hiring trends across these companies. Data is sourced directly from publically released EEO-1 reports on company websites or public APIs.

##################################################

## Features

### Basic Mode

Basic mode allows you to query for a single given company and year and one of the following parameters: gender (binary), race or job functional. Results will be displayed in an appropriate graph to either illustrate absolute numbers or relative proportion. Absolute numbers can always be seen by hovering over the chart graphic.

### Advanced Mode

Advanced Mode will allow the user to see data for a given company in finer detail. The user can pick either one year with multiple job functions to visualize by either gender or race or pick one job function to view for all years available. Queries with one year and multiple jobs will be displayed with the first query in the center ring and subsequent queries in outer rings. Multi-year single job function queries will display year inwards out, starting with the earliest year in as the center circle.

##################################################

## Known Issues

- Chart resizing and labelling
  - This project is made using react-chartjs-2 as a dependency. I haven't quite figured out how to get the chart to resize up, it only wants to shrink down. Resizing up can occur by refreshing the page (which will reset query parameters) or changing query parameters so that the chart regenerates.

- Visual bugs
  - The font may not always fit inside the caption box for advanced mode.
  - This site was only tested on Android Pixel 4a and Google Chrome on Mac, it was not tested for tablet, TV or devices.
  - On smaller screens, the advanced mode button on the right may drift very far right.
  - Some charts on the findings page may be pixelated because they are being stretched past their original resolution.

- Contact Page
  - Emails are made through namecheap and they will sometimes end up in our spam folders. You're best off trying to add me on LinkedIn with a note if you want to chat.

##################################################

## Contribute

If you know a source of reputable EEO-1s that we can use to further increase visibility into a company's hiring trends, please contact me.
