# Piano Demo
Just a simple piano app done with quasar and ionic for android.

You can see a working deploy of this demo on [https://piano.devartiral.com](https://piano.devartiral.com)

## Install with quasar cli

### Install quasar cli
```bash
sudo npm i -g @quasar/cli
```

### Install dependencies
```bash
yarn
# or
npm install
```

### Start the app in web development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build -m capacitor -T android
```

## Install with docker
Just run:
```bash
docker compose up --build --detach
```

This will deploy the full app as a web app on `localhost:6144`.
