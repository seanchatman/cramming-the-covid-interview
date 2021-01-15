# React (web framework)

From [Wikipedia, the free encyclopedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)

> React (also known as React.js or ReactJS) is an [open-source](https://en.wikipedia.org/wiki/Open-source), [front end](https://en.wikipedia.org/wiki/Front_end_and_back_end),
> [JavaScript library](https://en.wikipedia.org/wiki/JavaScript_library) for building [user interfaces](https://en.wikipedia.org/wiki/User_interfaces)
> or UI components.
> It is maintained by Facebook and a community of individual developers
> and companies.[4][5][6] React can be used as a base in the development
> of [single-page](https://en.wikipedia.org/wiki/Single-page_application) or mobile applications. However, React is only concerned
> with rendering data to the DOM, and so creating React applications
> usually requires the use of additional libraries for state management
> and routing.[7][8] Redux[9] and React Router[10] are respective
> examples of such libraries.

# Hooks

### Counter button

```javascript
import React, { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
```

### RandomUser.me with Paging

```javascript
import React, { useState, useEffect } from "react";

const fetchUserPage = (page) => {
  return fetch(`https://randomuser.me/api/?results=5&page=${page}`)
    .then((value) => value.json())
    .then((json) => json.results);
};

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getFirst = async () => {
      const users = await fetchUserPage(1);
      setUserList([...users]);
    };

    getFirst();
    setPage(2);
  }, [setPage, setUserList]);

  const getNextPage = async () => {
    const users = await fetchUserPage(page);
    setUserList([...userList, ...users]);
  };

  return (
    <div>
      <h1>USER LIST</h1>
      <ol>
        {userList.map((user) => (
          <li>
            <img src={user.picture.thumbnail} alt="user avatar" />
            {user.name.first}
          </li>
        ))}
      </ol>
      <button onClick={() => getNextPage()}>Add</button>
    </div>
  );
}
```

### Notes app:

```javascript
import React, { useState } from "react";

const handleSubmit = (e, notes, setNotes, input, setInput) => {
  e.preventDefault();
  const id = notes.length ? notes[notes.length - 1].id + 1 : 0;

  setNotes([...notes, { id, message: input }]);
  setInput("");
};

const deleteNote = (id, notes, setNotes) => {
  setNotes(notes.filter((note) => note.id !== id));
};

export const Note = ({ id, message, deleteNote }) => {
  return (
    <li>
      Note: {id}, {message}{" "}
      <button onClick={() => deleteNote(id)}>delete</button>
    </li>
  );
};

export default () => {
  const [notes, setNotes] = useState([{ id: 1, message: "1st Note" }]);

  const [input, setInput] = useState("");

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button>Submit</button>
      </form>
      {notes.map((note) => (
        <Note
          message={note.message}
          id={note.id}
          deleteNote={(id) => deleteNote(id, notes, setNotes)}
          key={note.id}
        />
      ))}
    </div>
  );
};
```

### RandomUser.me JSON fetch and display

```javascript
import React, { useEffect, useState } from "react";

export default function () {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((value) => value.json())
      .then((json) => {
        setData(JSON.stringify(json.results, null, 2));
      });
  }, []);

  return (
    <div>
      <pre>{data}</pre>
    </div>
  );
}
```

### RandomUser.me JSON fetch, image, and name

```javascript
import React, { useEffect, useState } from "react";

export default function () {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((value) => value.json())
      .then((json) => {
        setUserList(json.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {userList.map((value) => {
          return (
            <li>
              <img src={value.picture.thumbnail} alt="user avatar" />
              {value.name.first + " " + value.name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

# Cheatsheets:

- [React.js cheatsheet (DEVHINTS.IO)](https://devhints.io/react)
