# Practicing Dynamic Routes

![Preview](/public/screen-ezgif.com-video-to-gif-converter.gif)

The main objective was to create a site containing dynamic routes.So the best way to show it was some sorts of cards or title where user create on it and based on its id or anything we can navigate to the desired route. So i selected to create an ecommerce site where i used a [Fake Product API](https://fakestoreapi.com/) and fetched the data and displayed in accordingly.When user clicks on the product card the will we routed to a product page where they can view the product in details

Firstly i set up a react project with 
```
npm create vite@latest project-name
```
Then i installed a few packages like tailwind for styling and react-router-dom for client side routing

```
npm install react-router-dom
```

I set up the routes one for **Home Page** and other for displaying **Product** when clicked on the card with a dynamic url 

```
path='product/:prodId'
```

When user clicked on the product card i passed the product id throught the ```<Link></Link>``` tag from react-router-dom 

I fetched the id from the url using ```useParams``` hook also from react-router-dom to get the dynamic url which is id and and i then called the api and display the product


For local installation:


Clone the repos:

```
git clone Bytewise/TASK-DYNAMIC-ROUTES
```

Run locally:
```
npm run dev
```

Building:

```
npm run build
```
