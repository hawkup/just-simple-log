type Options = {
  tabWidth: number
}

export default {
  log(args: unknown, options: Options = { tabWidth: 2 }) {
    console.log(JSON.stringify(args, null, options.tabWidth))
  },
  error(args: unknown, options: Options = { tabWidth: 2 }) {
    console.error(JSON.stringify(args, null, options.tabWidth))
  },
  warn(args: unknown, options: Options = { tabWidth: 2 }) {
    console.warn(JSON.stringify(args, null, options.tabWidth))
  },
  info(args: unknown, options: Options = { tabWidth: 2 }) {
    console.info(JSON.stringify(args, null, options.tabWidth))
  }
}
