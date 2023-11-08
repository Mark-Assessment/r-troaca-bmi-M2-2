# **BMI-zing**

## **Site Overview**

Welcome to my user-friendly BMI Calculator website! This platform offers a simple and efficient tool for calculating your Body Mass Index. By inputting your height and weight, the calculator swiftly processes the information and provides your BMI value, indicating whether you fall within the underweight, normal, overweight, obese or extremely obese category. Understanding your BMI is crucial for assessing your overall health and fitness. The website not only computes your BMI but also offers additional information on what the BMI ranges signify and general tips for maintaining a healthy lifestyle. Whether you're curious about your current BMI or aiming to track your fitness progress, BMI-zing is the go-to resource for a quick and accurate BMI assessment.

![Website responsiveness](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/amiresponsive.png?raw=true)

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
    - [**Typography:**](#typography)
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

- Users looking to calculate their BMI.
- Users who want to see what different BMI ranges are there and potential health problems that may occur.
- Users that want to be able to easily access the website from their mobile device as well as their other devices.

### **User Stories:**

- As a user I want to see the subject matter of the page.
- As a new user, I want to easily find the BMI calculator on the website's homepage so that I can quickly determine my BMI without navigating through multiple pages.
- As a health-conscious individual, I want the BMI calculator to provide me with a clear breakdown of what different BMI ranges mean in terms of health and potential risks, helping me understand the implications of my result.
- As a fitness enthusiast, I want the BMI calculator to allow me to input both metric and imperial measurements, giving me the flexibility to use the unit system I'm most comfortable with.
- As a mobile user, I want the website to be responsive and the BMI calculator to be easily accessible and functional on my smartphone or tablet, ensuring a seamless experience regardless of the device I'm using.

### **Site Aims:**

- To inform the user what the website is about.
- To insure the user that the website is fluid and can be navigated at ease every step of their experience.
- To allow the user to easily access the calculator and offer the possibility to switch between unit systems.
- To inform the user on how to use the BMI calculator.
- To inform the user on what different BMI ranges mean and understand the implications of their result.

### **How Will This Be Achieved:**

- The landing page of the website provides the user a description of what the BMI represents.
- The site shows the calculator close to the top of the page, to allow the users to quickly be able to calculate their BMI.
- The site provides information on how to use the BMI calculator.
- The site provides the user an easy to read chart of different BMI ranges, as well as additional information about each result.
- The users are able to find at the bottom of the page, additional answers to some frequently asked questions.

### **Wireframes:**

- Mobile Wireframes:
  - Home page

![Home page](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/mobile-wireframe.jpg?raw=true)

- Desktop wireframes:
  - Home page

![Home page](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/desktop-wireframe.jpg?raw=true)


### **Color Scheme:**

When deciding the color scheme I wanted a light main body with accents of blue for a great aesthetic and black font text for a good contrast. The color palette was created using [https://coolors.co/]
![Color Palette](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/colour-palette.png?raw=true)


I also created this color contrast grid using [https://contrast-grid.eightshapes.com/](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=%23FFFFFF%2C%0D%0A%23b3b1b1%2C%0D%0A%2300ccff%2C%0D%0A%23001a8c%0D%0A%0D%0A&foreground-colors=%23FFFFFF%2C%0D%0A%23b3b1b1%2C%0D%0A%2300ccff%2C%0D%0A%23001a8c%0D%0A%0D%0A&es-color-form__tile-size=large&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp), to check the contrast scored and ensure the text remains visible across the entire website and that the site is accessible to everyone.

![Color Contrast Grid](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/colourgrid.png?raw=true)

### **Typography:**

I decided on using a Google font, called DM-Sans, for its clean and sharp look.
![Typography](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/typography.png?raw=true)

## **Current Features Common to all pages**

### **Header Element**

The header element includes the title of the website and has a gradient background that is in perfect contrast to the white text.
![Header](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/header.png?raw=true)

## **Footer**

The footer includes a copyright notice at the bottom and has the same gradient background as the header, but the gradient is reversed.
![Footer](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/footer.png?raw=true)

## **Page Content features**

### **Home Page Content:**

- This page contains a "What is BMI?" section right after the header, that gives a brief description about the Body Mass Index.
  
![What is BMI section](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/what-is-bmi.png?raw=true)

- The home page also contains the BMI calculator right after the What is BMI section. It gives the user the option to switch between measuring units, either Metric or Imperial. The calculator has 2 input fields, one for weight(either in kg or lbs) and one for height(cm or inches). Next to the "Calculate BMI" button, the result of the user's input will appear.
  
![BMI calculator](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/bmi-calculator.png?raw=true)

- Right after the BMI calculator, there is a "How to use" section, which provides information to the user on how to use the BMI calculator and how the results are being calculated.

![How to use section](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/how-to-use.png?raw=true)

- A fourth section that is individual to the home page is the BMI chart, which shows in detail all the results that a user can get after using the BMI calculator. There is also a short description of what these ranges are.
  
![BMI chart](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/chart.webp?raw=true)
![BMI ranges](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/bmi-ranges.png?raw=true)

- The last section of the home page is the FAQ section, which provides extra information to a few common questions that users might have. These questions have a toggleable effect, that expands to show the answer for each individual question.

![FAQ section](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/faq.png?raw=true)

### **404 Error Page Content**

* This page was created to mimic the effect of accessing a page or link that does not exist.
- The page displays a funny message to inform the user that the page that they were looking for is unavailable.
- Under the message displayed, there is a button that sends the user back to the Home page.

![404 Error page message](https://github.com/RazvanTr10/BMI-zing/blob/main/assets/images/errorpage.png?raw=true)

## **Future-Enhancements**

* Provided I would have had sufficient time, I would have added a few extra features to enhance the website's functionality. One of these would be a dedicated section that links the user to extra resources such as fitness plans and research papers.
- I would also like to add a login feature, so the user can save their results and see if they improved in time. These enhancements would make the website more user-friendly and accesible, as well as enticing the user to come back more often.

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
  - Issue: there was no description of what BMI is.
  - Resolution: I added a brief but comprehensive description of what the Body Mass Index represents.

- As a user I want to be able to easily navigate the page to find what I require in a quickly manner.
  - Issue: the user had to scroll for a long time up and down to find what they were interested in.
  - Cause: the calculator was not placed at the top of the page.
  - Resolution: I moved the calculator at the beginning of the page, so the user can quickly access it.

- As a health-conscious individual, I want the BMI calculator to provide me with a clear breakdown of what different BMI ranges mean in terms of health and potential risks, helping me understand the implications of my result.
  - Issue: the user could not find a description of what the BMI ranges are.
  - Cause: there was a BMI colour coded chart, but no clear breakdown of the ranges.
  - Resolution: I added a short description of the BMI ranges underneath the chart and also added in the FAQ section 2 questions and their respective answers that target the potential health risks of some of the BMI ranges.

- As a fitness enthusiast, I want the BMI calculator to allow me to input both metric and imperial measurements, giving me the flexibility to use the unit system I'm most comfortable with.
  - Issue: the user could not select their prefered measuring unit system.
  - Cause: there was only the option for the Metric system.
  - Resolution: I added the Imperial measuring system to the calculator, because some countries do not use the Metric system.
  
- As a mobile user, I want the website to be responsive and the BMI calculator to be easily accessible and functional on my smartphone or tablet, ensuring a seamless experience regardless of the device I'm using.
  - Issue: the user could not see the calculator on smaller devices, in its entirety
  - Cause: the calculator was not responsive.
  - Resolution: I modified some of the CSS rules, as to ensure that it is responsive on all devices.

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
