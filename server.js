const express = require('express');
const cors = require('cors');
const projects = require('./data/helpers/projectModel');
const actions = require('./data/helpers/actionModel');
const port = 8000
const server = express();
server.use(express.json());
server.use(cors());




const sendUserError = (status, message, res) => {
    // This is just a helper method that we'll use for sending errors when things go wrong.
    res.status(status).json({ errorMessage: message });
    return;
  };

server.get('/', (req, res) => {
    res.send(`Your sprint challenge server on port ${port} is up and running!!`);
})

//----ACTIONS-----
//get(): calling get returns an array of all the resources contained in the database.
server.get('/api/actions', (req, res) => {
    actions
        .get()
        .then(action => {
            res.json( action );
        })
        .catch(error => {
            res.json({ error });
        });
    // res.json('testing get');
});

//get():  If you pass an id to this method it will return the resource with that id if one is found.
server.get('api/actions/:id', (req, res) => {
    const { id } = req.params;
    actions
        .get(id)
        .then(action => {
            res.json( action );
        })
        .catch(error => {
            res.json({ error });
        });
    // res.json('testing get');
});

//---ACTION - CREATE-----
server.post('/api/actions', (req, res) => {
    
    actions
        .insert(req.body)
        .then(action => {
            res.json( action );
        })
        .catch(error => {
            res.json({ error });
        });
    // res.json('testing get');
});

//----ACTION - UPDATE----
// server.put('/api/actions/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, description, completed } = req.body;
//     // // const updatedProject = { name, description, completed };
//     actions
//         .update(req.body)
//         .then(action => {
//             res.json( action );
//         })
//         .catch(error => {
//             res.json({ error });
//         });
//     // res.json('testing get');
// });



//------PROJECTS-------
//get(): calling get returns an array of all the resources contained in the database.
server.get('/api/projects', (req, res) => {
    projects
        .get()
        .then(projects => {
            res.json( projects );
        })
        .catch(error => {
            res.status(500).json({ error: 'Database is messed up!' });
        });
});

//get():  If you pass an id to this method it will return the resource with that id if one is found.
server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    projects
        .get(id)
        .then(projects => {
            res.json( projects );
        })
        .catch(error => {
            res.json({ error });
        });
});

//-----PROJECT - DELETE------
server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    actions
        .remove(id)
        .then(action => {
            res.json( action );
        })
        .catch(error => {
            res.json({ error });
        });
    // res.json('testing get');
});

//---PROJECT - CREATE-----
server.post('/api/projects', (req, res) => {
    
    projects
        .insert(req.body)
        .then(project => {
            res.json( project );
        })
        .catch(error => {
            res.json({ error });
        });
    // res.json('testing get');
});

// //---PROJECT - UPDATE------
server.put('/api/projects/:id', (req, res) => {
    const { name, description, completed } = req.body;
    const updatedProject = { name, description, completed };
    if (!name || !description) {
        res.status(404).json({ error: 'Must provide name and description.' });
        return;
    }
    const { id } = req.params;
    projects
        .update(id, updatedProject)
        .then(project => {
            res.json(project);
        })
        .catch(err =>
            res.json({ error })
        );
});

//-----PROJECT - DELETE------
server.delete('/api/projects/:id', (req, res) => {
const { id } = req.params;
projects
    .remove(id)
    .then(project => {
        res.json( project );
    })
    .catch(error => {
        res.json({ error });
    });
// res.json('testing get');
});


server.listen( port, () =>
{
    console.log( `Server listening on port ${ port }` );
} )