
import chalk from 'chalk';

const log = console.log;

const successMessage  = (message: string): void =>{
    log(chalk.green(message));
}
 
const errorMessage  = (message: string): void =>{
    log(chalk.red(message));
}

export {
    successMessage,
    errorMessage
}
