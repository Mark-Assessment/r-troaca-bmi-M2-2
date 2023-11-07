# **BMI-zing**

## **Site Overview**

The Giggly Fox is Leicester's premier destination for laughter and a good time! Situated in the heart of the city, our venue is the go-to spot for an unforgettable evening of side-splitting comedy and good times.

Established with a passion for spreading joy and merriment, The Giggly Fox has been a staple in Leicester's entertainment scene for over a decade. We take pride in curating an eclectic lineup of comedic talent, bringing together the finest stand-up comedians, improv artists, and sketch groups from near and far. Whether you're a local resident or a visitor to our vibrant city, our doors are wide open, ready to welcome you into a world of unbridled laughter.

![Website responsiveness]()

## Table of contents

- [**BMI-zing**](#bmi-zing)
  - [**Site Overview**](#site-overview)
  - [Table of contents](#table-of-contents)
  - [**Planning stage**](#planning-stage)
    - [**Target Audiences:**](#target-audiences)
    - [**User Stories:**](#user-stories)
    - [**Site Aims:**](#site-aims)
    - [**How Will This Be Achieved:**](#how-will-this-be-achieved)
    - [**Wireframes:**](#wireframes)
    - [**Color Scheme:**](#color-scheme)
  - [**Current Features Common to all pages**](#current-features-common-to-all-pages)
    - [**Header Element**](#header-element)
  - [**Footer**](#footer)
  - [**Page Content features**](#page-content-features)
    - [**Home Page Content:**](#home-page-content)
    - [**404 Error Page Content**](#404-error-page-content)
  - [**Future-Enhancements**](#future-enhancements)
  - [**Testing Phase**](#testing-phase)
    - [**Testing During Development**](#testing-during-development)
      - [**Manual Testing**](#manual-testing)
      - [**User Story Testing**](#user-story-testing)
      - [**Functionality testing**](#functionality-testing)
      - [**Bugs and fixes**](#bugs-and-fixes)
    - [**Testing After Development**](#testing-after-development)
      - [**Validators**](#validators)
      - [***HTML*** - https://validator.w3.org/nu/](#html---httpsvalidatorw3orgnu)
      - [***CSS*** - https://jigsaw.w3.org/css-validator/](#css---httpsjigsaww3orgcss-validator)
      - [**Lighthouse Scores**](#lighthouse-scores)
  - [**Deployment**](#deployment)
  - [**Credits**](#credits)
    - [**Honorable mentions**](#honorable-mentions)
    - [**General reference:**](#general-reference)
    - [**Content:**](#content)

## **Planning stage**

### **Target Audiences:**

- Users looking to see a comedy show.
- Users who want to see what comedians are performing at The Giggly Fox.
- Users that want to get in contact with the comedy club and make a booking.

### **User Stories:**

- As a user I want to see the subject matter of the page.
- As a user I want to be able to easily navigate the page to find what I require in a quickly manner.
- As a user I want to find the dates and times of show that I am interested in, without too much trouble.
- As a user I want to be able to find what comedians are performing at this venue.
- As a user I want to be able to contact the club easily.

### **Site Aims:**

- To inform the user what the website is about.
- To insure the user that the website is fluid and can be navigated at ease every step of their experience.
- To inform the user on the show dates and entrance times.
- To inform the user on the comedians that perform at The Giggly Fox and provide extra details about them.
- To provide a manner of contacting the venue.
- To provide the ability to subscribe to a newsletter that will inform the user on any shows added to our show list and their respective lineups.

### **How Will This Be Achieved:**

- The landing page of the website provides the user a description of the comedy club and how it became one of the top comedy clubs in the country.
- The site provides clear information on the club's
  - Upcoming shows
  - Comedians
- The site provides a method of contacting the club and offers as well as the address of the club and the phone number where the club can be contacted, in the Contact section of the website.
- The site provides the user a method of subscribing to a newsletter, that will be sent twice a month and inform the user with the new shows that have been added and their dates and entrance times, as well as the comedians that will perform on the day of the show.

### **Wireframes:**

- Mobile Wireframes:
  - Home page

![Home page]()

- Desktop wireframes:
  - Home page

![Home page]()


### **Color Scheme:**

When deciding the color scheme I wanted a dark and gritty main body with accents of orange representing the colour of the fox and white font text for a good contrast. The color palette was created using [https://coolors.co/]
![Color Palette](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/colorpalette.jpg?raw=true)

I also created this color contrast grid using [https://contrast-grid.eightshapes.com/](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%231A1E21%2C%0D%0A%23212529%2C%0D%0A%23343439%2C%0D%0A%23FFFFFF%2C%0D%0A%23ff5500%0D%0A%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp), to check the contrast scored and ensure the text remains visible across the entire website and that the site is accessible to everyone.

![Color Contrast Grid](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/colourgrid.jpg?raw=true)

## **Current Features Common to all pages**

### **Header Element**

The header element sticks to the top of the page as the user scrolls up and down the website. Originally I had designed the page with a "return to top" link at the bottom of the page. The navbar contains the following features:

## **Footer**

* The footer is present across every page of the website, featuring social media icons that link directly to the corresponding social media websites. This will allow users to stay up to date with the comedy club's latest updates and events on various social media platforms.
- The icons used for the social media buttons are imported by linking a CDN from [https://fontawesome.com]
- Footer also includes copyright notice at the bottom.
- The footer was inspired from [https://mdbootstrap.com/docs/standard/extended/social-media-icons-footer/#section-related-resources] and modified the code to adapt it to this website.
![Page footer]

## **Page Content features**

### **Home Page Content:**

* This page contains an About Us section right after the hero image carousel, that gives a brief description about the comedy club, its history and what can you expect to find when you visit The Giggly Fox.
  
![About us section](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/aboutus.jpg?raw=true)

- The home page also contains an Upcoming Shows section, which shows the next 6 upcoming shows at the comedy club, including their date. Underneath these shows there is a button that redirects users to the Shows page, where they can see more information about these upcoming shows. On mobile phones, this section only shows the next 3 shows, as to decrease loading times and scrolling endlessly.
  
![Upcoming shows section](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/upcomingshows.jpg?raw=true)

- A third section that is individual to the home page, is the comedians sections, which shows 8 comedians that perform at the comedy club. Underneath these comedians images there is a button that redirects the user to the Comedians page, where they can see more information about these comedians. On mobile phone, the section only shows 4 comedians, as to load the page faster.
  
![Comedians section](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/comedianshomepage.jpg?raw=true)

### **404 Error Page Content**

* This page was created to mimic the effect of accessing a page or link that does not exist.
- The page displays a funny message to inform the user that the page that they were looking for is unavailable.
- Under the message displayed, there is a button that sends the user back to the Home page.

![404 Erorr page message](https://github.com/RazvanTr10/the-giggly-fox/blob/main/assets/images/screenshots/404page.jpg?raw=true)

## **Future-Enhancements**

* Provided I would have had sufficient time, I would have added a few extra features to enhance the website's functionality. One of these would be a dedicated page to each comedian, allowing the comedian to share their latest videos and which shows are they doing down the road.
- I would also like to add a search bar at the top of the website, so the user can find specific information that they are looking for. These enhancements would make the website more user-friendly and accesible.

***

## **Testing Phase**

### **Testing During Development**

During the development process, I have been constantly testing the website in the following ways:

1. Manually testing each element of the page for responsiveness and accesibility via a live server opened using CodeAnywhere.

2. Published the page via GitHub pages and shared with friends and family to receive feedback.

3. Made use of Developer Tools from different Internet browsers, to continuously identify and troubleshoot any problems I encountered.

#### **Manual Testing**

* While testing the website, I have used 4 different browsers to make sure that it is cross-compatible. The desktop browsers I have used for the tesing were:

  - Firefox
  - Google Chrome
  - Microsoft Edge
  - DuckDuckGo

- I have also asked other people to test the website, using their personal iPhones and Macbooks using Safari, since I don't have access to these devices. To which they reported that they have not encountered any bugs.

#### **User Story Testing**

During my manual testing, I have tested every user story, to ensure that the needs of the users are met.

- As a user I want to see the subject matter of the page.
  - Issue: the About Us section didn't stand out, as to allow the user to notice it straight away.
  - Cause: the background of the About Us section was slightly darker than the body background.
  - Resolution: I added a 4px solid orange border, which captures the attention of the user and they can see the subject of the website in an instant.

- As a user I want to be able to easily navigate the page to find what I require in a quickly manner.
  - Issue: the user had to scroll for a long time up and down to find which section they were interested in.
  - Cause: the navbar was not fixed and there was no back to top button either.
  - Resolution: I added a back to top button to all 4 main pages, and I made the navbar fixed as well, so that the user can easily navigate the website.

- As a user I want to find the dates and times of show that I am interested in, without too much trouble.
  - Issue: the user could not find quickly all the times of the shows, from the landing page.
  - Cause: there was a list of shows on the Home page, but no button to take you to the Shows page instantly, without having to scroll all the way up to the top.
  - Resolution: I added a "View all shows" button that redirects the user straight to the Shows page.

- As a user I want to be able to find what comedians are performing at this venue.
  - Issue: the user could not find quickly all the comedians performing at the comedy club, from the Home page.
  - Cause: there was a section of Comedians on the landing page, but there wasn't any button to take you to the Comedians page instantly, without having to scroll all the way up to the top.
  - Resolution: I added a "View all comedians" button that takes the user instantly to the Comedians page.
  
- As a user I want to be able to contact the club easily.
  - Issue: the user could not contact the venue easily, without having to call the club.
  - Cause: there was an email address provided, but no contact form to make it easier for the user to contact The Giggly Fox.
  - Resolution: I added a contact form where the user can input their first and last name, email address, phone number and a text area where they can send all their questions and feedback to the club.

#### **Functionality testing**

* All the links, buttons and forms work as expected, with no errors.
  
#### **Bugs and fixes**

***

### **Testing After Development**

#### **Validators**

#### ***HTML*** - <https://validator.w3.org/nu/>

- All pages return no error.

#### ***CSS*** - <https://jigsaw.w3.org/css-validator/>

- All pages tested, no issues found.
![CSS validator badge](https://jigsaw.w3.org/css-validator/images/vcss)

#### **Lighthouse Scores**

- All lighthouse tests have been made while in incognito mode to avoid any browser extensions interference.
- I have asked several people to run lighthouse tests from their own devices as well, and they were getting similar scores.

- Index.html

![Index.html lighthouse score]()
***

## **Deployment**

I deployed the page on GitHub pages via the following procedure: -

1. From the project's [repository](https://github.com/razvantr10/BMI-zing), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.

You  can find the live site via the following URL - [BMI-zing live webpage](https://razvantr10.github.io/BMI-zing/index.html)
***

## **Credits**

### **Honorable mentions**

* [Richard Wells](https://github.com/D0nni387) - Code Institute mentor who helped me throughout the project and offered lots of valuable information and feedback.

- The Code Institute slack community, for answers to my numerous questions.

### **General reference:**

* I relied upon W3schools, Bootstrap docs, stack overflow and various Google search results for general references throughout the project.

### **Content:**

- The text content was either created by me or generated using an AI tool[https://openai.com/chatgpt]
