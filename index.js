#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What you want to do?',
		choices: [
			{
				name: `Send me an ${chalk.green.bold('email')}?`,
				value: () => {
					open('mailto:2001.srkmaysrk@gmail.com');
					console.log('\nDone, see you soon at inbox.\n');
				},
			},
			{
				name: 'Quit',
				value: () => {
					console.log('Adios amiga.\n');
				},
			},
		],
	},
];

const data = {
	name: chalk.bold.green('             Shivani R'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ShivaniR_srk'),
	github: chalk.gray('https://github.com/') + chalk.green('shivu-srk'),
	linkedin:
		chalk.gray('https://linkedin.com/in/') +
		chalk.blue('shivani-ravikumar'),
	npx: chalk.red('npx') + ' ' + chalk.white('shivani'),

	labelTwitter: chalk.white.bold('    Twitter:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
	[
		`${data.name}`,
		``,
		`${data.labelTwitter}  ${data.twitter}`,
		`${data.labelGitHub}  ${data.github}`,
		`${data.labelLinkedIn}  ${data.linkedin}`,
		``,
		`${data.labelCard}  ${data.npx}`,
		``,
		`${chalk.italic(
			"When you have a dream, you've got to grab it and never let go.",
		)}`,
	].join('\n'),
	{
		margin: 1,
		float: 'center',
		padding: 1,
		borderStyle: 'single',
		borderColor: 'green',
	},
);

console.log(me);
const tip = [
	`Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
	'',
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
