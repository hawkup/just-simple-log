type Options = {
  tabWidth: number
}

export const log = (args: unknown, options: Options = { tabWidth: 2 }) => {
  console.log(JSON.stringify(args, null, options.tabWidth))
}

export const error = (args: unknown, options: Options = { tabWidth: 2 }) => {
  console.error(JSON.stringify(args, null, options.tabWidth))
}

export const warn = (args: unknown, options: Options = { tabWidth: 2 }) => {
  console.warn(JSON.stringify(args, null, options.tabWidth))
}

export const info = (args: unknown, options: Options = { tabWidth: 2 }) => {
  console.info(JSON.stringify(args, null, options.tabWidth))
}
