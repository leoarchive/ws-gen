import { writeFile } from '../../../utils/filesystem.js';
import * as config from '../../../../wsgen.json' assert {type: "json"};
import { body, head } from './constants.js';

export const postsPage = () => {
  writeFile(config.default.outputdir + "posts.html", head + body)
}