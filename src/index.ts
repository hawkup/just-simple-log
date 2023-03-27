export default {
  log(args: unknown) {
    console.log(JSON.stringify(args, null, 2))
  },
  error(args: unknown) {
    console.error(JSON.stringify(args, null, 2))
  },
  warn(args: unknown) {
    console.warn(JSON.stringify(args, null, 2))
  },
  info(args: unknown) {
    console.info(JSON.stringify(args, null, 2))
  }
}
