#!/usr/bin/env node

import { greeting, askName } from '../src/cli.js';

greeting(askName());
