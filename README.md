# Alfred Website

Portfolio website for Alfie Hilton. Displays multiple projects made by him, includes images of models as well as 3D interactive envirnoments to look around the models. 


## Adding Projects

### Initial Setup

1. Download [VS Code](https://code.visualstudio.com/download)
2. Download [Github Desktop](https://desktop.github.com/)
3. Clone repo (Ctrl+Shift+O). Click URL tab and type: `https://github.com/Joshlucpoll/alfred-website`

### Add a Project

1. **IMPORTANT** Click 'Fetch Origin' on the top row to update local repo with Github changes
2. Open Github Desktop and click 'Open in Visual Studio Code' button
3. In VS Code on the left panel navigate to `src/assets` folder
4. Create a new folder inside the `assets` folder for new project
5. Copy images/glb file into project folder
6. In `assets` folder open `projects.ts` file
7. Add this JSON structure to the `projects` array:
  
-- Without model
```
{
  "title": "<title>",
  "path": function() {return "/" + urlify(this.title)},
  "model": false,
  "titleImage": "/assets/<project-folder-name>/<title-image-file>",
  "images": [
    "/assets/<project-folder-name>/<image-1-file>",
    "/assets/<project-folder-name>/<image-2-file>"
  ],
  "videos": [
    "/assets/<project-folder-name>/<image-1-file>"
  ],
  "description": "<description>"
},
```


--With model
You may need to play around with camera position
```
{
  "title": "<title>",
  "path": function() {return "/" + urlify(this.title)},
  "model": {
    "path": "/assets/<project-folder-name>/<glb-file>",
    "cameraPosition": {
      "x": 1,
      "y": 4,
      "z": 1
    }
  },
  "titleImage": "/assets/<project-folder-name>/<title-image-file>",
  "images": [
    "/assets/<project-folder-name>/<image-1-file>",
    "/assets/<project-folder-name>/<image-2-file>"
  ],
  "videos": [
    "/assets/<project-folder-name>/<image-1-file>"
  ],
  "description": "<description>"
},
```

#### ***IMPORTANT***
With arrays (items within a pair of square brackets `[]`) the last item should **not** have a trailing comma
For example the last project in the `projects` array shouldn't have a comma; another example is the description shouldn't have a comma at the end


The order of the projects in the `projects` array determines the order they show up on the website

Make sure all the file paths correspond with actual files


7. Save all the files and close VS Code
8. Go back to Github Desktop - you should see pending changes; select all of them
9. Press commit to master
10. Wait a couple minutes for the build to complete - you can see the progress of the build [here](https://github.com/Joshlucpoll/alfred-website/actions)
11. Done!
