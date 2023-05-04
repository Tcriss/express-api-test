# Express API test

A simple api with the basic methods to show, add, edit and delete content.

### npm modules used

- mongoose
- bodyParser
- express

### Install Dependencies

```
npm install 
```
### Endpoints

with the `npm start` you can run the api at port 2000, here are the endpoints if you want to tested:

##### Show Projects

```
http://localhost:2000/api-test/projects
```

##### Get a single project through id parameter

```
http://localhost:2000/api-test/project/:id
```

##### Edit a project
```
http://localhost:2000/api-test/edit/:id
```

##### Delete a project
```
http://localhost:2000/api-test/delete/:id
```