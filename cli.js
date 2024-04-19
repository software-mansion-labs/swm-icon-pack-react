#!/usr/bin/env node

import yargs from 'yargs/yargs'
import {hideBin} from 'yargs/helpers'
import svgtofont from 'svgtofont'
import fs from 'fs'
import path from 'path'

const argv = yargs(hideBin(process.argv))
  .option('source', {
    alias: 's',
    describe: 'Provide path to svg source',
    type: 'string',
  })
  .option('output', {
    alias: 'o',
    describe: 'Provide font output directory',
    type: 'string',
  })
  .option('fontName', {
    alias: 'f',
    describe: 'Provide font name',
    type: 'string',
  }).argv

const sourcesPath = path.resolve(process.cwd(), argv.source)
const outputPath = path.resolve(process.cwd(), argv.output)
const glyphMap = {}

svgtofont({
  src: sourcesPath,
  dist: outputPath,
  emptyDist: true,
  fontName: argv.fontName,
  css: false,
  outSVGReact: false,
  outSVGReactNative: false,
  outSVGPath: false,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  getIconUnicode: (iconName, _unicode, charValue) => {
    glyphMap[iconName] = charValue

    return [iconName, charValue]
  },
})
  .then(() => {
    fs.writeFileSync(`${outputPath}/glyphmap.json`, JSON.stringify(glyphMap))

    console.log('Font created')
  })
  .catch(err => {
    console.warn('Error while creating fonts:', err)
  })
  .finally(() => {
    // svgtofont creates other font files automatically, which is not configurable
    // lines below should remove them completely
    fs.readdir(outputPath, (err, files) => {
      if (err) throw err

      files.forEach(file => {
        if (file.endsWith('.json') || file.endsWith('.ttf')) return

        fs.unlink(path.join(outputPath, file), err => {
          if (err) console.warn('Error while deleting unused file', err)
        })
      })
    })
  })
