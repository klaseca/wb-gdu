# WarfaceBot - game data updater

## For what

If you use a [warfacebot](https://github.com/Levak/warfacebot), this program will help you update game data with one click in all folders with bots.

## Settings

### Default update type:

This block is responsible for automatically loading the necessary section for updating.

### Auto servers select:

This block is responsible for the automatic selection of servers for automatic updates.

### Manual update type:

This block is responsible for automatic server selection for manual updates.

### Settings path:

This block is responsible for the location of your files that need updating.

- **Single paths:** If your bot is located in the `C:\bot` folder, then this path will need to be added to update the files in it

- **Multi paths:** If you have several bots, then you can create a separate folder for them and add one path, rather than a separate path for each. (Example: You have the `C:\bot1` and `C:\bot2` folders, create a `C:\bots` folder, move the `bot1` and `bot2` folders there and add one single `C:\bots` path)

## Building or development project

- Before starting work, run the command:

```shell
npm i
```

- Сreate an `.env` file and set the environment variable.

- To dev a project, run the command:

```shell
npm run dev
```

- To build a project, run the command:

```shell
npm run pack
```
