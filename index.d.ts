import { Linter, ESLint } from 'eslint'

declare const plugin: ESLint.Plugin & {
    configs: {
        recommended: Linter.FlatConfig[]
    }
}

export default plugin
