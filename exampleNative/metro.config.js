const { getDefaultConfig } = require('@react-native/metro-config')
const { mergeConfig } = require('metro-config')

const path = require('path')
const exclusionList = require('metro-config/src/defaults/exclusionList')
const escape = require('escape-string-regexp')
const pack = require('../react-native-icon-pack/package.json')

const root = path.resolve(__dirname, '..')
const modules = Object.keys(pack.peerDependencies)

const config = {
  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we exclude them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blacklistRE: exclusionList(
      modules.map(
        (m) =>
          new RegExp(
            `^${escape(path.join(path.resolve(__dirname, '../react-native-icon-pack'), 'node_modules', m))}\\/.*$`,
          ),
      ),
    ),

    extraNodeModules: modules.reduce(
      (acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name)
        return acc
      },
      {
        '@swmansion/icons': path.resolve(__dirname, '..'),
      },
    ),
    nodeModulesPath: [path.resolve(path.join(__dirname, './node_modules'))],
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
