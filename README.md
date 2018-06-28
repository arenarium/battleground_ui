[![Codacy Badge](https://api.codacy.com/project/badge/Grade/287dd00f3d31428c957514e6c1ab283b)](https://www.codacy.com/app/arenarium/battleground_ui?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=arenarium/battleground_ui&amp;utm_campaign=Badge_Grade)

# User Interface for the Battleground

### Dependencies
- React
- Semantic UI
- React Redux
- Flask
- Travis
- Vagrant

### Getting Started
Start vagrant:
```
vagrant up
vagrant ssh
```

Run some games to populate the database:
```
battleground_start --dynamic --count 20
```

Start the backend dev server:
```
yarn run api
```

Start the frontend dev server:
```
yarn run start
```

open your browser to `localhost:3000`

### Storybook
To start storybook

```
yarn run storybook
```
