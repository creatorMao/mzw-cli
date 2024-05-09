#!/usr/bin/env node
import { program } from 'commander'
import chalk from 'chalk'
import download from 'download-git-repo'
import ora from 'ora'

//定义使用方法
program
    .usage('<project-name>')

//解析命令参数
program.parse(process.argv)

//拿到第一个参数
let projectName = program.args[0]

console.log(chalk.white(`  开始生成${projectName}项目! `))

const spinner = ora("正在获取模板...");
spinner.start();

download(
    "creatorMao/vue3-template", //写死了
    projectName,
    err => {
        if (err) {
            spinner.fail();
            console.log(chalk.red(`  生成失败！ ${err}`))
            return
        }

        spinner.succeed();
        console.log(chalk.green(`  成功生成${projectName}项目!`))
        console.log('\n  快速开始吧：')
        console.log(`  cd ${projectName}`)
        console.log(`  code .`)
    }
)


