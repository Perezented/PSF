<h1 align='center'>Pro-Select Flooring LLC</h1>

<p align='center'>
<img width="90%" src='./src/img/psfhome.gif' alt='Preview of what the Pro-Select Flooring website landing page'/>
<img width="90%" src='./src/img/psfGall.gif' alt='Gallery page for PSF'/>
</p>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-^17.0.1-blue.svg)
![cypress](https://img.shields.io/badge/cypress-%5E4.14.1-orange?style=flat-square)
![react--router--dom](https://img.shields.io/badge/react--router--dom-^5.2.0-darkblue?style=flat-square)
![axios](https://img.shields.io/badge/axios-^0.21.0-yellow?style=flat-square)
![emailjs--com](https://img.shields.io/badge/emailjs--com-^2.6.4-red?style=flat-square)
![gh--pages](https://img.shields.io/badge/gh--pages-^3.1.0-default?style=flat-square)
<!-- ![node-sass](https://img.shields.io/badge/node--sass-%5E4.14.1-darkgreen?style=flat-square) -->
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Website for Pro-Select Flooring LLC

[Pro-SelectFlooring.com](https://pro-selectflooring.com)


### Key Features

- User is able to view some of Pro-Select work throughout the web app.
- Users are able to email owner directly through a form on the contact page.
- Users that are wanting to get hired by Pro-Select can email through a join us section. Pro-Select owner gets an auto 'New Job Applicant Alert' added to the prefix of the email
- User is able to view the endless scrolling gallery section to see more work available through hiring Pro-Select Flooring as their flooring company.

#### Features

- Front end is built using React.js while fetching image data from a Node.js server
- Node.js server is connected through AWS S3
- Application fully tested through Cypress

# Installation Instructions

### How to Work App Locally

- Fork and clone the repo to install it as your own machine.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local react development server.

#### Cypress tests ran

- [homepage](https://dashboard.cypress.io/projects/9dp36s/runs/2/specs/fe9dbf30-bd2d-4b0f-9a10-4888b85ec17f/video)
- [gallery](https://dashboard.cypress.io/projects/9dp36s/runs/2/specs/fd17645a-baf1-4b1d-8bb0-d62c2a8700ef/video)
- [contact_page](https://dashboard.cypress.io/projects/9dp36s/runs/2/specs/a126e57d-3581-4986-a605-b88c4de0bda4/video)
- [join_us_page](https://dashboard.cypress.io/projects/9dp36s/runs/2/specs/45b2a103-aa98-41c9-947a-f512bd4119a7/video)

#### Scripts

> Enter `npm command_name` into your terminal to run scripts below

```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e2e": "cypress open"
```

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of by another other developer, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Bugs/Issues

- Slow warm up time for gallery

## Future Improvements

- Talk to Pro-Select Flooring owner more to get an "About Me" page operational.
