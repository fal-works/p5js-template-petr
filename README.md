# p5.js Template PETR

*Other languages (wiki):* [[ ja ]](https://github.com/fal-works/p5js-template-petr/wiki/Readme-ja)

## About

Template project for creating [p5.js](https://p5js.org/) sketches using the following tools:

- Code editor: [Visual Studio Code](https://code.visualstudio.com/)
- Other tools: [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [TypeScript](https://www.typescriptlang.org/) and [Rollup](https://rollupjs.org/).

See also [other templates](https://fal-works.github.io/p5js-templates/).


## Usage

### Prepare your environment

In general, the below only need to be done once.

1. Install the software as follows:

   - [Visual Studio Code](https://code.visualstudio.com/) (VS Code in short)
   - [Node.js](https://nodejs.org/)

2. Install the VS Code extensions as follows:

    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
    (from CLI: `code --install-extension esbenp.prettier-vscode`)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
    (from CLI: `code --install-extension dbaeumer.vscode-eslint`)

### Prepare to create your sketch

Do the below each time you start to create a new sketch using this template.

1. Create your sketch folder by copying this template.

2. Open your sketch folder with VS Code.  
Then run the following command-line, which installs several package dependencies:

    ```shell
    npm install
    ```

3. Enable the VS Code extensions for Prettier and ESLint (see above), if disabled.

Now Prettier and ESLint work automatically each time you edit/save your code.  
If they seem to be not working, reload window of VS Code.

### Create/edit your sketch

1. Edit code in `src` directory.

    - If you rename `main.ts`, you should reflected that in `rollup.config.js` as well.
    - Feel free to change anything else.

2. Run the following command-line:

    ```shell
    npm run build
    ```

    This will first generate `*.js` files (transpiled from `*.ts` files) in `tsc-out` directory, then bundle them and save as `dist/script.js`.

3. Open `dist/index.html` to see the result.


## Dependencies (npm)

### Important ones

- [Prettier](https://www.npmjs.com/package/prettier)
- [ESLint](https://www.npmjs.com/package/eslint)
- [TypeScript](https://www.npmjs.com/package/typescript)
- [Rollup](https://www.npmjs.com/package/rollup)

### Type definitions

- [@types/p5](https://www.npmjs.com/package/@types/p5)

### For ESLint

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@fal-works/eslint-config-p5js](https://www.npmjs.com/package/@fal-works/eslint-config-p5js)
