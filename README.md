
# Spotify Trishan

Spotify Trishan is a NextJS app that allows users to browse trending albums and search for albums using the Spotify API.


## Features

- Trending Albums: View a list of trending albums on the home page.
- Search Albums: Search for albums based on albums names.
- Error Handling: Proper error handling for API requests and display appropriate messages to the user.
- Loading States: Indicate loading states during API requests to provide better user experience.
- Responsive Design: The app is responsive and works well on different devices and screen sizes.

## Technologies Used


- Next.js: A React framework for server-side rendering and building scalable applications.
- Tailwind CSS: A utility-first CSS framework for styling the app.
- TanStack Query: A data-fetching and caching library for handling API requests.
- Spotify API: The Spotify Web API is used for fetching album data.
- TypeScript

## Installation

Clone the repository:


```bash
git clone https://github.com/your-username/spotify-trishan.git
```

Navigate to the project directory:


```bash
cd spotify-trishan
```

Install the dependencies:
```bash
npm install
```

Create .env file

Add API KEY from Spotify API on .env file as guided on .env.sample file

```bash
NEXT_PUBLIC_API_KEY=Your API Key
```

Start the development server:
```bash
npm run dev
```

Open your browser and visit **http://localhost:3000** to see the app.


## Usage
- Home Page: The home page displays a list of trending albums.
- Search Albums Page: The search page allows you to search for albums.
- Album Details Page: When clicked on particular album, you'll be redirected to Album Details Page where you can get detailed information about particular album. 

## Acknowledgements
- This app uses the Spotify Web API. Thanks to Spotify for providing the API and documentation.
- TanStack Query for handling data fetching and caching

## Contact
For any questions or inquiries, please email mailtotrishan@gmail.com
