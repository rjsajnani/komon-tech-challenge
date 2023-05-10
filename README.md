# Komon Tech Challenge

Design an app that will fetch user info from various social media.


## Installation

Install all dependency 

```bash
yarn
```

## Usage
To start the application locally 

```bash
 npx expo start
```

To run test

```bash
 yarn test
```

### Small Demo


![Demo](https://github.com/rjsajnani/komon-tech-challenge/assets/17737055/a8fac703-9695-4583-9be9-7d43fb8c3e8c)


### Main Challenge

- It was getting to complicated to get API response from tiktok or instgram 

  ###### Solution
   Create a mock API which will handle the json file I will need [Link](https://www.npoint.io/docs/370fc4db2db84ad88075)

- I have not worked with expo-router before so wasn't able to mock the correct test required for navigation
  ###### Ideal follow
   I would create the list view and check if the screen has navigated or not,if we pass some params I would check that as well

- Passing array of the `LatestPost` was not possible as expo-router passes params as string and converting the array to string was too long.
  ###### Solution
   Create react context which will be used to handle individual user info and display in the modal view 
