import { writeFile } from '../../../utils/filesystem.js';
import * as config from '../../../../wsgen.json' assert {type: "json"};
import { body, head } from './constants.js';

export const projectPage = () => {
  writeFile(config.default.outputdir + "projects.html", head + body)
}