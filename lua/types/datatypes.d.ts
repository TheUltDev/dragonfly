declare module '*.json' {
  const value: JsonValue
  export default value
}

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | {[key: string]: JsonValue}
