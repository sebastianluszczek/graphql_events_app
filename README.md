# EventSide (FullStack App)

### Node.js Express.js GraphQL MongoDB Vue.js Apollo

> My first fullstack application with completed frontend side (Vue.js) and backend (Node + GraphQL).
> In aplication you can login or create account, and after this, create your own or book others. for authentication app uses JWT.

---

## In project i use:

### For backend

<p style="float: left">
<img src="https://spectrum.imgix.net/communities/33d6ade9-d505-40f2-926d-b8836bdccdd0/graphql.png.0.7616626405032714?w=256&h=256&expires=1541894400000&ixlib=js-1.2.0&s=2dbd900fb5e88743c15fbdce89635429" alt="GraphQL" width="64" style="display: inline">
<img src="http://www.tech-app.fr/wp-content/uploads/2015/04/nodejs.png" alt="Node.js" width="64" style="display: inline">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88qsrd0PXJzWBK2MYRgBWchcs-LMBYwBncfMuLDlAWjHbUXvGIw" alt="Express" width="64" style="display: inline">
<img src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB" width="64" style="display: inline">
<img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" alt="JWT" width="64" style="display: inline">
</p>
</p>
<p style="clear: both">

### For frontend

<p style="float: left">
<img src="https://cdn-images-1.medium.com/max/800/1*qiTJR-sO5ULMV1YqCItT8w.jpeg" alt="Vue.js" width="64" style="display: inline">
<img src="https://g00glen00b.be/wp-content/uploads/2018/02/apollo-logo.png" alt="Apollo" width="64" style="display: inline">
<img src="https://icon2.kisspng.com/20180815/ta/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0a0f4b2.3928971215343725126593.jpg" alt="Sass" width="64" style="display: inline">
</p>
<p style="clear: both">

---

### Build Setup

Concurrently npm package allow aplication to run two localhosts with one npm script:

```bash
# after cloning repo install dependencies for server
npm install

# and for client
cd client && npm install

# go back to project root directory
cd ..

# run dev-serve with hot reload at localhost:4001 for server and localhost:8080 for client
npm run dev

# or build for production with minification
npm run build

```

After runing server you have access to graphiQL app at http://localhost:40001/graphql
