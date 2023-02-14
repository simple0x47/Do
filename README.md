# Do

Basic ToDo application developed with Typescript and Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Do Server

In order to be able to access the Admin features and keep track of the actions done by the users, an instance of DoServer must be available at the previously configured URL within the environment files that must be located in `src/environments`.

Here is the template for the environment file:

```
export const environment = {
    production: true,
    auth0: {
        domain: 'simple0x47.eu.auth0.com',
        clientId: '',
        audience: "do-backend",
    },
    task_api: {
        url: 'http://localhost:8020/task',
        actions_per_request: 10,
        send_action_after_seconds: 30,
    },
    user_api: {
        url: 'http://localhost:8020/user',
    },
    translation_api: {
        url: 'https://translation.googleapis.com/language/translate/v2',
        api_key: ''
    }
};

```
