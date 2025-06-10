# online-food-store
Create an online food store using Angular, Node js and MongoDB 
## Lessons
1. create angular app 
    1. create project folder
    2. Install Angular/cli (npm install -g @angular/cli)
    3. Create App as front end (ng new project-name)
2. Add Header
    1. Generate component (ng g c components/partials/header) generate the header component inside component folder
    2. Adding HTML & CSS
3. List Food
    1. create the food model (app/shared/models/Food.ts)
    2. create the data.ts (to hold samples of the food) => src/data.ts
    3. add the food images to public folder
    4. create the food service (ng g s food inside services folder) inside it all the methods you need like getAll()
    5. generate the home componnet
        1. Add ts
        2. Add html
        3. Add css
4. search method
    1. Add method to food service (define search method in the service.ts file)
    2. Add search Route {path: 'search/:search, componenet: Home}
    3. Show search in home screen in home.ts file form line 14 to 21
    4. Generate search componenet
        1. add search to home componenet
        2. add html search component
        3. add required css for search
5. Food Page
    1. Add method to food service (getFoodById())
    2. Generate food page component
        1. Add Route ({path:'food/:id', componnt:FoodPage})
        2. Add ts
6. Tags Bar
    1. create Tag model (ng g m TagModel)
    2. Adding sample tags to data.ts
    3. Adding food service
        1. Add get all tags method getAllTags()
        2. Add get all foods by tag method getAllFoodByTagsMethod()
    4. Adding tags Route
    5. show tags in Home component
    6. Generate the Tags Component
        1. Add tags to home component
        2. Add ts
        3. Add html
7. Cart Page
    1. create CartItem Page
    2. create cart Model
    3. Geberate the Cart service
    4. add button in food page
    5. generate cart page componenet
        1. add Route
        2. add ts
        3. add html
        4. add css