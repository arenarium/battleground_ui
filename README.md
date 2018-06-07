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
