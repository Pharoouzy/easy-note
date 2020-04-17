## EASY NOTE API

## Introduction
Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes..

## Overview
This API has two sections in the request: message and data

## Error Codes
- Status code 500 is returned for server error 
- Status code 422 is returned for validation errors
- Status code 404 is returned for missing data

## Endpoints

### Creating a new note ```{{url}}/notes```

# Request Method: ```POST```

- Use this endpoint to create new note

# Request Information

| Parameter | Data Type | Description | Mandatory(M)/Optional(O)|
|-----------|-----------|-------------|-------------------------|
|title | string | title of the note | O |
|content | string | content of the note | M |

### Retrieving all notes ```{{url}}/notes```

# Request Method: ```GET```

- This endpoint provide the list of all the notes in database


### Retrieving a single note ```{{url}}/notes/:noteId```

# Request Method: ```GET```

- Get a single note by its ID

###### Url Parameter
- **noteId**: The id of the note


### Uupdate a single note ```{{url}}/notes/:noteId```

# Request Method: ```PUT```

- Update a single note by its ID

###### Url Parameter
- **noteId**: The id of the note

### Uupdate a single note ```{{url}}/notes/:noteId```

# Request Method: ```DELETE```

- Delete a single note by its ID

###### Url Parameter
- **noteId**: The id of the note