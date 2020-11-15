# Upload App — Back-end

### You can also access the Front-end of the application by [clicking here](https://github.com/hmberto/app-upload-front-end).

![ScreenShot](https://github.com/hmberto/app-upload-front-end/blob/master/img/img01.png)
### React App: An image upload interface. Node.JS v14.4.0.

## How it Works
First of all, using NodeJs v14.4.0 run **npm install** to install dependencies. Now navigate to the root and then update the **.env** file. 

We used a non-relational mongoDB Atlas database in the project. it's online and free. After opening an account you can create a new Cluster and complement it in the file as shown below.
~~~
USER_DB=user1
PASS_DB=passw0rd
CLUSTER_DB=cluster0
DB_NAME=teste

APP_URL=http://192.168.15.9:3000
~~~
Add the correct domain of your environment in which it is running to the **APP_URL .env** file.

You can now start your application using **npm start**. After that it will be able to perform GET, POST and DELETE requests in the **/posts** route.

## Resources
- POST requests to send a file;
- GET requests when accessing the front-end app to load previously uploaded files;
- DELETE requests by passing the image ID to delete from the database;

## Important
By default the Back-end only accepts **image files** with a maximum size of **2MB**. If you want to change it you can follow the steps:

- Navigate to **/src/config** and change the **multer.js** file.

### Default (2MB):
~~~
limits: {
  fileSize: 2*1024*1024,
},
~~~

### You can increase to as much as you want (5MB):
~~~
limits: {
  fileSize: 5*1024*1024,
},
~~~

To change the type of file that can be received:
~~~
const allowedMimes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/gif'
]
~~~
You can choose to receive the files you want.

All uploaded files will be stored in /tmp/uploads. Data such as name, size, id and URL are stored in an online non-relational database. We used mongoDB Atlas for this project. You can create an account by clicking [here](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986516&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRqBjxkOBg4EdNCLjgq9YZBCbDJn_CfVEjRG3iGpANhPi8cXRhK0HPUaAvwvEALw_wcB). After that create a new Cluster and then add the connection data in the **.env** file in the application's root directory.

## Why?
This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: [humbertoodantas@gmail.com](humbertoodantas@gmail.com)

Connect with me at [LinkedIn.](https://www.linkedin.com/in/humbertoodantas/)

Also, you can use this Project as you wish.

It's free!

## Built With:
* [React](https://pt-br.reactjs.org/)

Thank you!