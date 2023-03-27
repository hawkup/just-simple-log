export default {
  log<T>(args: T) {
    console.log(JSON.stringify(args, null, 2))
  },
  error<T>(args: T) {
    console.error(JSON.stringify(args, null, 2))
  },
  warn<T>(args: T) {
    console.warn(JSON.stringify(args, null, 2))
  },
  info<T>(args: T) {
    console.info(JSON.stringify(args, null, 2))
  }
}
