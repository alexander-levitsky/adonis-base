/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import {Ignitor} from '@adonisjs/core/build/standalone'
import cluster from 'cluster';

sourceMapSupport.install({handleUncaughtExceptions: false});


if (cluster.isPrimary) {
  for (let i = 0; i < Number(process.env.NUMBER_OF_PROCESSORS); i++) {
    cluster.fork();
  }
} else {
  new Ignitor(__dirname).httpServer().start()
}
