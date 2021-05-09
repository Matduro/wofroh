| Method | Path | Purpose | |:---:|:---|:---|
| GET | /resources | Retrieve all of a resource (Browse) |
| GET | /resources/:id | Retrieve a particular resource (Read) |
| POST | /resources/:id | Update a resource (Edit) |
| POST | /resources | Create a new resource (Add) |
| POST | /resources/:id/delete | Delete an existing resource (Delete) |
This method of specifying URLs is chainable (eg. /user/123, /user/123/resource or /user/123/resource/456)

| GET | /index | Retrieve front page (Read) |
| GET | /muscle | Retrieve muscle group category selection list (Read) |
| GET | /equipment | Retrieve a list of equipment to choose from (Read) |
| GET | /workout/:id | Retrieve a particular workout program (Read) |

| POST | /index | Select from criteria (Edit) |
| POST | /muscle | Select from muscle group category (Edit) |
| POST | /equipment | Selection from the list of equipment (Edit |
POST for completed workout?

OPTIONAL ROUTES
| GET | /login | Retrieve login page
| POST | /exercises/:id | Select a set of exercise from the list (Edit) |
| GET | /exercises/:id | Retrieve a set of exercises to choose from (Read) |
