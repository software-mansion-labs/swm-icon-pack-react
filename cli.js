#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import svgtofont from 'svgtofont';
import fs from 'fs';
import path from 'path';
import SVGFixer from 'oslllo-svg-fixer';

const removeTempDirectory = (sourcePath) => {
  const outputDirectory = path.join(sourcePath, 'temp');
  fs.rmdirSync(outputDirectory, {recursive: true, force: true});
}

const removeRedundantFiles = (outputPath) => {
  fs.readdir(outputPath, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      if (file === 'glyphmap.json' || file.endsWith('.ttf')) return;

      fs.unlink(path.join(outputPath, file), err => {
        if (err) console.warn('Error while deleting unused file', err);
      });
    });
  });
}

const convertSvgToFont = (sourcePath, outputPath, fontName) => {
  const glyphMap = {};

  svgtofont({
    src: path.join(sourcePath, 'temp'),
    dist: outputPath,
    emptyDist: true,
    fontName,
    css: false,
    outSVGReact: false,
    outSVGReactNative: false,
    outSVGPath: false,
    generateInfoData: true,
    svgicons2svgfont: {
      fontHeight: 1000,
      normalize: true
    }
  })
    .then(() => {
      fs.readFile(path.join(outputPath, 'info.json'), { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;

        const infoJson = JSON.parse(data);
        for (const iconName in infoJson) {
          const unicodeString = infoJson[iconName].unicode.replace(/[^0-9.]/g, '');
          glyphMap[iconName] = Number.parseInt(unicodeString);
        }

        fs.writeFileSync(`${outputPath}/glyphmap.json`, JSON.stringify(glyphMap));
      });

      console.log('Font created');
    })
    .catch(err => {
      console.log('Error while creating fonts:', err);
    })
    .finally(() => {
      removeRedundantFiles(outputPath);
      removeTempDirectory(sourcePath);
    });
}

const cleanupSvg = (source) => {
  const outputDirectory = path.join(source, 'temp');
  if (!fs.existsSync(outputDirectory)) fs.mkdirSync(outputDirectory, {recursive: true});

  return SVGFixer(source, outputDirectory).fix();
}

const main = () => {
  const argv = yargs(hideBin(process.argv))
    .option('source', {
      alias: 's',
      describe: 'Provide path to svg source',
      type: 'string'
    })
    .option('output', {
      alias: 'o',
      describe: 'Provide font output directory',
      type: 'string'
    })
    .option('fontName', {
      alias: 'f',
      describe: 'Provide font name',
      type: 'string'
    }).argv;

  const sourcesPath = path.resolve(process.cwd(), argv.source);
  const outputPath = path.resolve(process.cwd(), argv.output);
  const fontName = argv.fontName;

  cleanupSvg(sourcesPath).then(() => {
    convertSvgToFont(sourcesPath, outputPath, fontName)
  })
}

main()


